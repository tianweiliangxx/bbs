<template>
    <div class="Attention">
        <div class="title">
            <h2>我的关注</h2>
        </div>
        <div class="content">
            <ul class="particulars">
                <li class="list" v-for="item in userList">
                    <div class="top">
                        <div class="cut"></div>
                        <div class="portrait"><img class="img" src="/imgs/bdimg.jpeg" alt=""></div>
                        <div class="name"><router-link :to="{path:'/index/otheruser', query: {id: item.id}}">{{item.nick_name}}</router-link></div>
                    </div>
                    <div class="bottom">
                        <div class="cut"></div>
                        <table class="heat">
                            <tr>
                                <th>总篇数</th>
                                <th class="fans">粉丝</th>
                            </tr>
                            <tr>
                                <th>{{item.post_count}}</th>
                                <th class="fans">{{item.followers_count}}</th>
                            </tr>
                        </table>
                        <div class="btn"> <el-button type="mini" @click="followUser(item.id,'unfollow')">取消关注</el-button></div>
                    </div>
                </li>

            </ul>
        </div>
        <div class="pages">
            <el-pagination
                    layout="prev, pager, next"
                    :total="totalPage*4"
                    :page-size="4"
                    @current-change = 'changePage'>
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import {
        userFollow,
        followedUser
    } from '../../api/index'
    export default {
        name: "Attention",
        data () {
            return {
                radio: '',
                userList:'',
                totalPage:''
            }
        },
        mounted() {
            userFollow(localStorage.userId, 1).then(res => {
                this.userList = res.data.data.users
                this.totalPage = res.data.data.total_page
            })
        },
        methods: {
            changePage(e){
                userFollow(localStorage.userId,e).then(res => {
                    this.userList = res.data.data.users
                })
            },
            followUser(id, type) {
                followedUser(localStorage.userId, type, id).then(res => {
                    alert(res.data.errmsg)
                    this.$router.go(0)
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .Attention
        width 96%
        height 416px
        margin 20px 20px
        .title
            font-size 28px
        .content
            overflow hidden
            .list
                width 16%
                height 160px
                float left
                margin-right 20px
                margin-top 10px
                margin-left 10px
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
                            width 20px
                            height 20px
                            border-radius 20px
                    .name
                        width 40px
                        margin-top 11px
                        margin-left 20px
                        float left
                        font-size 14px
                        white-space: nowrap
                        overflow: hidden;
                        text-overflow:ellipsis
                .bottom
                    width 100%
                    height 70px
                    .cut
                        height 2px
                    .heat
                        margin-top 10px
                        margin-left 8px
                        .fans
                            width 40px
                            text-align center
                    .btn
                        position: relative
                        top: -88px
                        left 19px
        .pages
            position: absolute
            bottom 200px
            right 262px
</style>