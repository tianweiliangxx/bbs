<template>
    <div class="header">
        <div class="title"><span>新闻社区</span></div>
        <div class="headerNP">
            <HeaderNav></HeaderNav>
            <HeaderPer></HeaderPer>
        </div>
    </div>
</template>

<script>
    import HeaderNav from "./HeaderNav"
    import HeaderPer from "./HeaderPer"
    export default {
        name: "Header",
        components:{
            HeaderNav,
            HeaderPer
        },
    }
</script>

<style lang="stylus" scoped>
    .header
        width: 100%
        height:48px !important
        position: relative
        background-color rgba(0,0,0,.7)
        background-size:100% 100%
        z-index:2100
        overflow-x: hidden;
        overflow-y: hidden;
        .title
            position absolute
            color #0273f1
            letter-spacing:6px
            font-weight 600
            left 200px
            top 10px
            transform scaleY(.9)
            opacity:1;
        .headerNP
            position: relative
            left: 564px
            top: -10px
</style>
