<template>
    <div class="userManagement">
        <h2 class="title">帖子管理</h2>
        <div class="list">
            <div class="serch">
                搜索：<el-input v-model="serchValue" placeholder="请输入内容" style="width:40%"></el-input><el-button plain @click="serchPost">搜索</el-button>
            </div>
            <table>
                <tr>
                    <th>标题</th>
                    <th>发布时间</th>
                    <th>操作</th>
                </tr>
                <tr class="user" v-for="(item,index) in UserManagementData.post_list">
                    <th>{{item.title}}{{item.id}}</th>
                    <th>{{item.create_time}}</th>
                    <th><el-button @click="deletePost(item.id)" type="danger" icon="el-icon-delete" circle></el-button></th>
                </tr>
            </table>
        </div>
        <div class="pageHeader">
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
        adminPostList,
        postDel
    } from '../../api/index'
    export default {
        name: "PostManagement",
        data(){
            return{
                UserManagementData:'',
                totalPage:'',
                serchValue:''
            }
        },
        mounted() {
            adminPostList(localStorage.adminId, 1, this.serchValue).then(res => {
                console.log(res);
                this.UserManagementData = res.data.data
                this.totalPage = res.data.data.total_page
            })
        },
        methods: {
            changePage(e){
                if (this.serchValue === '') {
                    console.log(1);
                    adminPostList(localStorage.adminId, e, this.serchValue).then(res => {
                        console.log(res);
                        this.UserManagementData = res.data.data
                    })
                }else{
                    console.log(this.serchValue);
                    adminPostList(localStorage.adminId, e, this.serchValue).then(res => {
                        console.log(2);
                        this.UserManagementData = res.data.data
                    })
                }
            },
            deletePost(id){
                postDel(localStorage.adminId, id).then(res => {
                    console.log(res);
                    this.$router.go(0)
                })
            },
            serchPost(){
                adminPostList(localStorage.adminId, 1, this.serchValue).then(res => {
                    this.UserManagementData = res.data.data
                    this.totalPage = res.data.data.total_page
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .userManagement
        width 80%
        height 560px
        margin 0 auto
        background-color #fff
        margin-top 50px
        padding: 10px 10px
        .title
            font-size 28px
        .list
            .serch
                width:40%
                margin-left 392px
                margin-bottom 10px
        .pageHeader
            position absolute
            right 138px
            bottom 0px
    table
    {
        border-collapse: collapse;
        margin: 0 auto;
        text-align: center;
    }
    table td, table th
    {
        border: 1px solid #cad9ea;
        color: #666;
        height: 40px;
        line-height 40px
    }
    table thead th
    {
        background-color: #CCE8EB;
        width: 100px;
    }
    table tr:nth-child(odd)
    {
        background: #fff;
    }
    table tr:nth-child(even)
    {
        background: #F5FAFA;
    }
</style>