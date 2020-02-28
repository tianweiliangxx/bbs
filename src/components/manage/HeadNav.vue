<template>
    <div class="HeadNav">
        <el-menu
                class="el-menu-demo"
                mode="horizontal"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#98e165">
            <li class="el-menu-item icon">后台管理</li>
        </el-menu>
        <div class="userAdmin">
            刘备
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeadNav',
        methods: {
            // 把点击的该项的值传给Index
            changeNav (name) {
                this.$emit('sideNav', name)
            }
        }
    }
</script>

<style lang="stylus">
    .HeadNav
        width 100%
        height 100%
        .icon
            background-color #fff
            width 177px
            font-family "迷你简行楷"
            font-size 18px
            color #000
            opacity 1
        .userAdmin
            font-size 28px
            color #fff
            display inline
            position absolute
            right 10px
            top 10px
</style>