<template>
  <div class="grid-container">
    <div class="pt1">
      <header></header>
      <main>
        <div id="chart1" :style="{ width: '100%', height: '100%' }"></div>
      </main>
    </div>
    <div class="pt2">
      <header></header>
      <main>
        <div id="chart2" :style="{ width: '100%', height: '100%' }"></div>
      </main>
    </div>
    <div class="pt3">
      <header></header>
      <main>
        <div id="chart3" :style="{ width: '100%', height: '100%' }"></div>
      </main>
    </div>
    <div class="pt4">4</div>
    <div class="pt5">
      <header></header>
      <main></main>
    </div>
    <div class="pt6">
      <header></header>
      <main></main>
    </div>
    <div class="pt7">
      <header></header>
      <main></main>
    </div>
  </div>
</template>

<script>
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/bar");
require("echarts/lib/chart/line");
require("echarts/lib/chart/pie");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  name: "jobdetails",
  data() {},
  mounted() {
    this.chart1();
    this.chart2();
    this.chart3();
  },
  methods: {
    chart1() {
      // 基于准备好的dom，初始化echarts实例
      let Chart1 = echarts.init(document.getElementById("chart1"));
      // 绘制图表
      var option;
      option = {
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
          x: 55,
          y: 35,
          x2: 35,
          y2: 25,
        },
        series: [
          {
            barWidth: "60%",
            data: [120, 50, 150, 80, 70, 110],
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
      };
      option && Chart1.setOption(option);
    },
    chart2() {
      // 基于准备好的dom，初始化echarts实例
      let Chart2 = echarts.init(document.getElementById("chart2"));
      // 绘制图表
      var option;
      option = {
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
          x: 55,
          y: 35,
          x2: 35,
          y2: 25,
        },
        series: [
          {
            barWidth: "60%",
            data: [120, 50, 150, 80, 70, 110],
            type: "line",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.1)",
            },
          },
        ],
      };
      option && Chart2.setOption(option);
    },
    chart3() {
      // 基于准备好的dom，初始化echarts实例
      let Chart3 = echarts.init(document.getElementById("chart3"));
      // 绘制图表
      var option;
      option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
          // x: "left",
          // data: ["A", "B", "C", "D", "E"],
          // backgroundColor: '#ffffff',
          // textStyle: {color: '#ffffff'},
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["30%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#black",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "A" },
              { value: 735, name: "B" },
              { value: 580, name: "C" },
              { value: 484, name: "D" },
              { value: 300, name: "E" },
            ],
          },
        ],
      };
      option && Chart3.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
.grid-container {
  display: grid;
  height: calc(100% - 45px);
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "pt1 pt4 pt5 "
    "pt2 pt4 pt6 "
    "pt3 pt4 pt7 ";
  background-color: transparent;

  div {
    text-align: center;
    font-size: 30px;
    //outline: 1px dashed rgb(136, 27, 27);
  }
  .pt1 {
    grid-area: pt1;
  }
  .pt2 {
    grid-area: pt2;
  }
  .pt3 {
    grid-area: pt3;
  }
  .pt4 {
    grid-area: pt4;
  }
  .pt5 {
    grid-area: pt5;
  }
  .pt6 {
    grid-area: pt6;
  }
  .pt7 {
    grid-area: pt7;
  }
}
</style>
