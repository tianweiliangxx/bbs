<template>
    <div class="statistics">
        <div class="state">
            <ul>
                <li class="list">
                    <div class="num">325648人</div>
                    <div class="text">用户总数</div>
                </li>
                <li class="list lista">
                    <div class="num">23453人</div>
                    <div class="text">用户月新增人数</div>
                </li>
                <li class="list listb">
                    <div class="num">2354人</div>
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
    export default {
        name: "Statistics",
        data () {
            return {
            }
        },
        mounted() {
            this.drawChart();
        },
        methods: {
            drawChart() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById("main"));
                // 指定图表的配置项和数据
                let option = {
                    title: {
                        text: "ECharts 入门示例"
                    },
                    tooltip: {},
                    legend: {
                        data: ["销量"]
                    },
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [
                        {
                            name: "销量",
                            type: "bar",
                            data: [5, 20, 36, 10, 10, 20]
                        }
                    ]
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
    .my-chart {
        width: 800px;
        height: 500px;
    }
</style>