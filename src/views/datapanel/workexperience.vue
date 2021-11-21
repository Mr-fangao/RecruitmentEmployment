<template>
  <div class="grid-container">
    <div class="item1">
      <div class="content">
        <div class="title">
          <div class="select">
            <el-dropdown>
              <span class="el-dropdown-link">
                选择城市
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item
                    @click="(ct = 1), showct1()"
                    :class="{ active: ct == 1 }"
                    >北京</el-dropdown-item
                  >
                  <el-dropdown-item>{{chartdata1}}</el-dropdown-item>
                  <el-dropdown-item>广州</el-dropdown-item>
                  <el-dropdown-item>深圳</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
        <div class="chart">
          <!-- <h1>{{chartdata1}}</h1> -->
          <div id="chart1" :style="{ width: '100%', height: '100%' }" ></div>
        </div>
      </div>
    </div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
  </div>
</template>

<script>
import axios from 'axios';
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
      ct: 2,
      chartdata1:[],
    };
  },
  mounted:function(){
    // this.chart1();
    this.showct1().self;
  },
  methods: {
    // consoleWrite(chartdata1){
    //   console.log(chartdata1);
    // },
    async showct1(ct) {
      request.post("/api/data/querySalary",ct).then((res) => {
        // console.log(res.data.value);
        let data=res.data.value;
        this.chartdata1=data;
      });
       let chart1 = echarts.init(document.getElementById("chart1"));
      // 绘制图表
      chart1.setOption({
        color: ["#61a0a8"],
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          axisLine: {
            //这是x轴文字颜色
            lineStyle: {
              color: " #999999",
            },
          },
        },
        yAxis: {
          type: "value",
          boundaryGap: ["0", "0.1"],
          axisLine: {
            //这是x轴文字颜色
            lineStyle: {
              color: " #999999",
            },
          },
          //y轴刻度横线 ：false
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
            data:this.chartdata1,
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.1)",
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  // { offset: 0.4, color: "#1BFEFE" },
                  // { offset: 1, color: "#1BFEFE" },
                  { offset: 0.2, color: "#44C0C1" }, //柱图渐变色
                  { offset: 1, color: "#1BFEFE" },
                ]),
              },
            },
          },
        ],
      });
    },
    // chart1() {
    //   // 基于准备好的dom，初始化echarts实例
    //   let chart1 = echarts.init(document.getElementById("chart1"));
    //   // 绘制图表
    //   chart1.setOption({
    //     color: ["#61a0a8"],
    //     xAxis: {
    //       type: "category",
    //       data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    //       axisLine: {
    //         //这是x轴文字颜色
    //         lineStyle: {
    //           color: " #999999",
    //         },
    //       },
    //     },
    //     yAxis: {
    //       type: "value",
    //       boundaryGap: ["0", "0.1"],
    //       axisLine: {
    //         //这是x轴文字颜色
    //         lineStyle: {
    //           color: " #999999",
    //         },
    //       },
    //       //y轴刻度横线 ：false
    //       splitLine: {
    //         show: false,
    //       },
    //     },
    //     grid: {
    //       x: 40,
    //       y: 20,
    //       x2: 80,
    //       y2: 40,
    //     },
    //     series: [
    //       {
    //         barWidth: "60%",
    //         data: [120, 50, 150, 80, 70, 110],
    //         type: "bar",
    //         showBackground: true,
    //         backgroundStyle: {
    //           color: "rgba(180, 180, 180, 0.1)",
    //         },
    //         itemStyle: {
    //           normal: {
    //             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //               // { offset: 0.4, color: "#1BFEFE" },
    //               // { offset: 1, color: "#1BFEFE" },
    //               { offset: 0.2, color: "#44C0C1" }, //柱图渐变色
    //               { offset: 1, color: "#1BFEFE" },
    //             ]),
    //           },
    //         },
    //       },
    //     ],
    //   });
    // },
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
  // watch: {
  //   xData() {
  //     this.echartsInit();
  //   },
  // },
};
</script>

<style lang="less" scoped>
.grid-container {
  display: grid;
  height: calc(100% - 45px);
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "pt1 pt3  "
    "pt2 pt4  ";
  background-color: transparent;
  // .title{

  // }

  .chart {
    height: 350px;
  }
  div {
    text-align: center;
    font-size: 30px;
    outline: 1px dashed rgb(136, 27, 27);
  }
  .item1 {
    grid-area: pt1;
    .title {
      // float: top;
      height: 70px;
      .select {
        position: relative;
        top: 50%;
        left: 83%;
        height: 36px;
        width: 100px;
        .el-dropdown-link {
          height: 40px;
          font-size: 12pt;
          line-height: 40px;
          text-align: center;
          color: white;
        }
      }
    }
  }
  .item2 {
    grid-area: pt2;
  }
  .item3 {
    grid-area: pt3;
  }
  .item4 {
    grid-area: pt4;
  }
}
</style>