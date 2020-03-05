<template>
    <div class="personal">
        <div class="headImg">

        </div>
        <div class="left">
            <ul class="menu">
                <li class="list">昵称： {{this.otherInfo.nick_name}}</li>
                <li class="list" >性别： {{this.gender(this.otherInfo.gender)}}</li>
                <li class="list" >签名： {{this.otherInfo.signature}}</li>
                <li class="list" v-if="!this.isFollow">
                    <el-button type="primary" @click="followUser('follow')">关注</el-button>
                </li>
                <li class="list" v-if="this.isFollow">
                    <el-button plain @click="followUser('unfollow')">取消关注</el-button>
                </li>
            </ul>
        </div>
        <div class="right">
            <PostList></PostList>
        </div>
    </div>
</template>

<script>
    import PostList from '../../components/otheruser/PostList'
    import {
        otherInfo,
        followedUser
    } from '../../api/index'
    export default {
        name: "OtherUser",
        data () {
            return {
                id: this.$route.query.id,
                otherInfo:'',
                isFollow:''
            }
        },
        components: {
            PostList
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
            gender(type) {
                if(type === 'MAN') {
                    return '男'
                }else{
                    return '女'
                }
            },
            followUser(type) {
                followedUser(localStorage.userId, type, this.id).then(res => {
                    alert(res.data.errmsg)
                    this.$router.go(0)
                })
            }
        },
        mounted() {
            otherInfo(localStorage.userId,this.id).then(res => {
                console.log(res);
                this.isFollow = res.data.data.is_followed
                this.otherInfo = res.data.data.other_info
            })
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