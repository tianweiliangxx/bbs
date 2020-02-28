<template>
    <div class="SideNav">
        <div class="LeftNav">
            <ul class="NavTitle">
                <li class="stair">用户统计</li>
                <li class="stair">用户管理</li>
                <li class="stair">新闻管理</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SideNav'
    }
</script>

<style lang="stylus" scoped>
    .SideNav
        width 100%
        .LeftNav
            width 100%
            position relative
            .NavTitle
                color #fff
                .stair
                    height 40px
                    line-height 40px
                    text-align left
                    border-bottom 1px solid #ccc
                    padding 0 0 0 10px
                    &:hover
                        cursor pointer
                        background-color rgba(245, 245, 245, .7)
                .second
                    li
                        border-bottom 1px solid #ccc
                        padding 0 0 0 20px
                        background-color rgba(220, 220, 220, .7)
</style>