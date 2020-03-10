<template>
    <div class="newest">
        <div class="content">
            <div class="left">
                <div id="main" class="auto">
                    <div id="left">
                        <div class="box_wrap">
                            <h3>最新</h3>
                            <div class="num">
                                总贴：<span>{{this.post_dict_li.length}}</span>
                            </div>
                            <div class="notice">放松一下吧</div>
                        </div>
                        <div style="clear:both;"></div>
                        <!-- 帖子列表 -->
                        <ul class="postsList">
                            <li v-for="(item, index) in this.data.post_dict_li">
                                <div class="smallPic">
                                    <a href="#">
                                        <img width="45" height="45" :src="item.img">
                                    </a>
                                </div>
                                <div class="subject">
                                    <div class="titleWrap"><a href="#">[最新]</a>&nbsp;&nbsp;<h2><router-link :to=" { path:'/index/article', query: {id: item.id} }">{{item.title}}</router-link></h2></div>
                                    <p>
                                        发表时间：{{item.create_time}}
                                    </p>
                                </div>
                                <div class="count">
                                    <p>
                                        回复<br /><span>41</span>
                                    </p>
                                    <p>
                                        浏览<br /><span>896</span>
                                    </p>
                                </div>
                                <div style="clear:both;"></div>
                            </li>
                        </ul>
                        <!-- 分页 -->
                        <div class="pages">
                            <el-pagination
                                    layout="prev, pager, next"
                                    :total='post_dict_liLength * totalPage'
                                    :page-size="5"
                                    @current-change="changePage">
                            </el-pagination>
                        </div>
                    </div>
                    <div style="clear:both;"></div>
                </div>
            </div>
            <div class="right">
                <ul>
                    <li class="rank"><div class="rankIcon"><i class="el-icon-s-marketing"></i></div>  点击排行</li>
                    <li class="rank" v-for="(item, index) in this.dataUserHot"><div :class="calculate(index, 'div')"><i :class="calculate(index, 'icon')"></i></div>  {{item.title}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        postList,
        getUserHot
    } from '../../api/index'
    export default {
        name: "Newest",
        data () {
            return {
                data: '',
                dataUserHot:'',
                post_dict_li:'',
                post_dict_liLength: '',
                totalPage:''
            }
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
            changePage(e){
                postList(1, e, 5).then(res => {
                    console.log(res);
                    this.data = res.data.data
                    this.post_dict_li = res.data.data.post_dict_li
                })
            }
        },
        beforeCreate () {
            postList().then(res => {
                console.log(res);
                this.data = res.data.data
                this.post_dict_li = res.data.data.post_dict_li
                this.post_dict_liLength = res.data.data.post_dict_li.length
                this.totalPage = res.data.data.total_page
            })
            getUserHot().then(res => {
                console.log(res);
                this.dataUserHot = res.data.data.news_dict_li
            })
        }
    }
</script>

<style lang="stylus" scoped>
    .newest
        width: 100%
        margin-top 48px
        .content
            width 80%
            margin: 0 auto
            overflow hidden
            .left
                width 60%
                height 619px
                margin-left 2%
                background-color #fff
                float left
                #main {
                    margin-top:10px;
                }
                #main #left {
                    width:638px;
                    padding:7px 20px;
                    float:left;
                }
                #main #right {
                    width:282px;
                    float:right;
                }
                #main #left .box_wrap {
                    color:#666;
                    line-height:22px;
                }
                #main #left div.box_wrap h3 {
                    margin:14px 0 0 0;
                    font-size:14px;
                    color:red;
                }
                #main #left div.num span {
                    color:#000;
                    font-weight:bold;
                }
                #main #left div.moderator span {
                    color:#333;
                }
                #main #left div.pages_wrap {
                    margin:12px 0 0 0;
                }
                #main ul.postsList {
                    margin:10px 0 0 0;
                    border-top:1px dashed #ddd;
                }
                #main ul.postsList li {
                    border-bottom:1px dashed #ddd;
                    padding:15px 0;
                }
                #main ul.postsList li div.smallPic {
                    width:55px;
                    float:left;
                }
                #main ul.postsList li div.subject {
                    width:450px;
                    float:left;
                }
                #main ul.postsList li div.count {
                    color: #999;
                    line-height: 18px;
                    text-align: center;
                }
                #main ul.postsList li div.count p {
                    background: none repeat scroll 0 0 #f4f4f4;
                    border-radius: 3px;
                    display: block;
                    float: right;
                    height: 36px;
                    margin: 0 0 0 10px;
                    overflow: hidden;
                    padding: 4px 0;
                    width: 54px;
                }
                #main ul.postsList li div.count p span {
                    font-weight:bold;
                }
                #main ul.postsList li div.subject .titleWrap a,#main ul.postsList li div.subject .titleWrap h2 {
                    font-size:14px;
                    color:#105cb6;
                }
                #main ul.postsList li div.subject .titleWrap h2 {
                    display:inline;
                }
                #main ul.postsList li div.subject p {
                    color:#999;
                    padding:10px 0 0 0;
                }

                #main #right .classList .title {
                    width:260px;
                    margin:0 auto;
                    padding:7px 0;
                    font-weight:bold;
                    color:#666;
                    text-indent:10px;
                    border-bottom:1px solid #e8e8e8;
                }
                #main #right .classList ul.listWrap {
                    width:220px;
                    margin:15px auto 0 auto;
                }
                #main #right .classList ul.listWrap li h2 a {
                    color:#333;
                    font-weight:normal;
                }
                #main #right .classList ul.listWrap li ul {
                    margin:5px 0 10px 0px;
                }
                #main #right .classList ul.listWrap li ul li {
                    line-height:180%;
                    border-radius:3px;
                    color: #666;
                    padding-left:10px;
                }
                #main #right .classList ul.listWrap li ul li h3 a {
                    font-weight:normal;
                    color:#666;
                }
                #main #right .classList ul.tagList {
                    width:240px;
                    margin:0 auto;
                }
                #main #right .classList ul.tagList li {
                    display:inline-block;
                    margin:10px 5px 5px 0;
                }
                #main #right .classList ul.tagList li a {
                    background:none repeat scroll 0 0 #f6f6f6;
                    border-radius:3px;
                    color:#333333;
                    display:block;
                    float:left;
                    height:24px;
                    line-height:24px;
                    padding:0 8px;
                    text-decoration:none;
                }
                #main #right .classList ul.tagList li a:hover {
                    background:#999;
                    color:#fff;
                }
                .pages
                    position: absolute
                    bottom 100px
                    left 300px
            .right
                width 30%
                height 450px
                margin-left 40px
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