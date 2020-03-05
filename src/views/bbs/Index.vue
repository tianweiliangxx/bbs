<template>
    <div class="index">
        <Header class="header"></Header>
        <div class="cut"></div>
        <router-view/>
        <Bottom class="bottom"></Bottom>
    </div>
</template>

<script>
    import Header from '../../components/header/Header'
    import Bottom from '../../components/bottom/Bottom'
    export default {
        name: "Index",
        data() {
            return {}
        },
        components: {
            Header,
            Bottom
        },
        mounted() {

        }
    }
</script>

<style lang="stylus" scoped>
  .index
      width 100%
      height 100%
      .cut
        height 1px
      .bottom
        width 100%
        position fixed
        bottom 0px
    </style>