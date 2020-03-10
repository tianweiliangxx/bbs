<template>
    <div class="article">
        <div class="content">
            <div class="left">
                <div class="card">
                    <h1>{{this.postInfo.title}}</h1>
                    <span>时间：{{this.postInfo.create_time}}</span>
                    <div class="split"></div>
                    <p><b>播音</b></p>
                    <p><b>作者: <router-link :to="{path:'/index/otheruser', query: {id: this.author.id}}">{{this.author.nick_name}}</router-link></b></p>
                    <p><b>概要：{{this.postInfo.digest}}</b></p>
                    <p>新闻内容:</p>
                    <div v-html="this.postInfo.content"></div>
                    <div>
                        <img class="postImg" :src="imgsPoto" alt="">
                    </div>
                </div>
                <div class="collect">
                    <el-button v-if="!this.data.is_collected" @click="followed(postInfo.id, 'collect')" type="primary" icon="el-icon-star-off" round>收藏</el-button>
                    <el-button v-if="this.data.is_collected" @click="followed(postInfo.id, 'cancel_collect')" type="primary" icon="el-icon-star-on" round>取消收藏</el-button>
                </div>
                <div class="commentOn">
                    <el-input v-model="input" :placeholder="this.inputTip" style="width:50%;margin-left:40px"></el-input>
                    <el-button type="success" @click="pushComment" title="提交评论" icon="el-icon-check" circle style="margin-left: 20px"></el-button>
                </div>
                <div class="comment">
                    <p>{{comments.length}}条评论</p>
                    <ul>
                        <li class="list" v-for="item in comments">
                            <div class="listL"></div>
                            <div class="listR">
                                <p><router-link :to="{path:'/index/otheruser', query: {id: item.user.id}}">{{item.user.nick_name}}</router-link><span class="listRTitle" v-if="isShow(item.parent)">回复{{item.parent.content}}</span></p>
                                <p>{{item.content}}</p>
                                <div class="listRB">
                                    <div class="sj">{{item.create_time}}</div>
                                    <div class="operation">
                                        <i class="el-icon-chat-line-square iconStyle" @click="reply(item.id, item.user.nick_name)">回复</i> <i class="el-icon-thumb iconStyle" ><span v-if="!item.is_like" @click="giveLike(item.id)">点赞</span><span v-if="item.is_like" @click="removeLike(item.id)">取消赞</span></i><i>  获赞数：{{item.like_count}}</i>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="right">
                <ul>
                    <li class="rank"><div class="rankIcon"><i class="el-icon-s-marketing"></i></div>  点击排行</li>
                    <li class="rank" v-for="(item, index) in this.dataUserHot"><div :class="calculate(index, 'div')"><i :class="calculate(index, 'icon')"></i></div><router-link  :to="{path:'/index/article',query:{id: item.id}}">{{item.title}}</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import  {
        postDetail,
        newsCollect,
        newsComment,
        commentLike,
        getUserHot,
        getPostImg
    } from '../../api/index'
    import { mapState } from 'vuex'
    export default {
        name: "Newest",
        data () {
            return {
                data:'',
                input:'',
                inputTip:'请输入评论',
                id: this.$route.query.id,
                postInfo:'',
                author:'',
                comments:'',
                commentId: '',
                dataUserHot:'',
                imgsPoto:''
            }
        },
        computed: {
            ...mapState(['isLogin', 'userInfo']),
        },
        methods: {
            calculate(index, type){
                if (type === 'icon') {
                    index = index + 1
                    return 'iconfont icon-' + index
                }
                if (type === 'div') {
                    index = index + 1
                    return 'rankIcon' + index
                }
            },
            followed (id, type) {
                let oneself = this
                newsCollect(id, type, localStorage.userId).then(res => {
                    console.log(res);
                    alert(res.data.errmsg)
                    oneself.$router.go(0)
                })
            },
            // 评论
            pushComment () {
                let oneself = this
                if (this.commented === ''){
                    newsComment(localStorage.userId, this.id, this.input).then(res => {
                        console.log(res);
                        alert(res.data.errmsg)
                        oneself.$router.go(0)
                    })
                }else{
                    newsComment(localStorage.userId, this.id, this.commentId, this.input).then(res => {
                        console.log(res);
                        alert(oneself.inputTip + res.data.errmsg)
                        oneself.$router.go(0)
                    })
                }
            },
            reply (id, nick_name) {
                this.inputTip = '回复用户' + nick_name
                this.commentId = id
            },
            giveLike (id) {
                let oneself = this
                commentLike(localStorage.userId, 'add', id).then(res => {
                    alert('点赞成功')
                    oneself.$router.go(0)
                })
            },
            // 取消赞
            removeLike (id) {
                let oneself = this
                commentLike(localStorage.userId, 'remove', id).then(res => {
                    alert('取消成功')
                    oneself.$router.go(0)
                })
            },
            isShow (data) {
                if(data === null || data === false) {
                    return false
                }else{
                    return true
                }
            },
            tipUser(){
                if(!localStorage.userId){
                    this.inputTip = '请登录后评论'
                }
            }
        },
        created() {
            postDetail(this.id, localStorage.userId).then(res => {
                console.log(res);
                this.data = res.data.data
                this.postInfo = res.data.data.post
                this.author = res.data.data.post.author
                this.comments = res.data.data.comments
            })
            getUserHot().then(res => {
                console.log(res);
                this.dataUserHot = res.data.data.news_dict_li
            })
            getPostImg(this.id).then(res => {
                console.log(res);
                this.imgsPoto = 'data:image/png;base64,' + btoa(new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))
            })
            this.tipUser()
        },
    }
</script>

<style lang="stylus" scoped>
    .article
        width: 100%
        margin-top 48px
        .content
            width 80%
            margin: 0 auto
            overflow hidden
            .left
                width 60%
                margin-left 2%
                background-color #fff
                float left
                margin-bottom 60px
                .card
                    margin 10px
                    .postImg
                        width 400px
                        height 300px
                        margin-left 150px
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
                        margin-top 10px
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
                            .listRTitle
                                font-size 10px
                            .listRB
                                position relative
                                top 1px
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
                                    .iconStyle:hover
                                        cursor: pointer
            .right
                width 30%
                height 500px
                margin-left 8%
                margin-top 40px
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
                .rankIcon5
                    position: relative
                    display: inline
                    color rgb(66, 152, 242)
                    border-radius 5px
                .rankIcon6
                    position: relative
                    display: inline
                    color rgb(66, 152, 242)
                    border-radius 5px
</style>