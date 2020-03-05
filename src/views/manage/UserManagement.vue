<template>
    <div class="userManagement">
        <h2 class="title">用户管理</h2>
        <div class="list">
            <table>
                <tr>
                    <th>用户名</th>
                    <th>手机号</th>
                    <th>注册时间</th>
                    <th>最后登录时间</th>
                </tr>
                <tr class="user" v-for="(item,index) in UserManagementData.users">
                    <th>{{item.nick_name}}</th>
                    <th>{{item.mobile}}</th>
                    <th>{{item.register}}</th>
                    <th>{{item.last_login}}</th>
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
    import {userList} from '../../api/index'
    export default {
        name: "UserManagement",
        data(){
            return{
                UserManagementData:'',
                totalPage:''
            }
        },
        mounted() {
            userList(localStorage.adminId, 1).then(res => {
                this.UserManagementData = res.data.data
                this.totalPage = res.data.data.total_page
            })
        },
        methods: {
            changePage(e){
                userList(localStorage.adminId, e).then(res => {
                    this.UserManagementData = res.data.data
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
.userManagement
    width 80%
    height 530px
    margin 0 auto
    background-color #fff
    margin-top 50px
    padding: 10px 10px
    .title
        font-size 28px
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