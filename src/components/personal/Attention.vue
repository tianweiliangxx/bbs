<template>
    <div class="Attention">
        <div class="title">
            <h2>我的关注</h2>
        </div>
        <div class="content">
            <ul class="particulars">
                <li class="list">
                    <div class="top">
                        <div class="cut"></div>
                        <div class="portrait"><img class="img" src="/imgs/bdimg.jpeg" alt=""></div>
                        <div class="name">关羽</div>
                    </div>
                    <div class="bottom">
                        <div class="cut"></div>
                        <table class="heat">
                            <tr>
                                <th>总篇数</th>
                                <th class="fans">粉丝</th>
                            </tr>
                            <tr>
                                <th>112</th>
                                <th class="fans">2332</th>
                            </tr>
                        </table>
                        <div class="btn"> <el-button>关注</el-button></div>
                    </div>
                </li>
                <li class="list">
                    <div class="top">
                        <div class="cut"></div>
                        <div class="portrait"><img class="img" src="/imgs/bdimg.jpeg" alt=""></div>
                        <div class="name">关羽</div>
                    </div>
                    <div class="bottom">
                        <div class="cut"></div>
                        <table class="heat">
                            <tr>
                                <th>总篇数</th>
                                <th class="fans">粉丝</th>
                            </tr>
                            <tr>
                                <th>112</th>
                                <th class="fans">2332</th>
                            </tr>
                        </table>
                        <div class="btn"> <el-button>关注</el-button></div>
                    </div>
                </li>
                <li class="list">
                    <div class="top">
                        <div class="cut"></div>
                        <div class="portrait"><img class="img" src="/imgs/bdimg.jpeg" alt=""></div>
                        <div class="name">关羽</div>
                    </div>
                    <div class="bottom">
                        <div class="cut"></div>
                        <table class="heat">
                            <tr>
                                <th>总篇数</th>
                                <th class="fans">粉丝</th>
                            </tr>
                            <tr>
                                <th>112</th>
                                <th class="fans">2332</th>
                            </tr>
                        </table>
                        <div class="btn"> <el-button>关注</el-button></div>
                    </div>
                </li>
                <li class="list">
                    <div class="top">
                        <div class="cut"></div>
                        <div class="portrait"><img class="img" src="/imgs/bdimg.jpeg" alt=""></div>
                        <div class="name">关羽</div>
                    </div>
                    <div class="bottom">
                        <div class="cut"></div>
                        <table class="heat">
                            <tr>
                                <th>总篇数</th>
                                <th class="fans">粉丝</th>
                            </tr>
                            <tr>
                                <th>112</th>
                                <th class="fans">2332</th>
                            </tr>
                        </table>
                        <div class="btn"> <el-button>关注</el-button></div>
                    </div>
                </li>
            </ul>
        </div>
        <el-pagination
                layout="prev, pager, next"
                :total="50">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "Attention",
        data () {
            return {
                radio: ''
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .Attention
        width 90%
        height 80%
        margin 30px 30px
        .title
            font-size 28px
        .content
            overflow hidden
            .list
                width 40%
                height 160px
                float left
                margin-right 20px
                margin-top 10px
                margin-left 20px
                background-color rgb(226, 233, 230)
                .top
                    width 100%
                    height 90px
                    .cut
                        height 10px
                    .portrait
                        float left
                        margin-left 20px
                        margin-top 10px
                        .img
                            width 40px
                            height 40px
                            border-radius 20px
                    .name
                        margin-top 11px
                        margin-left 20px
                        float left
                        font-size 28px
                .bottom
                    width 100%
                    height 70px
                    .cut
                        height 2px
                    .heat
                        margin-top 10px
                        margin-left 8px
                        .fans
                            width 20px
                            text-align center
                    .btn
                        position: relative
                        top: -60px
                        left 166px
</style>