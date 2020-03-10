<template>
    <div class="SideNav">
        <div class="LeftNav">
            <ul class="NavTitle">
                <router-link to="/main/statistics"><li class="stair">用户统计</li></router-link>
                <router-link to="/main/userManagement"><li class="stair">用户管理</li></router-link>
                <router-link to="/main/postManagement"><li class="stair">帖子管理</li></router-link>
                <li class="stair" @click="outAdmin()">退出账号</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SideNav',
        methods:{
            outAdmin(){
                localStorage.clear()
                alert('退出成功')
                this.$router.go(0)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .SideNav
        width 100%
        .LeftNav
            width 100%
            position relative
            .NavTitle
                .stair
                    height 40px
                    line-height 40px
                    text-align left
                    border-bottom 1px solid #ccc
                    padding 0 0 0 10px
                    color #fff
                    &:hover
                        cursor pointer
                        background-color rgba(245, 245, 245, .7)
                .second
                    li
                        border-bottom 1px solid #ccc
                        padding 0 0 0 20px
                        background-color rgba(220, 220, 220, .7)
</style>