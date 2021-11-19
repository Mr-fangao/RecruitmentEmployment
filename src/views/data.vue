<template>
  <div id="map">
    <div class="container">
      <div class="left-part">
        <div class="pt1">
          <header>
            <div class="header-title">TOP10城市薪资水平</div>
          </header>
          <div class="Lechartcontent">
            <div id="chart1" :style="{ width: '110%', height: '100%' }"></div>
          </div>
        </div>
        <div class="pt2">
          <header>
            <div class="header-title">TOP10城市薪资水平</div>
          </header>
          <div class="Lechartcontent">
            <div id="chart2" :style="{ width: '110%', height: '100%' }"></div>
          </div>
        </div>
        <div class="pt3">
          <header>
            <div class="header-title">TOP10城市薪资水平</div>
          </header>
          <div class="Lechartcontent">
            <div id="chart3" :style="{ width: '110%', height: '100%' }"></div>
          </div>
        </div>
      </div>
      <div class="right-part">
        <div class="pt4">
          <header>
            <div class="header-title">TOP10城市薪资水平</div>
          </header>
          <div class="Lechartcontent">
            <div id="chart4" :style="{ width: '100%', height: '100%' }"></div>
          </div>
        </div>
        <div class="pt5">
          <header>
            <div class="header-title">TOP10城市薪资水平</div>
          </header>
          <div class="Lechartcontent">
            <div id="chart5" :style="{ width: '100%', height: '100%' }"></div>
          </div>
        </div>
        <div class="pt6">
          <header>
            <div class="header-title">TOP10城市薪资水平</div>
          </header>
          <div class="Lechartcontent">
            <div id="chart6" :style="{ width: '100%', height: '100%' }"></div>
          </div>
        </div>
      </div>
    </div>
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

const mapboxgl = require("mapbox-gl");
export default {
  name: "jobsearch",
  data() {},
  mounted() {
    this.initmap();
    this.chart1();
    this.chart2();
    this.chart3();
    this.chart4();
    this.chart5();
    this.chart6();
    //禁止页面滑动
    let m = function (e) {
      e.preventDefault();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("touchmove", m, { passive: false });
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
          x: 40,
          y: 20,
          x2: 80,
          y2: 40,
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
          x: 40,
          y: 20,
          x2: 80,
          y2: 40,
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
    chart4() {
      //基于准备好的dom，初始化echarts实例
      let Chart4 = echarts.init(document.getElementById("chart4"));
      var option;
      option = {
        color: ["#1E90FF"],
        xAxis: {
          axisLine: {
            //这是x轴文字颜色
            lineStyle: {
              color: " #999999",
            },
          },
        },
        yAxis: {
          axisLine: {
            //这是x轴文字颜色
            lineStyle: {
              color: " #999999",
            },
          },
        },
        series: [
          {
            symbolSize: 12,
            data: [
              [10.0, 8.04],
              [8.07, 6.95],
              [13.0, 7.58],
              [9.05, 8.81],
              [11.0, 8.33],
              [14.0, 7.66],
              [13.4, 6.81],
              [10.0, 6.33],
              [14.0, 8.96],
              [12.5, 6.82],
              [9.15, 7.2],
              [11.5, 7.2],
              [3.03, 4.23],
              [12.2, 7.83],
              [2.02, 4.47],
              [1.05, 3.33],
              [4.05, 4.96],
              [6.03, 7.24],
              [12.0, 6.26],
              [12.0, 8.84],
              [7.08, 5.82],
              [5.02, 5.68],
            ],
            type: "scatter",
          },
        ],
      };
      //   var ROOT_PATH =
      //     "https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples";
      //   var option;
      //   $.get(
      //     ROOT_PATH + "/data/asset/data/life-expectancy-table.json",
      //     function (_rawData) {
      //       run(_rawData);
      //     }
      //   );
      //   function run(_rawData) {
      //     // var countries = ['Australia', 'Canada', 'China', 'Cuba', 'Finland', 'France', 'Germany', 'Iceland', 'India', 'Japan', 'North Korea', 'South Korea', 'New Zealand', 'Norway', 'Poland', 'Russia', 'Turkey', 'United Kingdom', 'United States'];
      //     const countries = [
      //       "Finland",
      //       "France",
      //       "Germany",
      //       "Iceland",
      //       "Norway",
      //       "Poland",
      //       "Russia",
      //       "United Kingdom",
      //     ];
      //     const datasetWithFilters = [];
      //     const seriesList = [];
      //     echarts.util.each(countries, function (country) {
      //       var datasetId = "dataset_" + country;
      //       datasetWithFilters.push({
      //         id: datasetId,
      //         fromDatasetId: "dataset_raw",
      //         transform: {
      //           type: "filter",
      //           config: {
      //             and: [
      //               { dimension: "Year", gte: 1950 },
      //               { dimension: "Country", "=": country },
      //             ],
      //           },
      //         },
      //       });
      //       seriesList.push({
      //         type: "line",
      //         datasetId: datasetId,
      //         showSymbol: false,
      //         name: country,
      //         endLabel: {
      //           show: true,
      //           formatter: function (params) {
      //             return params.value[3] + ": " + params.value[0];
      //           },
      //         },
      //         labelLayout: {
      //           moveOverlap: "shiftY",
      //         },
      //         emphasis: {
      //           focus: "series",
      //         },
      //         encode: {
      //           x: "Year",
      //           y: "Income",
      //           label: ["Country", "Income"],
      //           itemName: "Year",
      //           tooltip: ["Income"],
      //         },
      //       });
      //     });
      //     option = {
      //       animationDuration: 10000,
      //       dataset: [
      //         {
      //           id: "dataset_raw",
      //           source: _rawData,
      //         },
      //         ...datasetWithFilters,
      //       ],
      //       title: {
      //         text: "Income of Germany and France since 1950",
      //       },
      //       tooltip: {
      //         order: "valueDesc",
      //         trigger: "axis",
      //       },
      //       xAxis: {
      //         type: "category",
      //         nameLocation: "middle",
      //       },
      //       yAxis: {
      //         name: "Income",
      //       },
      //       grid: {
      //         right: 140,
      //       },
      //       series: seriesList,
      //     };
      //     Chart4.setOption(option);
      //   }

      option && Chart4.setOption(option);
    },
    chart5() {
      // 基于准备好的dom，初始化echarts实例
      let Chart5 = echarts.init(document.getElementById("chart5"));
      var option;
      option = {
        // title: {
        //   text: "Funnel",
        // },
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
          data: ["Show", "Click", "Visit", "Inquiry", "Order"],
        },
        series: [
          {
            name: "Funnel",
            type: "funnel",
            left: "10%",
            top: 40,
            bottom: 40,
            width: "80%",
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
                fontSize: 15,
              },
            },
            data: [
              { value: 60, name: "Visit" },
              { value: 40, name: "Inquiry" },
              { value: 20, name: "Order" },
              { value: 80, name: "Click" },
              { value: 100, name: "Show" },
            ],
          },
        ],
      };

      option && Chart5.setOption(option);
    },
    chart6() {
      // 基于准备好的dom，初始化echarts实例
      let Chart6 = echarts.init(document.getElementById("chart6"));
      var option;
      option = {
        color: ["#4169E1"],
        dataset: {
          source: [
            ["score", "amount", "product"],
            [89.3, 58212, "Matcha"],
            [57.1, 78254, "Milk"],
            [74.4, 41032, "Chees"],
            [50.1, 12755, "Cheese"],
            [89.7, 20145, "Matcha"],
            [68.1, 79146, "Tea"],
            [19.6, 91852, "Orange"],
            [10.6, 101852, "Lemon"],
            [32.7, 20112, "Walnut"],
          ],
        },
        grid: {
          x: 40,
          y: 20,
          x2: 80,
          y2: 40,
          containLabel: true,
        },
        xAxis: {
          name: "amount",
          axisLine: {
            //这是x轴文字颜色
            lineStyle: {
              color: " #999999",
            },
          },
        },
        yAxis: {
          type: "category",
          axisLine: {
            //这是x轴文字颜色
            lineStyle: {
              color: " #999999",
            },
          },
        },
        visualMap: {
          orient: "horizontal",
          left: "center",
          min: 10,
          max: 100,
          text: ["High Score", "Low Score"],
          // Map the score column to color
          dimension: 0,
          inRange: {
            color: ["#65B581", "#FFCE34", "#FD665F"],
          },
        },
        series: [
          {
            type: "bar",
            encode: {
              // Map the "amount" column to X axis.
              x: "amount",
              // Map the "product" column to Y axis
              y: "product",
            },
          },
        ],
      };
      option && Chart6.setOption(option);
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
  height: calc(100% - 32px);
  width: 100%;
}
.left-part {
  position: absolute;
  height: 100%;
  width: 22%;
  float: left;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: url(../assets/img/pt/leftsidepart.png) no-repeat;
  opacity: 1;
  background-size: 150% 100%;
  .pt1 {
    flex: 1;
    background: url(../assets/img/pt/ptbackground.png) no-repeat;
    background-size: 100% 100%;
  }
  .pt2 {
    flex: 1;
    background: url(../assets/img/pt/ptbackground.png) no-repeat;
    background-size: 100% 100%;
  }
  .pt3 {
    flex: 1;
    background: url(../assets/img/pt/ptbackground.png) no-repeat;
    background-size: 100% 100%;
  }
}
.right-part {
  position: absolute;
  right: 0%;
  height: 100%;
  width: 22%;
  float: right;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: url(../assets/img/pt/rightsidepart.png) no-repeat;
  opacity: 1;
  background-size: 145% 100%;
  background-position: 100% 10%;
  .pt4 {
    flex: 1;
    background: url(../assets/img/pt/ptbackground.png) no-repeat;
    background-size: 100% 100%;
  }
  .pt5 {
    flex: 1;
    background: url(../assets/img/pt/ptbackground.png) no-repeat;
    background-size: 100% 100%;
  }
  .pt6 {
    flex: 1;
    background: url(../assets/img/pt/ptbackground.png) no-repeat;
    background-size: 100% 100%;
  }
}
</style>
