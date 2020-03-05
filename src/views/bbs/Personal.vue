<template>
    <div class="personal">
        <div class="headImg">

        </div>
        <div class="left">
            <ul class="menu">
                <li class="list" @click="selectMenu('showInfo')">基本资料</li>
                <li class="list" @click="selectMenu">头像设置</li>
                <li class="list" @click="selectMenu('showAttention')">我的关注</li>
                <li class="list" @click="selectMenu('showChangePW')">密码修改</li>
                <li class="list" @click="selectMenu('showCollect')">我的收藏</li>
                <li class="list" @click="selectMenu('showPublications')">帖子发布</li>
                <li class="list" @click="selectMenu('showNewsList')">帖子列表</li>
                <li class="list" @click="outLogin()">退出登录</li>
            </ul>
        </div>
        <div class="right">
            <Perinfo v-show="show.showInfo"></Perinfo>
            <Attention v-show="show.showAttention"></Attention>
            <ChangePW v-show="show.showChangePW"></ChangePW>
            <Collect v-show="show.showCollect"></Collect>
            <Publications v-show="show.showPublications"></Publications>
            <NewsList v-show="show.showNewsList"></NewsList>
        </div>
    </div>
</template>

<script>
    import Perinfo from '../../components/personal/Perinfo'
    import Attention from '../../components/personal/Attention'
    import ChangePW from '../../components/personal/ChangePW'
    import Collect from '../../components/personal/Collect'
    import Publications from '../../components/personal/Publications'
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
                    showPublications:false,
                    showNewsList:false
                }
            }
        },
        components: {
            Perinfo,
            Attention,
            ChangePW,
            Collect,
            Publications,
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
            },
            outLogin(){
                localStorage.clear();
                alert('退出成功');
                this.$router.push({
                    path: "/index/newest"
                })
                this.$router.go(0)
            }
        }
    }
</script>

<style lang="stylus" scoped>
.personal
    margin 0 auto
    width: 80%
    margin-top 48px
    overflow hidden
    .headImg
        position: absolute
        left 300px
        top 60px
        width 100px
        height 100px
        border-radius 50px
        background-color #fff
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
                height 40px
                text-align center
                line-height 40px
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