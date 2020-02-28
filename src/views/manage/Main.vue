<template>
    <div class="index">
        <div class="header">
            <HeadNav @sideNav="sideNav"></HeadNav>
        </div>
        <div class="side">
            <SideNav></SideNav>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
        <div class="foot">

        </div>
    </div>
</template>

<script>
    import HeadNav from '../../components/manage/HeadNav'
    import SideNav from '../../components/manage/SideNav'
    export default {
        name: 'Main',
        data () {
            return {
            }
        },
        components: {
            HeadNav,
            SideNav
        },
        methods: {
            // 控制左侧导航的显示
            sideNav (name) {
                for (let key in this.isShow) {
                    if (key === name) {
                        this.isShow[key] = true
                    } else {
                        this.isShow[key] = false
                    }
                }
            }
        }
    }
</script>

<style lang="stylus">
    .index
        width 100%
        height 100%
        .header
            width 100%
            height 8%
            position absolute
        .side
            width 12%
            height 91%
            position absolute
            overflow-y auto
            top 60px
            background-color #252d42
            .OfficePer
                width 100%
        .main
            width 88%
            position absolute
            top 60px
            left 12%
</style>