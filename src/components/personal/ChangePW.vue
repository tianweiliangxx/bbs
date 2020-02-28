<template>
    <div class="ChangePW">
        <div class="title">
            <h2>修改密码</h2>
        </div>
        <div class="content">
            原密码：<el-input v-model="input" placeholder="请输入内容" style="width:50%"></el-input><br>
            新密码：<el-input v-model="input" placeholder="请输入内容" style="width:50%"></el-input><br>
            确定新密码：<el-input v-model="input" placeholder="请输入内容" style="width:50%"></el-input><br>
        </div>
        <el-button type="primary">保存</el-button>
    </div>
</template>

<script>
    export default {
        name: "ChangePW",
        data () {
            return {
                input:''
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .ChangePW
        width 90%
        height 80%
        margin 30px 30px
        background-color #fff
        .title
            font-size 28px
</style>