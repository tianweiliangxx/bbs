<template>
    <div class="jobsLogin">
        <div class="cut"></div>
        <div class="loginBox">
            <div class="title"><h2>管理员登录</h2></div>
            <div class="content">
                <el-form
                        :model="ruleForm2"
                        status-icon
                        :rules="rules2"
                        ref="ruleForm2"
                        label-width="0"
                        class="demo-ruleForm"
                >
                    <el-form-item prop="tel">
                        <el-input v-model="ruleForm2.userName" auto-complete="off" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item prop="pass">
                        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="输入密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm2')" style="width:100%;">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations  } from 'vuex'
    // import { login } from '../../api'
    import { adminLogin } from '../../api'
    export default {
        name: "Login",
        data() {
            // <!--验证密码-->
            let validatePass = (rule, value, callback) => {
                if (value === "") {
                    callback(new Error("请输入密码"))
                } else {
                    if (this.ruleForm2.checkPass !== "") {
                        this.$refs.ruleForm2.validateField("checkPass");
                    }
                    callback()
                }
            }
            return {
                ruleForm2: {
                    pass: "",
                    userName: "",
                },
                rules2: {
                    pass: [{ validator: validatePass, trigger: 'change' }],
                },
                flag: true
            }
        },
        methods: {
            ...mapMutations(['getUserInfo']),
            submitForm(formName) {
                let oneself = this
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        adminLogin(this.$refs[formName].model.userName, this.$refs[formName].model.pass).then(res => {
                            console.log(res);
                            if (res.data.errmsg === '用户名密码错误') {
                                alert('登陆失败，用户名或密码错误')
                            }
                            if (res.data.errmsg === '登录成功') {
                                localStorage.adminId = res.data.user_id
                                localStorage.isAdminLogin = true
                                setTimeout(() => {
                                    alert('登录成功')
                                    this.$router.push({
                                        path: "/main/statistics",
                                        query: {id: res.data.user_id}
                                    });
                                }, 400);
                            }
                        })
                        // login(this.$refs[formName].model.userName, this.$refs[formName].model.pass).then(res =>{
                        //     console.log(res);
                        //     if (res.data.errmsg === '用户名密码错误') {
                        //         alert('登陆失败，用户名或密码错误')
                        //     }
                        //     if (res.data.errmsg === '登录成功') {
                        //         localStorage.username = res.data.dict.nick_name
                        //         localStorage.userId = res.data.dict.user_id
                        //         localStorage.isLogin = true
                        //         oneself.getUserInfo([res.data.dict.nick_name,res.data.dict.user_id])
                        //         setTimeout(() => {
                        //             alert('登录成功')
                        //             this.$router.push({
                        //                 path: "/index/newest"
                        //             });
                        //         }, 400);
                        //     }
                        // }).catch(err => {
                        //     console.log(err);
                        // })
                    } else {
                        alert('登录失败')
                        return false;
                    }
                })
            },
            // <!--进入登录页-->
            gotoLogin() {
                this.$router.push({
                    path: "/login"
                });
            },
        }
    }
</script>

<style lang="stylus" scoped>
    .jobsLogin
        width 100%
        height 100%
        background url("/imgs/bdimg.jpeg")
        background-size:100% 100%;
        background-repeat:no-repeat;
        .cut
            height 100px
        .loginBox
            background-color #fff
            width 400px
            height  400px
            margin 0 auto
            border 1px solid #fff
            margin-top 100px
            padding-top 10px
            .title
                h2
                    text-align center
                    font-size 26px
            .content
                margin 0 auto
                margin-top 10px
                width 80%
            .tip
                text-align center
                .toReg
                    color rgb(0,0,255)
</style>