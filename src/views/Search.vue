<template>
  <div class="home">
    <el-main>
      <el-card>
        <el-button
          type="primary"
          icon="el-icon-caret-left"
          style="position: relative; left: -470px"
          @click="returnHome"
          >返回</el-button
        >
        <div id="card">abc</div>
      </el-card>
    </el-main>
  </div>
</template>

<script>
// @ is an alias to /src

import * as echarts from "echarts";

export default {
  name: "Search",
  components: {},
  data() {
    return {};
  },
  methods:{
    returnHome:function(){
      this.$router.push('/home');
    }
  },
  mounted() {
    var chartDom = document.getElementById("card");
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      title: {
        text: "搜索结果",
        subtext: "result",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c}%",
      },
      toolbox: {
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {},
        },
      },
      legend: {
        data: ["展现", "点击", "访问", "咨询", "订单"],
      },

      series: [
        {
          name: "标签",
          type: "funnel",
          left: "10%",
          top: 60,
          //x2: 80,
          bottom: 60,
          width: "80%",
          // height: {totalHeight} - y - y2,
          min: 0,
          max: 100,
          minSize: "0%",
          maxSize: "100%",
          sort: "descending",
          gap: 2,
          label: {
            show: true,
            position: "inside",
          },
          labelLine: {
            length: 10,
            lineStyle: {
              width: 1,
              type: "solid",
            },
          },
          itemStyle: {
            borderColor: "#fff",
            borderWidth: 1,
          },
          emphasis: {
            label: {
              fontSize: 20,
            },
          },
          data: [
            { value: 100, name: "loan_amnt:10000" },
            { value: 90, name: "term:36 mouths" },
            { value: 80, name: "int_rate:8.49" },
            { value: 70, name: "installment:315.63" },
            { value: 60, name: "grade:B" },
            { value: 50, name: "emp_title:Accounting Clerk" },
            { value: 40, name: "emp_length:4 years" },
            { value: 30, name: "Verification_status:Not Verified" },
            { value: 20, name: "loan_status:Fully Paid" },
            { value: 10, name: "pub_rec_bankruptcies:0" },
          ],
        },
      ],
    };

    option && myChart.setOption(option);
  },
};
</script>
<style scoped>
.el-card {
  margin: 0px 150px 0px 150px;
  position: relative;
}
#card {
  margin-top:20px;
  height: 600px;
}
</style>
