<template>
  <div class="grid-container">
    <div class="item1">
      <div class="content">
        <div class="title">
          <dir class="select">
            <el-dropdown>
              <span class="el-dropdown-link">
                Dropdown List
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Action 1</el-dropdown-item>
                  <el-dropdown-item>Action 2</el-dropdown-item>
                  <el-dropdown-item>Action 3</el-dropdown-item>
                  <el-dropdown-item>Action 4</el-dropdown-item>
                  <el-dropdown-item>Action 5</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </dir>
        </div>
        <div class="chart">
          <div id="chart1" :style="{ width: '100%', height: '100%' }"></div>
        </div>
      </div>
    </div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
  </div>
</template>

<script>
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
  name: "education",

  data() {},
  mounted() {
    this.chart1();
  },
  methods: {
    chart1() {
      // 基于准备好的dom，初始化echarts实例
      let Chart1 = echarts.init(document.getElementById("chart1"));
      // 绘制图表
      var option;
      option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "5%", //图例距离左的距离
          y: "center", //图例上下居中
          data: ["A", "B", "C", "D", "E"],
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 12,
          },
        },

        series: [
          {
            name: "Access From",
            type: "pie",
            center: ["60%", "55%"],
            radius: ["70%", "50%"],
            label: {
              normal: {
                show: true,
                position: "outside",
                formatter: "{b}",
              },
            },
            labelLine: {
              normal: {
                show: true,
                length: 50,
                length2: 10,
              },
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
      option && Chart1.setOption(option);
    },
  },
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
      float: top;
      height: 70px;
      .select {

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