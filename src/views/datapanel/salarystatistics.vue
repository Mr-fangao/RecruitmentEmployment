<template>
  <div class="grid-container">
    <div class="item item1">
      <div class="content">
        <div class="title">
          <div class="title_back">
            <div class="title_text">区域城市薪资Top10</div>
          </div>
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
                    >全国</el-dropdown-item
                  >
                  <el-dropdown-item
                    @click="(ct1 = 2), fetchData(ct1)"
                    :class="{ active: ct1 == 2 }"
                    >北京</el-dropdown-item
                  >
                  <el-dropdown-item
                    @click="(ct1 = 3), fetchData(ct1)"
                    :class="{ active: ct1 == 3 }"
                    >上海
                  </el-dropdown-item>
                  <el-dropdown-item
                    @click="(ct1 = 4), fetchData(ct1)"
                    :class="{ active: ct1 == 4 }"
                    >上海>广州</el-dropdown-item
                  >
                  <el-dropdown-item
                    @click="(ct1 = 5), fetchData(ct1)"
                    :class="{ active: ct1 == 5 }"
                    >上海>深圳</el-dropdown-item
                  >
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
    <div class="item item2">
      <div class="content">
        <div class="title">
          <div class="title_back">
            <div class="title_text">城市薪资区间词云</div>
          </div>
          <div class="select">
            <el-dropdown>
              <span class="el-dropdown-link">
                选择城市
                <i class="fa fa-angle-down"></i>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item
                    @click="(ct2 = 1), fetchData(ct1)"
                    :class="{ active: ct2 == 1 }"
                    >北京</el-dropdown-item
                  >
                  <el-dropdown-item
                    @click="(ct2 = 2), fetchData(ct1)"
                    :class="{ active: ct2 == 2 }"
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
          <div id="chart2" :style="{ width: '100%', height: '100%' }"></div>
        </div>
      </div>
    </div>
    <div class="item item3">
      <div class="content">
        <div class="title">
          <div class="title_back">
            <div class="title_text">城市职位薪资极差图</div>
          </div>
          <div class="select">
            <el-dropdown>
              <span class="el-dropdown-link">
                选择城市
                <i class="fa fa-angle-down"></i>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item
                    @click="(ct2 = 1), fetchData(ct1)"
                    :class="{ active: ct2 == 1 }"
                    >北京</el-dropdown-item
                  >
                  <el-dropdown-item
                    @click="(ct2 = 2), fetchData(ct1)"
                    :class="{ active: ct2 == 2 }"
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
          <div id="chart3" :style="{ width: '100%', height: '100%' }"></div>
        </div>
      </div>
    </div>
    <div class="item item4">
      <div class="content">
        <div class="title">
          <div class="title_back">
            <div class="title_text">行业平均月薪雷达图</div>
          </div>
        </div>
        <div class="chart">
          <div id="chart4" :style="{ width: '100%', height: '100%' }"></div>
        </div>
      </div>
    </div>
    <div class="item item5">
      <div class="content">
        <div class="title">
          <div class="title_back">
            <div class="title_text">城市职位薪资Top15</div>
          </div>
          <div class="select">
            <el-dropdown>
              <span class="el-dropdown-link">
                选择城市
                <i class="fa fa-angle-down"></i>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item
                    @click="(ct2 = 1), fetchData(ct1)"
                    :class="{ active: ct2 == 1 }"
                    >北京</el-dropdown-item
                  >
                  <el-dropdown-item
                    @click="(ct2 = 2), fetchData(ct1)"
                    :class="{ active: ct2 == 2 }"
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
          <div id="chart5" :style="{ width: '100%', height: '100%' }"></div>
        </div>
      </div>
    </div>
    <!-- <div class="item item5">5</div> -->
  </div>
</template>

<script>
//import axios from "axios";
import "font-awesome/css/font-awesome.css";
import request from "../../utils/request";
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/bar");
require("echarts/lib/chart/line");
// require("echarts/lib/chart/pie");
// require("echarts/lib/chart/scatter");散点图
// require("echarts/lib/chart/heatmap");热力图
// require("echarts/lib/chart/funnel");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/component/legend");
require("echarts/lib/chart/treemap"); //极差矩形树图
// require("echarts/lib/component/visualMap");//映射工具
export default {
  name: "salary",
  data() {
    return {
      ct1: 1,
      ct2: 1,
      ct3: 1,
      ct4: 1,
      ct5: 1,
      ct6: 1,
      chartdata1: [],
      chartdata2: [],
      chartdata3: [],
      chartdata4: [],
    };
  },
  created() {},
  mounted() {
    this.fetchData(1);
    this.showct1();
    this.showct2();
    this.showct4();
    this.showct3();
  },
  methods: {
    fetchData(ct1) {
      var sendData = ct1;
      var code = JSON.stringify(sendData);
      console.log(code);
      request.post("/api/data/querySalary", { code }).then((res) => {
        this.chartdata1.ydata = res.data.data;
        // this.chartdata1.xdata = res.data.data.ct1;
        // console.log(this.chartdata1);
        //解决 echarts动态渲染数据图形不生效问题:获取数据但不渲染，执行下一个循环才将数据渲染进echarts
        this.$nextTick(() => {
          this.showct1();
          this.showct2();
          this.showct4();
          this.showct3();
        });
      });
    },
    showct1() {
      // 绘制图表
      var chart1 = echarts.init(document.getElementById("chart1"));
      chart1.resize();
      chart1.setOption({
        tooltip: {
          trigger: "axis", //鼠标经过提示
          formatter: "{b0}:{c0}万", //单位
        },
        legend: {
          icon: "roundRect", //icon为圆角矩形
          data: ["样例1", "样例2", "样例3"],
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 16,
          },
        },
        xAxis: {
          type: "category",
          data: [
            "无需",
            "在校/应届",
            "1年",
            "2年",
            "3-4年",
            "5-7年",
            "8-9年",
            "10年以上",
          ],
          axisLabel: {
            interval: 0,
          },
          axisLine: {
            //x轴文字颜色
            lineStyle: {
              color: "rgba(255, 255, 255, 0.5)",
            },
          },
        },
        yAxis: {
          type: "value",
          name: "单位：千",
          //坐标轴范围
          boundaryGap: ["0", "0.1"],
          axisLine: {
            //轴文字颜色
            lineStyle: {
              color: "rgba(255, 255, 255, 0.5)",
            },
          },
          //y轴刻度横线
          splitLine: {
            show: false,
          },
        },
        grid: {
          x: 50,
          y: 30,
          x2: 30,
          y2: 40,
        },
        series: [
          {
            type: "bar",
            showBackground: true,
            data: [5.85, 6.67, 7.85, 8.12, 9.16, 13.99, 17.25, 23.8],
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.1)",
            },
            itemStyle: {
              normal: {
                color: "#1BFEFE",
              },
            },
            areaStyle: {
              normal: {
                //右，下，左，上
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#1BFEFE",
                    },
                    {
                      offset: 1,
                      color: "rgba(207, 247, 255, 0.3)",
                    },
                  ],
                  false
                ),
              },
            },
          },
        ],
      });
    },
    showct2() {},
    showct3() {
      // 绘制图表
      var chart3 = echarts.init(document.getElementById("chart3"));
      chart3.resize();
      chart3.setOption({
        tooltip: {
          trigger: "axis", //鼠标经过提示
          formatter: "{b0}:{c0}万", //单位
        },
        legend: {
          icon: "roundRect", //icon为圆角矩形
          data: ["样例1", "样例2", "样例3"],
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 16,
          },
        },
        xAxis: {
          type: "category",
          data: [
            "无需",
            "在校/应届",
            "1年",
            "2年",
            "3-4年",
            "5-7年",
            "8-9年",
            "10年以上",
          ],
          axisLabel: {
            interval: 0,
          },
          axisLine: {
            //x轴文字颜色
            lineStyle: {
              color: "rgba(255, 255, 255, 0.5)",
            },
          },
        },
        yAxis: {
          type: "value",
          name: "单位：千",
          //坐标轴范围
          boundaryGap: ["0", "0.1"],
          axisLine: {
            //轴文字颜色
            lineStyle: {
              color: "rgba(255, 255, 255, 0.5)",
            },
          },
          //y轴刻度横线
          splitLine: {
            show: false,
          },
        },
        grid: {
          x: 50,
          y: 30,
          x2: 30,
          y2: 40,
        },
        series: [
          {
            type: "line",
            showBackground: true,
            data: [5.85, 6.67, 7.85, 8.12, 9.16, 13.99, 17.25, 23.8],
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.1)",
            },
            itemStyle: {
              normal: {
                color: "#fafa96",
              },
            },
          },
        ],
      });
    },
    showct4() {},
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
    "pt1 pt3 pt3 "
    "pt2 pt4 pt5 ";
  background-color: transparent;
  .el-dropdown {
    width: 70%;
    height: 73%;
    background: url(../../assets/img/pt/button.png) no-repeat;
    background-size: 89% 69%;
  }
  // div {
  //   // text-align: center;
  //   // font-size: 30px;
  //   // outline: 1px dashed rgb(136, 27, 27);
  // }
  .item {
    background: url(../../assets/img/pt/ptbackground.png) no-repeat;
    background-size: 100% 100%;
    text-align: center;
    font-size: 30px;
    margin: 2% 2% 2% 2%;
    .content {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      .title {
        height: 60px;
        display: flex;
        flex-direction: row;
        .title_text {
          margin: 6% 6% 0% 4%;
        }
        .select {
          position: relative;
          top: 50%;
          left: 6%;
          width: 30%;
          .el-dropdown-link {
            height: 40px;
            font-size: 10pt;
            line-height: 32px;
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
    //outline: 1px dashed rgb(136, 27, 27);
  }
  .item1 {
    grid-area: pt1;
    margin-left: 10%;
    margin-top: 3%;
  }
  .item2 {
    grid-area: pt2;
    margin-bottom: 3%;
    margin-left: 10%;
  }
  .item3 {
    grid-area: pt3;
    margin-bottom: 1.5%;
    margin-left: 2.5%;
    margin-right: 5%;
    margin-top: 1.5%;
    .title_back {
      width: 60%;
      height: 100%;
      background-size: 10% 20%;
      background-position-y: 60%;
      background-position-x: 10%;
      margin-left: 0%;
      .title_text {
        margin: 3% 34% 0% 0% !important;
      }
    }
    .select {
      left: 6% !important;
      width: 30% !important;
    }
  }
  .item4 {
    grid-area: pt4;
    margin-bottom: 3%;
    margin-left: 5%;
    margin-right: 5%;
  }
  .item5 {
    grid-area: pt5;
    margin-bottom: 3%;
    margin-right: 10%;
  }
}
</style>
