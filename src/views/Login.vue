<template>
  <div class="back">
    <div class="login">
      <h2>登录</h2>
      <el-form
        :model="loginForm"
        ref="loginForm"
        class="login-Form"
        label-width="85px"
      >
        <el-form-item label="账号">
          <el-input v-model="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginForm.pass" type="password"></el-input>
        </el-form-item>
        <el-button type="primary" @click="doLogin()">登录</el-button>
        <el-button @click="jumpRegister()">注册</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      password: "",
      loginForm: {
        name: "",
        pass: "",
      },
    };
  },
  methods: {
    doLogin: function () {
      this.$message({
        message:'登录成功！',
        type:'success'
      })
      this.$router.push('/home');
    },
    jumpRegister: function () {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
.back {
  background-image: url("../assets/background.jpeg");
  background-position-y: 20%;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-size: cover; /* 图片等比例填充 */
  z-index: -1;
}
.login {
  position: fixed;
  left: 70%;
  top: 40%;
  transform: translate(-50%, -50%);
  height: 260px;
  width: 320px;
  /* opacity: 0.2; */
  background-color: white;
  border-radius: 4px;
  box-shadow: 10px 5px 5px black;
}
body {
  overflow: hidden;
}
.el-input {
  width: 210px;
}
</style>