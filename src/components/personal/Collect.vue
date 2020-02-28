<template>
    <div class="Collect">
        <div class="title">
            <h2>我的收藏</h2>
        </div>
        <div class="content">
            <ul class="left">
                <li class="Llist">实时更新：新型冠状病毒肺炎全国疫情地图</li>
                <li class="Llist">实时更新：新型冠状病毒肺炎全国疫情地图</li>
                <li class="Llist">实时更新：新型冠状病毒肺炎全国疫情地图</li>
                <li class="Llist">实时更新：新型冠状病毒肺炎全国疫情地图</li>
                <li class="Llist">实时更新：新型冠状病毒肺炎全国疫情地图</li>
                <li class="Llist">实时更新：新型冠状病毒肺炎全国疫情地图</li>
            </ul>
            <ul class="right">
                <li class="Rlist"><i class="el-icon-time"></i>2020年2月28日11:34:28</li>
                <li class="Rlist"><i class="el-icon-time"></i>2020年2月28日11:34:28</li>
                <li class="Rlist"><i class="el-icon-time"></i>2020年2月28日11:34:28</li>
                <li class="Rlist"><i class="el-icon-time"></i>2020年2月28日11:34:28</li>
                <li class="Rlist"><i class="el-icon-time"></i>2020年2月28日11:34:28</li>
                <li class="Rlist"><i class="el-icon-time"></i>2020年2月28日11:34:28</li>
            </ul>
        </div>
        <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "Collect",
        data () {
            return {
                radio: ''
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .Collect
        width 90%
        height 80%
        margin 30px 30px
        background-color #fff
        .title
            font-size 28px
        .content
            overflow hidden
            .left
                float: left
                .Llist
                    width 540px
                    height 60px
                    line-height 60px
                    border-bottom 1px solid #ccc
            .right
                float:left
                .Rlist
                    font-size 12px
                    width 160px
                    height 60px
                    line-height 60px
                    border-bottom 1px solid #ccc
</style>