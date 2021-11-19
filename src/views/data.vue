<template>
  <div id="map">
    <div class="container">
      <div class="left-part">
        <div class="pt1">
          <header>
            <div class="header-title">TOP10城市薪资水平</div>
          </header>
          <div class="Lechartcontent">
            <div id="chart1" :style="{ width: '100%', height: '110%' }"></div>
          </div>
        </div>
        <div class="pt2">
          <header>
            <div class="header-title">TOP10城市薪资水平</div>
          </header>
          <div class="Lechartcontent">
            <div id="chart2" :style="{ width: '100%', height: '110%' }"></div>
          </div>
        </div>
        <div class="pt3">
          <header>
            <div class="header-title">TOP10城市薪资水平</div>
          </header>
          <div class="Lechartcontent">
            <div id="chart3" :style="{ width: '100%', height: '110%' }"></div>
          </div>
        </div>
      </div>
      <div class="right-part">
        <div class="pt4">4</div>
        <div class="pt5">5</div>
        <div class="pt6">6</div>
      </div>
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
require("echarts/lib/component/legend");
const mapboxgl = require("mapbox-gl");
export default {
  name: "jobsearch",
  data() {},
  mounted() {
    this.initmap();
    this.chart1();
    this.chart2();
    this.chart3();
  },
  methods: {
    //地图服务初始化
    initmap() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiY2hlbmpxIiwiYSI6ImNrcWFmdWt2bjBtZGsybmxjb29oYmRzZzEifQ.mnpiwx7_cBEyi8YiJiMRZg"; //这里请换成自己的token
      var map = new mapboxgl.Map({
        container: "map", // container id 绑定的组件的id
        style: "mapbox://styles/chenjq/ckqkfcjks2rpq17r1wcs2k81x", //地图样式，可以使用官网预定义的样式,也可以自定义
        center: [103.06756, 38.050558], // 初始坐标系，这个是南京建邺附近
        zoom: 3, // starting zoom 地图初始的拉伸比例
        pitch: 0, //地图的角度，不写默认是0，取值是0-60度，一般在3D中使用
        bearing: 0, //地图的初始方向，值是北的逆时针度数，默认是0，即是正北
        antialias: true, //抗锯齿，通过false关闭提升性能
        attributionControl: false,
      });
    },
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
          x2: 80,
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
          x2: 80,
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
          orient: "vertical",
          left: "55%", //图例距离左的距离
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
            center: ["30%", "53%"],
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
// div {

//   outline: 1px dashed rgb(136, 27, 27);
// }
.map {
  position: relative;
}
.Lechartcontent {
  height: calc(100% - 48px);
  right: 10%;
}
.left-part {
  position: absolute;
  height: 100%;
  width: 25%;
  float: left;
  display: flex;
  flex-direction: column;
  background: url(../assets/img/pt/leftsidepart.png) no-repeat;
  opacity: 1;
  background-size: 150% 100%;
  .pt1 {
    flex: 1;
  }
  .pt2 {
    flex: 1;
  }
  .pt3 {
    flex: 1;
  }
}
.right-part {
  position: absolute;
  left: 75%;
  height: 100%;
  width: 25%;
  float: right;
  display: flex;
  flex-direction: column;
  background: url(../assets/img/pt/rightsidepart.png) no-repeat;
  opacity: 1;
  background-size: 145% 100%;
  background-position: 100% 10%;
  .pt4 {
    flex: 1;
  }
  .pt5 {
    flex: 1;
  }
  .pt6 {
    flex: 1;
  }
}
</style>