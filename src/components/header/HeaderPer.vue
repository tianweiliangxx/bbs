<template>
    <div class="headerPer">
        <ul class="perInfo">
            <li class="login" v-if="!isLogin"><router-link to="/index/login">登录</router-link> / <router-link to="/index/register">注册</router-link></li>
            <li class="person" v-if="isLogin"><router-link to="/index/personal">{{userInfo.userName}}</router-link></li>
        </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "HeaderPer",
        computed: {
            ...mapState(['isLogin', 'userInfo'])
        }
    }
</script>

<style lang="stylus" scoped>
    .headerPer
        position absolute
        left 800px
        top 20px
        color #fff
        width 100px
        .login
            float: right
            line-height: -0.6rem
            a
                color #fff
        .person
            float: right
            line-height: -0.6rem
            a
                color #fff
</style>
