<template>
  <div class="box">
      <el-form ref="form" :model="loginForm" class="loginContainer">
        <h3 class="loginTitle">系统登录</h3>
        <el-form-item>
            <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input type="text" v-model="loginForm.password" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <el-form-item label="">
            <el-input type="text" v-model="loginForm.code" placeholder="点击图片更换验证码" style="width: 180px;margin-right: 5px"></el-input>
            <img :src="captchaUrl">
        </el-form-item>
        <el-button type="primary" style="width: 100%" @click="submitLogin">登录</el-button>
      </el-form>
  </div>
</template>

<script>
    export default {
      name: "Login",
      data() {
        return {
            captchaUrl:'',//图形链接
            loginForm: {
              username:'',
              password:'',
              code:''
            },
            checked: true,
        }
      },
      methods: {
        submitLogin() {
          this.$router.replace('/Home');
        }
      }
    }
</script>

<style scoped>
  .loginContainer {
    border-radius: 15px;
    margin:20vh auto;
    width: 400px;
    padding: 15px 35px 15px 35px;
    background-color: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .loginTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 0;
  }
  
  
  
</style>