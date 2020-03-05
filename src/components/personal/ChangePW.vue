<template>
    <div class="ChangePW">
        <div class="title">
            <h2>修改密码</h2>
        </div>
        <div class="content">
            原密码：<el-input v-model="oldPW" placeholder="请输入旧密码" style="width:50%"></el-input><br>
            新密码：<el-input type="password" v-model="newPW" placeholder="请输入新密码" style="width:50%"></el-input><br>
        </div>
        <el-button type="primary" @click="submitPW">保存</el-button>
    </div>
</template>

<script>
    import {passInfo} from '../../api/index'
    export default {
        name: "ChangePW",
        data () {
            return {
                oldPW:'',
                newPW:''
            }
        },
        methods: {
            submitPW() {
                passInfo(localStorage.userId, this.oldPW, this.newPW).then(res => {
                    console.log(res);
                    if (res.data.errmsg === '保存成功') {
                        localStorage.clear();
                        alert('密码修改成功，请重新登录')
                        this.$router.push({
                            path: "/index/login"
                        });
                        this.$router.go(0)
                    }
                })
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