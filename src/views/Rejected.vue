<template>
  <div class="home">
    <el-header>
      <navbar></navbar>
    </el-header>
    <el-main>
      <el-card>
        <div id="card"></div>
      </el-card>
      <el-dialog title="修改标签" :visible.sync="dialogVisible" width="30%">
        <el-form ref="form" :model="form">
          <el-form-item :label="this.labelname">
            <el-input v-model="form.inputname"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="alterlabel()">确 定</el-button>
        </span>
      </el-dialog>
    </el-main>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "../components/navBar.vue";
import * as echarts from "echarts";

export default {  
  name: "Home",
  components: {
    navbar,
  },
  data() {
    return {
      dialogVisible: false,
      name: "",
      form: {
        inputname: "",
      },
      myChart:'',
    };
  },
  computed: {
    labelname() {
      return "将标签" + this.name + "修改为";
    },
  },
  methods: {
    alterlabel() {
      var option = this.myChart.getOption();
    //   console.log(option.series[0].data[0].name);
      option.series[0].data[0].name = this.form.inputname;
      this.myChart.setOption(option, true);
      this.dialogVisible = false;
      this.$message({
          message:'修改成功',
          type:'success'
      });
      this.form.inputname = '';
    },
  },
  mounted: function () {
    var chartDom = document.getElementById("card");
    var myChart = echarts.init(chartDom);
    this.myChart = myChart;
    var option;

    var data = {
      legendData: [
        "loan_amnt",
        "term",
        "int_rate",
        "installment",
        "grade",
        "emp_title",
        "emp_length",
        "home_ownership",
        "annual_inc",
        "verification_status",
        "loan_status",
        "purpose",
        "title",
        "earliest_cr_line",
        "open_acc",
        "pub_rec_bankruptcies",
      ],
      seriesData: [
        { name: "loan_amnt:55000", value: "20" },
        { name: "term:24 mouths", value: "10" },
        { name: "int_rate:17.99", value: "5" },
        { name: "installment:1196.05", value: "5" },
        { name: "grade:E", value: "10" },
        { name: "emp_title:Truck driver", value: "1" },
        { name: "emp_length:3 years", value: "4" },
        { name: "home_ownership:MORTGAGE", value: "5" },
        { name: "annual_inc:25000", value: "5" },
        { name: "verification_status:Not Verified", value: "5" },
        { name: "loan_status:Charged Off", value: "10" },
        { name: "purpose:major_purchase", value: "1" },
        { name: "title:Major purchase", value: "1" },
        { name: "earliest_cr_line:Aug-2018", value: "1" },
        { name: "open_acc:18", value: "1" },
        { name: "pub_rec_bankruptcies:1", value: "1" },
      ],
    };

    option = {
      title: {
        text: "用户贷后行为画像",
        subtext: "Rejected",
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        type: "scroll",
        orient: "vertical",

        top: 20,
        bottom: 20,
        data: data.legendData, //图例的数据
        selected: data.selected,
      },
      series: [
        {
          name: "标签",
          type: "pie",
          radius: "55%",
          center: ["50%", "50%"],
          data: data.seriesData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    var that = this;
    myChart.on("click", function (params) {
      that.dialogVisible = true;
      that.name = params.data.name;
      console.log(params);
    });
    option && myChart.setOption(option);
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
