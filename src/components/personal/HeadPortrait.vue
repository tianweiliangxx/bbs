<template>
    <div class="NewsList">
        <div class="title">
            <h2>头像设置</h2>
        </div>
        <div class="content">
            <form  id="myForm" action="">
                选择图片：
                <el-input id="imgFile" v-model="index_image" type="file" placeholder="请输入内容" style="width:50%"></el-input>
            </form>
            <div class="btn">
                <el-button type="primary" @click="issue">上传头像</el-button>
            </div>
        </div>

    </div>
</template>

<script>
    import {picInfo} from '../../api/index'
    export default {
        name: "HeadPortrait",
        data () {
            return {
                radio: '',
                postList:'',
                postTime:'',
                totalPage:'',
                index_image:''
            }
        },
        mounted() {
        },
        methods: {
            issue () {
                var file = document.getElementById("imgFile").files[0]; //获取文件
                console.log(file);
                picInfo(localStorage.userId,file).then(res => {
                    if(res.data.errmsg === 'OK'){
                        alert('上传成功')
                        this.$router.go(0)
                    }
                    console.log(res);
                })
            },
        }
    }
</script>

<style lang="stylus" scoped>
    .NewsList
        width 90%
        height 80%
        margin 30px 30px
        background-color #fff
        .title
            font-size 28px
        .content
            overflow hidden
            height 460px
            .left
                float: left
                .Llist
                    width 540px
                    height 42px
                    line-height 42px
                    border-bottom 1px solid #ccc
            .right
                float:left
                .Rlist
                    font-size 12px
                    width 160px
                    height 42px
                    line-height 42px
                    border-bottom 1px solid #ccc
        .page
            position absolute
            left 830px
            bottom 100px
</style>