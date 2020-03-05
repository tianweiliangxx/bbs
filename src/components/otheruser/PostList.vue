<template>
    <div class="NewsList">
        <div class="title">
            <h2>帖子列表</h2>
        </div>
        <div class="content">
            <ul class="left">
                <li class="Llist" v-for="item in this.postList"><router-link :to=" { path:'/index/article', query: {id: item.id} }">{{item.title}}</router-link></li>
            </ul>
            <ul class="right">
                <li class="Rlist" v-for="item in this.postList"><i class="el-icon-time">{{item.create_time}}</i></li>
            </ul>
        </div>
        <div class="page">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="totalPage*10"
                    :page-size="10"
                    @current-change = 'changePage'>
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import {
        userPostList,

    } from '../../api/index'
    export default {
        name: "PostList",
        data () {
            return {
                radio: '',
                postList:'',
                postTime:'',
                totalPage:'',
                id: this.$route.query.id,
                otherInfo:'',
                ifFollow:''
            }
        },
        mounted() {
            userPostList(this.id,1).then(res => {
                console.log(res);
                this.postList = res.data.data.post_list
                this.totalPage = res.data.data.total_page
            })
        },
        methods: {
            changePage(e){
                userPostList(this.id,e).then(res => {
                    console.log(res);
                    this.postList = res.data.data.post_list
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .NewsList
        width 90%
        height 80%
        margin 30px 30px
        background-color #fff
        .title
            font-size 28px
        .content
            overflow hidden
            height 460px
            .left
                float: left
                .Llist
                    width 540px
                    height 42px
                    line-height 42px
                    border-bottom 1px solid #ccc
            .right
                float:left
                .Rlist
                    font-size 12px
                    width 160px
                    height 42px
                    line-height 42px
                    border-bottom 1px solid #ccc
        .page
            position absolute
            left 830px
            bottom 100px
</style>