<template>
  <div class="bar">
    <el-menu
      :default-active="'1'"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="home">Home</el-menu-item>
      <el-menu-item index="accepted">Accepted</el-menu-item>
      <el-menu-item index="rejected">Rejected</el-menu-item>
      <el-menu-item index="others">Others</el-menu-item>
      <el-menu-item index="manage" v-show="isManage">Manage</el-menu-item>

      <el-menu-item style="margin-left: 400px">
        <el-input placeholder="请输入搜索id..." size="small" style="width:200px"></el-input
        ><el-button icon="el-icon-search" round size="small" style="margin:0 110px 0 15px"></el-button
        ><el-dropdown>
          <span class="drop-link">
            Hello, {{ username }}
            <i class="el-icon-arrow-down"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              ><span @click="drawer = true">修改信息</span></el-dropdown-item
            >
            <el-dropdown-item style="color: red"
              ><span @click="logout">退出</span></el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu-item>
    </el-menu>
    <el-drawer title="修改信息" :visible.sync="drawer" :direction="direction">
      <el-form ref="form">
        <el-form-item label="昵称">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="修改密码">
          <el-input v-model="password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="password2" type="password"></el-input>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {
      isManage: true,
      username: "Todd",
      drawer: false,
      direction: "rtl",
      password: "",
      password2: "",
    };
  },
  methods: {
    logout: function () {
      this.$router.push("/");
      this.$message({
        message: "成功退出，返回主页！",
        type: "success",
      });
      console.log("a");
    },
  },
};
</script>
<style scoped>
.bar {
  width: 100%;
  height: 50px;
  border-bottom: solid 1px #dcdfe6;
  font-family: "Helvetica Neue";
  line-height: 50px;
  text-align: center;
}
.drop-link {
  color: #dcdfe6;
  cursor: pointer;
}
.el-form {
  margin: 20px;
}
</style>