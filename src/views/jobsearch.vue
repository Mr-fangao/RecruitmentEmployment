<template>
  <div class="grid-container">
    <div class="pt1">
      <header></header>
      <div class="content" style="height: 203px; width: 400px">
        <div id="myChart" :style="{ width: '400px', height: '203px' }"></div>
      </div>
    </div>
    <div class="pt2">
      <header></header>
      <main>
      </main>
    </div>
    <div class="pt3">
      <header></header>
      <main>
      </main>
    </div>
    <div class="pt4">4</div>
    <div class="pt5">
      <header></header>
      <main>
      </main>
    </div>
    <div class="pt6">
      <header></header>
      <main>
      </main>
    </div>
    <div class="pt7">
      <header></header>
      <main>
      </main>
    </div>
  </div>
</template>

<script>
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/bar");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  name: "jobsearch",
  data() {},
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart"));
      // 绘制图表
      var option;
      option = {
        color: ["#61a0a8"],
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        },
        yAxis: {
          type: "value",
          //y轴刻度横线 ：false
          splitLine: {
            show: false,
          },
        },
        grid: {
          x: 55,
          y: 25,
          x2: 35,
          y2: 25,
        },
        series: [
          {
            barWidth: "60%",
            data: [120, 200, 150, 80, 70, 110],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.1)",
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0.4, color: "#1BFEFE" },
                  { offset: 1, color: "#1BFEFE" },
                  // { offset: 1, color: "#188df0" },
                ]),
              },
              // emphasis: {
              //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              //     { offset: 0, color: "#71C8B1" }, //柱图高亮渐变色
              //     { offset: 0.7, color: "#44C0C1" }, //柱图高亮渐变色
              //     { offset: 1, color: "#06B5D7" }, //柱图高亮渐变色
              //   ]),
              // },
            },
          },
        ],
      };

      option && myChart.setOption(option);
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
