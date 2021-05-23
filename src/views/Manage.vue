<template>
  <div class="home">
    <el-header>
      <navbar></navbar>
    </el-header>
    <el-main>
      <el-card>
        <div id="card">
            <usercard></usercard>
        </div>
      </el-card>
    </el-main>
  </div>
</template>

<script>
import navbar from "../components/navBar.vue";
import usercard from "../components/userCard.vue";
export default {
  name: "Home",
  components: {
    navbar,
    usercard
  },
  data() {
    return {
      dialogVisible: false,
      name: "",
      form: {
        inputname: "",
      },
      myChart: "",
    };
  },
  computed: {
    labelname() {
      return "将标签" + this.name + "修改为";
    },
  },
  methods: {
    
  },
};
</script>
<style scoped>
.el-card {
  margin: 5px 150px 0px 150px;
}
#card {
  height: 700px;
}
</style>