<template>
  <div class="home">
    <el-header>
      <navbar></navbar>
    </el-header>
    <el-main>
      <el-card>
        <h1>欢迎来到用户贷后画像平台！</h1>
        <p>请点击导航栏<span>标签</span>进行对应画像查看</p>
      </el-card>
    </el-main>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "../components/navBar.vue";

export default {
  name: "Home",
  components: {
    navbar,
  },
};
</script>
<style scoped>
.el-card {
  margin: 5px 150px 0px 150px;
}
span{
  color:red;
}
</style>
