<template>
  <div class="home">
    <el-header>
      <navbar></navbar>
    </el-header>
    <el-main>
      <el-card>
        <h1>Accepted</h1>
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
