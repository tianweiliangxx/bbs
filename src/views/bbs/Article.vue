<template>
    <div class="article">
        <div class="content">
            <div class="left">
                <div class="card">
                    <h1>新闻标题</h1>
                    <span>2020年2月27日15:40:45</span>
                    <div class="split"></div>
                    <p><b>播音</b></p>
                    <p><b>作者</b></p>
                    <p><b>要闻</b></p>
                    <p>新闻内容</p>
                    <p>在越来越多的证据显示疫情将对韩国经济造成打击的情况下，韩国央行周四意外维持主要利率保持不变，但下调了对今年的增长预期。

                        韩国央行政策委员会将基准利率稳定在 1.25％，而市场普遍预期韩国央行会降息 25 个基点以抵御持续扩散的疫情影响。

                        但韩国央行下调了今年的经济预期，预测今年经济增长 2.1％，低于 11 月份预测的 2.3％，以反映出疫情对经济影响的不确定性。

                        在韩国央行利率决定公布后，韩元兑美元汇率一度大幅上涨但随后回落，而三年期国债期货合约则下跌。</p>
                </div>
                <div class="collect">
                    <el-button type="primary" icon="el-icon-star-off" round>收藏</el-button>
                </div>
                <div class="commentOn">
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                    <el-button type="success" icon="el-icon-check" circle></el-button>
                </div>
                <div class="comment">
                    <p>6条评论</p>
                    <ul>
                        <li class="list">
                            <div class="listL"></div>
                            <div class="listR">
                                <p>176325895xxx</p>
                                <p>这是我的评论</p>
                                <div class="listRB">
                                    <div class="sj">2020年2月27日16:34:18</div>
                                    <div class="operation"><i class="el-icon-chat-line-square"></i>回复 <i class="el-icon-thumb"></i>点赞</div>
                                </div>
                            </div>
                        </li>
                        <li class="list">
                            <div class="listL"></div>
                            <div class="listR">
                                <p>176325895xxx</p>
                                <p>这是我的评论</p>
                                <div class="listRB">
                                    <div class="sj">2020年2月27日16:34:18</div>
                                    <div class="operation"><i class="el-icon-chat-line-square"></i>回复 <i class="el-icon-thumb"></i>点赞</div>
                                </div>
                            </div>
                        </li>
                        <li class="list">
                            <div class="listL"></div>
                            <div class="listR">
                                <p>176325895xxx</p>
                                <p>这是我的评论</p>
                                <div class="listRB">
                                    <div class="sj">2020年2月27日16:34:18</div>
                                    <div class="operation"><i class="el-icon-chat-line-square"></i>回复 <i class="el-icon-thumb"></i>点赞</div>
                                </div>
                            </div>
                        </li>
                        <li class="list">
                            <div class="listL"></div>
                            <div class="listR">
                                <p>176325895xxx</p>
                                <p>这是我的评论</p>
                                <div class="listRB">
                                    <div class="sj">2020年2月27日16:34:18</div>
                                    <div class="operation"><i class="el-icon-chat-line-square"></i>回复 <i class="el-icon-thumb"></i>点赞</div>
                                </div>
                            </div>
                        </li>
                        <li class="list">
                            <div class="listL"></div>
                            <div class="listR">
                                <p>176325895xxx</p>
                                <p>这是我的评论</p>
                                <div class="listRB">
                                    <div class="sj">2020年2月27日16:34:18</div>
                                    <div class="operation"><i class="el-icon-chat-line-square"></i>回复 <i class="el-icon-thumb"></i>点赞</div>
                                </div>
                            </div>
                        </li>
                        <li class="list">
                            <div class="listL"></div>
                            <div class="listR">
                                <p>176325895xxx</p>
                                <p>这是我的评论</p>
                                <div class="listRB">
                                    <div class="sj">2020年2月27日16:34:18</div>
                                    <div class="operation"><i class="el-icon-chat-line-square"></i>回复 <i class="el-icon-thumb"></i>点赞</div>
                                </div>
                            </div>
                        </li>
                        <li class="list">
                            <div class="listL"></div>
                            <div class="listR">
                                <p>176325895xxx</p>
                                <p>这是我的评论</p>
                                <div class="listRB">
                                    <div class="sj">2020年2月27日16:34:18</div>
                                    <div class="operation"><i class="el-icon-chat-line-square"></i>回复 <i class="el-icon-thumb"></i>点赞</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="right">
                <ul>
                    <li class="rank"><div class="rankIcon"><i class="el-icon-s-marketing"></i></div>  点击排行</li>
                    <li class="rank"><div class="rankIcon1"><i class="iconfont icon-1"></i></div>  新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1</li>
                    <li class="rank"><div class="rankIcon2"><i class="iconfont icon-2"></i></div>  新闻2</li>
                    <li class="rank"><div class="rankIcon3"><i class="iconfont icon-3"></i></div>  新闻2</li>
                    <li class="rank"><div class="rankIcon4"><i class="iconfont icon-4"></i></div>  新闻2</li>
                    <li class="rank"><div class="rankIcon4"><i class="iconfont icon-5"></i></div>  新闻2</li>
                    <li class="rank"><div class="rankIcon4"><i class="iconfont icon-6"></i></div>  新闻2</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Newest",
        data () {
            return {
                input:''
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .article
        width: 100%
        margin-top 4px
        .content
            width 80%
            margin: 0 auto
            overflow hidden
            .left
                width 60%
                margin-left 2%
                background-color #fff
                float left
                .card
                    margin 10px
                .collect
                    display inline
                    margin-left 306px
                .commentOn
                    margin-top 4px
                .comment
                    margin 10px
                    margin-top 20px
                    padding: 10px
                    .list
                        border-top 1px solid #ccc
                        overflow hidden
                        .listL
                            width 30px
                            height 30px
                            border-radius 2px
                            background-color #000
                            float left
                            margin-top 2px
                            font-size 14px
                        .listR
                            margin-left 10px
                            float: left
                            .listRB
                                width 100%
                                color: #ccc
                                font-size 12px
                                overflow hidden
                                .sj
                                    float left
                                    block inline
                                .operation
                                    margin-left: 10px
                                    float right
                                    block inline
            .right
                width 30%
                height 619px
                margin-left 8%
                background-color #fff
                float left
            ul
                .rank
                    width 357px
                    height 60px
                    background-color: #fff
                    border-bottom 1px solid #cccccc
                    line-height 52px
                    padding-left 8px
                    white-space: nowrap
                    overflow: hidden;
                    text-overflow:ellipsis
                .rankIcon
                    position: relative
                    display: inline
                    top 6px
                    color rgb(66, 152, 242)
                    font-size 28px
                    border-radius 5px
                .rankIcon1
                    position: relative
                    top 5px
                    display: inline
                    color #ff3333
                    border-radius 5px
                    .icon-1
                        font-size 28px
                .rankIcon2
                    position: relative
                    top 5px
                    display: inline
                    color #ff722b
                    font-size 28px
                    border-radius 5px
                    .icon-2
                        font-size 28px
                .rankIcon3
                    position: relative
                    top 5px
                    display: inline
                    color #ffaa33
                    border-radius 5px
                    .icon-3
                        font-size 28px
                .rankIcon4
                    position: relative
                    display: inline
                    color rgb(66, 152, 242)
                    border-radius 5px
</style>