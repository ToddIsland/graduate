<template>
  <div class="back">
    <div class="login">
      <h2>登录</h2>
      <div class="con">
        <div class="word">用户名</div>
        <el-input v-model="name"></el-input>
        <div class="word">密码</div>
        <el-input v-model="password"></el-input>
      </div>
      <div class="btn">
        <el-button type="primary">登录</el-button>
        <el-button>注册</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            name:'',
            password:''
        }
    }
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
  height: 230px;
  width: 300px;
  /* opacity: 0.2; */
  background-color: white;
  border-radius: 4px;
  box-shadow: 10px 5px 5px black;
}
.con {
  display: grid;
  grid-template-columns: 80px 280px;
}
.word {
  text-align: center;
  align-self: center;
}
body {
  overflow: hidden;
}
.el-input {
  margin-top: 5px;
  margin-left: 20px;
  width: 200px;
  position: relative;
  right: 15px;
}
.btn{
    display: flex;
    justify-content: center;
}
.el-button {
  margin-top: 10px;
}
</style>