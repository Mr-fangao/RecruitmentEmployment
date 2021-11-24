<template>
  <div class="grid-container">
    <div class="item item1">
      <div class="content">
        <div class="title">
          <div class="title_back"><p>1111</p></div>
          <div class="select">
            <el-dropdown>
              <span class="el-dropdown-link">
                选择城市
                <i class="fa fa-angle-down"></i>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item
                    @click="(ct1 = 1), fetchData(ct1)"
                    :class="{ active: ct1 == 1 }"
                    >北京</el-dropdown-item
                  >
                  <el-dropdown-item
                    @click="(ct1 = 2), fetchData(ct1)"
                    :class="{ active: ct1 == 2 }"
                    >上海</el-dropdown-item
                  >
                  <el-dropdown-item>广州</el-dropdown-item>
                  <el-dropdown-item>深圳</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
        <div class="chart">
          <div id="chart1" :style="{ width: '100%', height: '100%' }"></div>
        </div>
      </div>
    </div>
    <div class="item item2">2</div>
    <div class="item item3">3</div>
    <div class="item item4">4</div>
    <div class="item item5">5</div>
    <div class="item item6">6</div>
  </div>
</template>

<script>
//import axios from "axios";
import "font-awesome/css/font-awesome.css";
import request from "../../utils/request";
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/bar");
require("echarts/lib/chart/line");
require("echarts/lib/chart/pie");
require("echarts/lib/chart/scatter");
require("echarts/lib/chart/funnel");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/component/legend");
export default {
  name: "experience",
  data() {
    return {
      ct1: 1,
      chartdata1: [],
    };
  },
  created() {},
  mounted() {
    this.fetchData(1);
  },
  methods: {
    fetchData(ct1) {
      var sendData = ct1;
      var code = JSON.stringify(sendData);
      console.log(code);
      request.post("/api/data/querySalary", { code }).then((res) => {
        this.chartdata1.ydata = res.data.value;
        this.chartdata1.xdata = res.data.name;
        console.log(this.chartdata1);
        //解决 echarts动态渲染数据图形不生效问题:获取数据但不渲染，执行下一个循环才将数据渲染进echarts
        this.$nextTick(() => {
          this.showct1();
        });
      });
    },
    showct1() {
      // 绘制图表
      var chart1 = echarts.init(document.getElementById("chart1"));
      chart1.resize();
      chart1.setOption({
        xAxis: {
          type: "category",
          data: this.chartdata1.xdata,
          axisLine: {
            //x轴文字颜色
            lineStyle: {
              color: " #999999",
            },
          },
        },
        yAxis: {
          type: "value",
          //坐标轴范围
          boundaryGap: ["0", "0.1"],
          axisLine: {
            //轴文字颜色
            lineStyle: {
              color: " #999999",
            },
          },
          //y轴刻度横线
          splitLine: {
            show: false,
          },
        },
        grid: {
          x: 40,
          y: 20,
          x2: 80,
          y2: 40,
        },
        series: [
          {
            barWidth: "60%",
            type: "bar",
            showBackground: true,
            data: this.chartdata1.ydata,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.1)",
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0.2, color: "#44C0C1" },
                  { offset: 1, color: "#1BFEFE" },
                ]),
              },
            },
          },
        ],
      });
    },

    // chart1() {
    //   console.log(this.dataChart1.data);
    //   // 基于准备好的dom，初始化echarts实例
    //   let Chart1 = echarts.init(document.getElementById("chart1"));
    //   // 绘制图表
    //   var option;
    //   option = {
    //     tooltip: {
    //       trigger: "item",
    //     },
    //     legend: {
    //       orient: "vertical",
    //       left: "5%", //图例距离左的距离
    //       y: "center", //图例上下居中
    //       data: ["A", "B", "C", "D", "E"],
    //       textStyle: {
    //         //图例文字的样式
    //         color: "#fff",
    //         fontSize: 12,
    //       },
    //     },

    //     series: [
    //       {
    //         name: "Access From",
    //         type: "pie",
    //         center: ["60%", "55%"],
    //         radius: ["70%", "50%"],
    //         label: {
    //           normal: {
    //             show: true,
    //             position: "outside",
    //             formatter: "{b}",
    //           },
    //         },
    //         labelLine: {
    //           normal: {
    //             show: true,
    //             length: 50,
    //             length2: 10,
    //           },
    //         },
    //         data: [
    //           { value: 1111, name: "A" },
    //           { value: 735, name: "B" },
    //           { value: 580, name: "C" },
    //           { value: 484, name: "D" },
    //           { value: 300, name: "E" },
    //         ],
    //       },
    //     ],
    //   };
    //   option && Chart1.setOption(option);
    // },
  },
  watch: {},
};
</script>

<style lang="less" scoped>
.grid-container {
  display: grid;
  height: calc(100% - 45px);
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "pt1 pt3 pt5 "
    "pt2 pt4 pt6 ";
  background-color: transparent;
  .p {
    left: 10%;
    text-align: left;
  }
  div {
    // text-align: center;
    // font-size: 30px;
    // outline: 1px dashed rgb(136, 27, 27);
  }
  .item {
    background: url(../../assets/img/pt/ptbackground.png) no-repeat;
    background-size: 100% 100%;
    text-align: center;
    font-size: 30px;
    margin: 2% 2% 2% 2%;
    outline: 1px dashed rgb(136, 27, 27);
  }
  .item1 {
    grid-area: pt1;
    margin-left: 10%;
    margin-top: 3%;
    .content {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      .title {
        height: 60px;
        display: flex;
        flex-direction: row;
        .select {
          position: relative;
          top: 50%;
          left: 6%;
          // height: 36px;
          width: 100px;
          background-color: rgb(39, 126, 202);
          .el-dropdown-link {
            height: 40px;
            font-size: 12pt;
            line-height: 40px;
            text-align: center;
            color: white;
            .el-dropdown-item {
              background-color: aqua;
            }
          }
        }
      }
      .chart {
        height: calc(100% - 60px);
      }
    }
  }
  .item2 {
    grid-area: pt2;
    margin-bottom: 3%;
    margin-left: 10%;
  }
  .item3 {
    grid-area: pt3;
    margin-top: 3%;
    margin-left: 5%;
    margin-right: 5%;
  }
  .item4 {
    grid-area: pt4;
    margin-bottom: 3%;
    margin-left: 5%;
    margin-right: 5%;
  }
  .item5 {
    grid-area: pt5;
    margin-top: 3%;
    margin-right: 10%;
  }
  .item6 {
    grid-area: pt6;
    margin-bottom: 3%;
    margin-right: 10%;
  }
}
</style>
