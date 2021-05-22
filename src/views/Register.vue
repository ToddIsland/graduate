<template>
  <div class="back">
    <div class="register">
      <h2>注册</h2>
      <el-form
        :model="resForm"
        ref="resForm"
        label-width="80px"
        class="res-Form"
      >
        <el-form-item label="昵称">
          <el-input v-model="resForm.nickname"></el-input>
        </el-form-item>
        <el-form-item label="账号名">
          <el-input v-model="resForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="resForm.pass" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="resForm.pass2" type="password"></el-input>
        </el-form-item>
        <el-button type="primary" @click="register()"
          >注册</el-button
        >
        <el-button @click="returnLogin()">返回</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      resForm: {
        nickname:"",
        name: "",
        pass: "",
        pass2: "",
      },
    };
  },
  methods: {
    returnLogin() {
      this.$router.push("/");
    },
    register(){
      this.$message({
        message:'注册成功，请登录！',
        type:'success'
      });
      this.$router.push('/');
    }
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
.register {
  position: fixed;
  left: 70%;
  top: 40%;
  transform: translate(-50%, -50%);
  height: 380px;
  width: 350px;
  /* opacity: 0.2; */
  background-color: white;
  border-radius: 4px;
  box-shadow: 10px 5px 5px black;
}
.el-input {
  width: 250px;
}
</style>