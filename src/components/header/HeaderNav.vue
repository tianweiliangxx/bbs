<template>
    <div class="headerNav">
        <el-menu
                class="el-menu-demo"
                menu-trigger="click"
                background-color="rgba(255,255,255,0)"
                text-color="#fff"
                mode="horizontal"
                active-text-color="#ffd04b"
                router>
            <el-menu-item index="/index/nba" title="NBA">NBA</el-menu-item>
            <el-menu-item index="/index/cba" title="CBA">CBA</el-menu-item>
            <el-menu-item index="/index/relaxation" title="步行街">步行街</el-menu-item>
            <el-menu-item index="/index/game" title="游戏区">游戏区</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "HeaderNav",
        data(){
            return{
            }
        },
        computed:{
        },
        methods: {
        }
    }
</script>

<style lang="stylus" scoped>
    .headerNav .el-menu.el-menu--horizontal
        border-bottom none
        width: 800px;
        display block
    .el-menu-demo
        width: 60px;
        margin-top: -1.2px;
    .el-menu--horizontal>.el-menu-item
        height 56px
        line-height:60px
        font-size 14px
    .el-menu--horizontal>.el-menu-item:hover
        background:rgba(96,98,102,.4) !important;
    .el-menu--horizontal .el-menu
        background:rgba(255,255,255,.4) !important;
    .nav-item
        float: left
        margin-left: 100px
        text-decoration: none
        font-family: $fontFamily
        font-size: 50px
        color:#008b8b
        &.color
            color: #FFF
        &:hover
            cursor: pointer
            color: #FFF
</style>
