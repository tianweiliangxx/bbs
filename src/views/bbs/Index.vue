<template>
    <div class="index">
        <Header></Header>
        <router-view/>
        <Bottom></Bottom>
    </div>
</template>

<script>
    import Header from '../../components/header/Header'
    import Bottom from '../../components/bottom/Bottom'
    export default {
        name: "Index",
        data() {

        },
        components: {
            Header,
            Bottom
        }
    }
</script>

<style lang="stylus" scoped>
  .index
      width 100%
      height 100%
</style>