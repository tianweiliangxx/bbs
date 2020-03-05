<template>
    <div class="statistics">
        <div class="state">
            <ul>
                <li class="list">
                    <div class="num">{{this.userData.total_count}}人</div>
                    <div class="text">用户总数</div>
                </li>
                <li class="list lista">
                    <div class="num">{{this.userData.mon_count}}人</div>
                    <div class="text">用户月新增人数</div>
                </li>
                <li class="list listb">
                    <div class="num">{{this.userData.day_count}}人</div>
                    <div class="text">用户日新增人数</div>
                </li>
            </ul>
        </div>
        <div id="app">
            <div id="main" style="width: 600px;height:400px;"></div>
        </div>
    </div>
</template>

<script>
    import {userCount} from '../../api/index'
    export default {
        name: "Statistics",
        data () {
            return {
                id: this.$route.query.id,
                userData:''
            }
        },
        mounted() {
            userCount(localStorage.adminId).then(res => {
                console.log(res);
                this.userData = res.data.data
                this.drawChart(res.data.data);
            })

        },
        methods: {
            drawChart(data) {
                let oneself = this
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById("main"));
                // 指定图表的配置项和数据
                let option = {
                    title: {
                        text: "用户登录活跃量"
                    },
                    tooltip: {},
                    legend: {
                        data: [""]
                    },
                    xAxis: {
                        type: 'category',
                        data: data.active_time
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: data.active_count,
                        type: 'line'
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        },
    }
</script>

<style lang="stylus" scoped>
.statistics
    width 100%
    .state
        overflow hidden
        margin-top 20px
        .list
            background-color #c98d59
            width 30%
            height 100px
            float left
            margin-left 3%
            .num
                text-align center
                height 80px
                line-height 80px
                font-size 28px
                color #fff
            .text
                text-align: center
                background-color rgba(0, 0, 0, .5)
                height 20px
                line-height: 20px
                color #fff
        .lista
            background-color #9aa850
        .listb
            background-color #2c6a93
    #app
        width 60%
        height 400px
        margin 0 auto
        background-color #fff
        margin-top 40px
</style>