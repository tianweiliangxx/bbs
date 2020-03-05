<template>
    <div class="jobsLogin">
        <div class="cut"></div>
        <div class="loginBox">
            <div class="title"><h2>注册</h2></div>
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
                    <el-form-item prop="checkPass">
                        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="确认密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm2')" style="width:100%;">注册</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="tip">已有账号?
                <router-link to="/index/login" class="toReg">请登录</router-link></div>
        </div>
    </div>
</template>

<script>
    import { register } from '../../api/index'
    export default {
        name: "Register",
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
            // <!--二次验证密码-->
            let validatePass2 = (rule, value, callback) => {
                if (value === "") {
                    callback(new Error("请再次输入密码"));
                } else if (value !== this.ruleForm2.pass) {
                    callback(new Error("两次输入密码不一致!"));
                } else {
                    callback();
                }
            };
            return {
                ruleForm2: {
                    pass: "",
                    checkPass: "",
                    userName: "",
                },
                rules2: {
                    pass: [{ validator: validatePass, trigger: 'change' }],
                    checkPass: [{ validator: validatePass2, trigger: 'change' }],
                },
                isDisabled: false, // 是否禁止点击发送验证码按钮
                flag: true
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        register(this.$refs[formName].model.userName, this.$refs[formName].model.pass).then( res => {
                            console.log(res)
                            setTimeout(() => {
                                alert('注册成功')
                            }, 400);
                        }).catch(err => {
                            console.log(err)
                        })
                    } else {
                        console.log("error submit!!");
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