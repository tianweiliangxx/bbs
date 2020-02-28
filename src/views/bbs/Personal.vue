<template>
    <div class="personal">
        <div class="left">
            <ul class="menu">
                <li class="list" @click="selectMenu('showInfo')">基本资料</li>
                <li class="list" @click="selectMenu">头像设置</li>
                <li class="list" @click="selectMenu('showAttention')">我的关注</li>
                <li class="list" @click="selectMenu('showChangePW')">密码修改</li>
                <li class="list" @click="selectMenu('showCollect')">我的收藏</li>
                <li class="list" @click="selectMenu">新闻发布</li>
                <li class="list" @click="selectMenu('showNewsList')">新闻列表</li>
            </ul>
        </div>
        <div class="right">
            <Perinfo v-show="show.showInfo"></Perinfo>
            <Attention v-show="show.showAttention"></Attention>
            <ChangePW v-show="show.showChangePW"></ChangePW>
            <Collect v-show="show.showCollect"></Collect>
            <NewsList v-show="show.showNewsList"></NewsList>
        </div>
    </div>
</template>

<script>
    import Perinfo from '../../components/personal/Perinfo'
    import Attention from '../../components/personal/Attention'
    import ChangePW from '../../components/personal/ChangePW'
    import Collect from '../../components/personal/Collect'
    import NewsList from '../../components/personal/NewsList'
    export default {
        name: "Personal",
        data () {
            return {
                show:{
                    showInfo: true,
                    showAttention: false,
                    showChangePW:false,
                    showCollect:false,
                    showNewsList:false
                }
            }
        },
        components: {
            Perinfo,
            Attention,
            ChangePW,
            Collect,
            NewsList
        },
        methods: {
            selectMenu (type) {
                for (let i in this.show) {
                    if (type === i){
                        this.show[i] = true
                    }else{
                        this.show[i] = false
                    }
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
.personal
    margin 0 auto
    width: 80%
    height 619px
    overflow hidden
    .left
        width 20%
        height 400px
        float: left
        margin-top 130px
        margin-left 80px
        background-color #fff
        .menu
            margin 20px 20px
            .list
                width 100%
                height 50px
                text-align center
                line-height 50px
                border-bottom 1px solid #ccc
                &:hover
                    color: rgba(0, 0, 0, 0.5)
                    cursor: pointer
    .right
        width 65%
        height 100%
        float: left
        margin-left 20px
        margin-top 40px
        background-color #fff
</style>