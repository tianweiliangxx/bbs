<template>
    <div class="Perinfo">
        <div class="title">
            <h2>基本资料</h2>
        </div>
        <div class="content">
            个性签名：<el-input v-model="signature" placeholder="请输入内容" style="width:50%"></el-input><br>
            用户昵称：<el-input v-model="nick_name" placeholder="请输入内容" style="width:50%"></el-input><br>
            性别：  <el-radio v-model="gender" label="MAN">男</el-radio>
                    <el-radio v-model="gender" label="WOMAN">女</el-radio><br>
            <el-button type="primary" @click="changeInfo">保存</el-button>
        </div>
    </div>
</template>

<script>
    import { baseInfo } from '../../api/index'
    export default {
        name: "Perinfo",
        data () {
            return {
                signature: '',
                nick_name:'',
                gender:''
            }
        },
        methods: {
            changeInfo(){
                baseInfo(localStorage.userId,this.nick_name,this.signature,this.gender).then(res => {
                    if (res.data.errmsg === 'OK'){
                        localStorage.username = this.nick_name
                        alert('修改成功')
                        this.$router.go(0)
                    }else{
                        alert('修改错误，请重试')
                    }

                })
            }
        },
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