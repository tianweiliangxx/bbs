<template>
    <div class="Perinfo">
        <div class="title">
            <h2>基本资料</h2>
        </div>
        <div class="content">
            个性签名：<el-input v-model="input" placeholder="请输入内容" style="width:50%"></el-input><br>
            用户昵称：<el-input v-model="input" placeholder="请输入内容" style="width:50%"></el-input><br>
            性别：  <el-radio v-model="radio" label="1">男</el-radio>
                    <el-radio v-model="radio" label="2">女</el-radio><br>
            <el-button type="primary">保存</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Perinfo",
        data () {
            return {
                radio: '',
                input:''
            }
        }
    }
</script>

<style lang="stylus" scoped>
.Perinfo
    width 90%
    height 80%
    margin 30px 30px
    background-color #fff
    .title
        font-size 28px
</style>