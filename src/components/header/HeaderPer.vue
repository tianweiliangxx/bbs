<template>
    <div class="headerPer">
        <ul class="perInfo">
            <li class="login" v-if="false"><router-link to="/index/login">登录</router-link> / <router-link to="/index/register">注册</router-link></li>
            <li class="person"><router-link to="/index/personal">张飞</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HeaderPer",
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
