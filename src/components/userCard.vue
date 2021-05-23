<template>
  <el-card>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="id" label="id" width="130"></el-table-column>
      <el-table-column
        fixed
        prop="name"
        label="账号名"
        width="230"
      ></el-table-column>
      <el-table-column
        fixed
        prop="password"
        label="密码"
        width="240"
      ></el-table-column>
      <el-table-column fixed label="操作" width="84">
        <template>
          <el-button type="danger" size="small" @click="deleteItem">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination small layout="prev, pager, next" :total="10">
    </el-pagination>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "000001",
          name: "bojack",
          password: "A8Q6cX3qaNCVo6LU",
        },
        {
          id: "000002",
          name: "horseman",
          password: "5phHhbJzT9rQazTV",
        },
        {
          id: "000003",
          name: "frank",
          password: "hkIVchYkma8kNDPw",
        },
        {
          id: "000004",
          name: "pinkman",
          password: "PCozwc5EEMge98qR",
        },
        {
          id: "000005",
          name: "saul",
          password: "cionFqK1hGrn6ZwK",
        },
        {
          id: "000006",
          name: "Heracross",
          password: "GwcTVTgYNclU495s",
        },
        {
          id: "000007",
          name: "Shuckle",
          password: "H6ETS6gWypxnfoS3",
        },
        {
          id: "000008",
          name: "萝卜开飞机",
          password: "pYUB9KGTCwHDNEJp",
        },
        {
          id: "000009",
          name: "耳机感冒了",
          password: "tG2sUkRncP7y6bD8",
        },
        {
          id: "000010",
          name: "小手在跳舞",
          password: "hYEOM1rBvuP9uZXg",
        },
      ],
    };
  },
  methods:{
      deleteItem:function(){
          this.tableData.splice(0,1);
          this.$message({
              message:'删除成功',
              type:'success'
          })
      }
  }
};
</script>

<style scoped>
.el-card {
  position: relative;
  height: 685px;
}
.el-button {
  margin: auto;
}
.el-pagination{
    position: absolute;
    bottom:10px;
    transform:translateX(300px );
}
</style>