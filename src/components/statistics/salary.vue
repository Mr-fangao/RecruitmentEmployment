<template>
  <div id="salary">
    <div id="map" />
    <div class="left">
      <div class="col-content">
        <div class="row1title">
          <div class="imgBK"></div>
          <span>招聘数据总览</span>
        </div>
        <div class="countdata">
          <div class="datasource">
            <div class="leftpt">数据源:</div>
            <div class="rightpt">
              <el-checkbox v-model="checked">前程无忧</el-checkbox>
              <el-checkbox v-model="checked">智联招聘</el-checkbox>
            </div>
          </div>
          <div class="count">
            <div class="total">
              <div class="title">信息数</div>
              <div class="d"><span>11711</span></div>
            </div>
            <div class="company">
              <div class="title">公司数</div>
              <div class="d"><span>111</span></div>
            </div>
            <div class="position">
              <div class="title">职位数</div>
              <div class="d"><span>111</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-content">
        <div class="row1title">
          <div class="imgBK"></div>
          <span>热门城市平均薪资统计</span>
        </div>
        <div class="row1chartcontent" id="chart1"></div>
      </div>
      <div class="col-content">
        <div class="row1title">
          <div class="imgBK"></div>
          <span>职位平均薪资统计</span>
        </div>
        <div class="row1chartcontent" id="chart2"></div>
      </div>
    </div>
    <div class="main">
      <div class="col-content">
        <div class="row2title">
          <div class="imgBK"></div>
          <span>热门职位平均薪资月变化</span>
        </div>
        <div class="row1chartcontent" id="chart4" ref="Chart4"></div>
      </div>
    </div>
    <div class="right">
      <div class="col-content">
        <div class="row1title">
          <div class="imgBK"></div>
          <span>公司类型平均薪资统计</span>
        </div>
        <div class="row1chartcontent" id="chart3"></div>
      </div>
      <div class="col-content">
        <div class="row1title">
          <div class="imgBK"></div>
          <span>薪资区间词云</span>
        </div>
        <div class="row1chartcontent" id="chart6" ref="cloudEl"></div>
      </div>
      <div class="col-content">
        <div class="row1title">
          <div class="imgBK"></div>
          <span>行业平均薪资统计</span>
        </div>
        <div class="row1chartcontent" id="chart7"></div>
      </div>
    </div>
  </div>
</template>
<script>
import heatMapData from "../../assets/json/heatMapData.json";
import wordcloud from "../../assets/js/echarts-wordcloud-master/index";
import echarts from "echarts";
import request from "@/utils/request";
export default {
  name: "salary",
  components: {
    wordcloud,
  },
  data() {
    return {
      checked: true,
      checked1: false,
      cloudData: [
        { value: 1800, name: "纳木措" },
        { value: 1200, name: "西藏" },
        { value: 1000, name: "海拔" },
        { value: 900, name: "景色" },
        { value: 700, name: "湖水" },
        { value: 650, name: "雪山" },
        { value: 630, name: "值得" },
        { value: 610, name: "没有" },
        { value: 600, name: "地方" },
        { value: 543, name: "风景" },
        { value: 523, name: "景区" },
        { value: 500, name: "感觉" },
        { value: 500, name: "高原" },
        { value: 490, name: "湖面" },
        { value: 490, name: "圣湖" },
        { value: 490, name: "小时" },
        { value: 430, name: "湖泊" },
        { value: 430, name: "大圣" },
        { value: 430, name: "美丽" },
        { value: 380, name: "景点" },
        { value: 380, name: "牦牛" },
        { value: 340, name: "时间" },
        { value: 280, name: "咸水湖" },
        { value: 260, name: "天湖" },
        { value: 260, name: "藏民" },
        { value: 200, name: "朋友" },
        { value: 200, name: "蓝天白云" },
        { value: 100, name: "开车" },
        { value: 50, name: "神圣" },
        { value: 40, name: "推荐" },
        { value: 25, name: "限速" },
        { value: 13, name: "距离" },
      ],
      option4: {
        color: [
          "#ff7f50",
          "#87cefa",
          "#da70d6",
          "#32cd32",
          "#6495ed",
          "#ff69b4",
          "#ba55d3",
          "#cd5c5c",
          "#ffa500",
          "#40e0d0",
        ],
        tooltip: { trigger: "axis" },
        //图例--折线提示提示
        legend: {
          top:"top",
          borderColor: "#6699FF", //边框颜色
          textStyle: {
            color: "#1e90ff", // 图例文字颜色
          },
          data: [
            "前端开发工程师",
            "GIS开发工程师",
            "数据库工程师",
            "后端开发工程师",
          ],
        },
        calculable: true,
        xAxis: {
          data: [],
          name: "单位:月份",
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
        },
        yAxis: [
          {
            splitLine: { show: false },
            type: "value",
            name: "单位:万元",
            min: "10",
            max: "",
            splitNumber: 5,
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
        ],
        grid: {
          x: 40,
          y: 40,
          x2: 70,
          y2: 25,
        },
        series: [
          {
            type: "line",
            name: "前端开发工程师",
            data: [],
          },
          {
            type: "line",
            name: "GIS开发工程师",
            data: [],
          },
          {
            type: "line",
            name: "数据库工程师",
            data: [],
          },
          {
            type: "line",
            name: "后端开发工程师",
            data: [],
          },
        ],
      },
      plan_table: [
        {
          month: "11",
          qd: "16.2",
          gis: "12",
          sjk: "13",
          hd: "15.1",
          
        },
        {
          month: "12",
          qd: "16.5",
          gis: "12.1",
          sjk: "13.8",
          hd: "15.7",
          
        },
        {
          month: "1",
          qd: "17",
          gis: "12",
          sjk: "13.5",
          hd: "16",
          
        },
        {
          month: "2",
          qd: "17.1",
          gis: "12.3",
          sjk: "14.2",
          hd: "15.1",
          
        },
        {
          month: "3",
          qd: "17.3",
          gis: "12.4",
          sjk: "14.5",
          hd: "15.3",
          
        },
      ],
    };
  },
  mounted() {
    this.initmap();
    this.wordCloudInti(this.$refs.cloudEl, this.cloudData);
    this.initChart1();
    this.initChart2();
    this.typeData();
    this.initChart4();
    let myChart4 = this.$echarts.init(this.$refs.Chart4);
    myChart4.setOption(this.option4);
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.handleResize();
      });
    });
  },
  methods: {
    typeData() {
      request.get("/api/data/typeSa").then((res) => {
        this.chart3 = res.data.company;
        this.chart7 = res.data.industry;
        this.initChart3();
        this.initChart7();
      });
    },
    initmap() {
      this.$mapboxgl.accessToken =
        "pk.eyJ1IjoiY2hlbmpxIiwiYSI6ImNrcWFmdWt2bjBtZGsybmxjb29oYmRzZzEifQ.mnpiwx7_cBEyi8YiJiMRZg";
      var map = new this.$mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/chenjq/cl010ychv001214pdpa5xyq5a",
        center: [105, 35],
        zoom: 3.5,
      });
 map.on("load", function () {
        map.addSource("heatDataSource", {
          type: "geojson",
          // "data": "./data/heatMapData.json",
          data: heatMapData,
        });
        map.addLayer({
          //此id可随意设置，但是要唯一
          id: "testdatalayer",
          //指定类型为热力图
          type: "heatmap",
          //指定数据来源，要和addSource中的id保持一致
          source: "heatDataSource",
          //最大显示等级
          maxzoom: 12,
          //设置绘制效果
          paint: {
            //通过mag属性的值来设置每一个点对热力图强度的贡献
            //数值在0~6之间线性变化时,热力图的强度从0~1进行线性变化
            "heatmap-weight": [
              "interpolate",
              ["linear"],
              ["get", "AVG_SALARY"],
              3,
              0,
              35,
              1,
            ],
            //根据地图的缩放级别来设置热力图的强度
            //缩放级别在0~9之间进行线性变化的时候，热力图的强度从1~3进行线性变化
            "heatmap-intensity": [
              "interpolate",
              ["linear"],
              ["zoom"],
              0,
              1,
              12,
              3,
            ],
            //根据密度来设置热力图颜色
            //密度在0~1之间线性变换时，颜色也跟随变换
            "heatmap-color": [
              "interpolate",
              ["linear"],
              ["heatmap-density"],
              0,
              "rgba(33,102,172,0)",
              0.3,
              "rgb(103,169,207)",
              0.6,
              "rgb(209,229,240)",
              0.9,
              "rgb(253,219,199)",
              1,
              "rgb(239,138,98)",
            ],
            //根据地图的缩放级别来设置热力图的半径
            //缩放级别在0~9之间进行线性变化的时候，热力图的半径从2~20进行线性变化
            "heatmap-radius": [
              "interpolate",
              ["linear"],
              ["zoom"],
              0,
              1,
              12,
              20,
            ],
            //设置热力图的透明度，在zoom处于7~9间将热力图逐渐的透明，在zoom大于9的时候完全透明
            "heatmap-opacity": [
              "interpolate",
              ["linear"],
              ["zoom"],
              10,
              1,
              12,
              0,
            ],
          },
        });
      });
      var navigationControl = new mapboxgl.NavigationControl();
      map.addControl(navigationControl, "top-left");
      map.addControl(new mapboxgl.FullscreenControl(), "top-right");
      function checkFullscreenSupport() {
        return !!(
          window.document.fullscreenEnabled ||
          window.document.mozFullScreenEnabled ||
          window.document.msFullscreenEnabled ||
          window.document.webkitFullscreenEnabled
        );
      }
      var scale = new mapboxgl.ScaleControl({
        maxWidth: 100,
        unit: "metric",
      });
      map.addControl(scale, "bottom-left");
      map.on("click", function (e) {
        console.log("点击");
      });
    },
    initChart1() {
      var myChart = echarts.init(document.getElementById("chart1"));
      myChart.setOption({
        grid: {
          top: "8%",
          left: "12%",
          right: "5%",
          bottom: "15%",
        },
        xAxis: {
          type: "category",
          splitLine: { show: false },
          data: ["北京", "南京", "上海", "杭州", "成都", "深圳", "苏州"],
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
        },
        yAxis: {
          type: "value",
          name: "千/月",
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
        },
        legend: {
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 12,
          },
        },
        color: "#1BFEFE",
        series: [
          {
            data: [18.5, 13.5, 17.5, 16, 13, 16.5, 14],
            type: "bar",
          },
        ],
      });
    },
    initChart3() {
      var myChart = echarts.init(document.getElementById("chart3"));
      let arr = [];
      this.chart3.forEach((element) => {
        arr.push({ value: element.value, name: element.name });
      });
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          left: "right",
          top: "top",
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
        },
        toolbox: {
          show: false,
        },
        series: [
          {
            name: "Radius Mode",
            type: "pie",
            radius: [20, 80],
            center: ["50%", "57%"],
            roseType: "radius",
            itemStyle: {
              borderRadius: 5,
            },
            label: {
              show: false,
            },
            emphasis: {
              label: {
                show: true,
              },
            },
            data: arr,
          },
        ],
      });
    },
    initChart2() {
      let myChart = this.$echarts.init(document.getElementById("chart2"));
      myChart.setOption({
        title: {
          text: "      职位平均薪资占比排行中,最高为前端总监,最低为测绘专业实习生",
          textStyle: {
            color: "rgba(255, 255, 255, .8)",
            fontSize: 12,
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c}%",
        },
        grid: {
          top: "25%", //距上边距
          left: "15%", //距离左边距
          right: "55%", //距离右边距
          bottom: "20%", //距离下边距
        },
        calculable: false,
        series: [
          {
            name: "矩形图",
            type: "treemap",
            radius: "85%",
            center: ["50%", "50%"],
            breadcrumb: false, //矩形图下的提示显示与否
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{b}:{c}%",
                  fontSize: 10,
                },
                borderWidth: 0,
              },
              emphasis: {
                label: {
                  show: true,
                },
              },
            },
            data: [
              {
                name: "前端总监",
                value: 80,
              },
              {
                name: "导航算法总监",
                value: 70.83,
              },
              {
                name: "副总经理(GIS)",
                value: 67.5,
              },
              {
                name: "IT总监",
                value: 60,
              },
              {
                name: "图像处理算法开发",
                value: 60,
              },
              {
                name: "Java后端开发工程师",
                value: 54,
              },
              {
                name: "前端研发",
                value: 50,
              },
              {
                name: "系统架构师",
                value: 50,
              },
              {
                name: "算法工程师",
                value: 45,
              },
              {
                name: "数据库高级研发工程师",
                value: 45,
              },
              {
                name: "地图前端研发工程师",
                value: 45,
              },
              {
                name: "GIS工程师",
                value: 40,
              },
              {
                name: "测绘专业一级专业总工",
                value: 37.5,
              },
              {
                name: "信号处理工程师",
                value: 33,
              },
              {
                name: "芯片前端设计工程师",
                value: 32,
              },
              {
                name: "IC设计工程师",
                value: 30,
              },
              {
                name: "地图定位工程师",
                value: 29,
              },
              {
                name: "C++开发工程师",
                value: 27,
              },
              {
                name: "3D前端开发工程师",
                value: 26,
              },
              {
                name: "GIS总监",
                value: 25.5,
              },
              {
                name: "Linux C++开发",
                value: 25,
              },
              {
                name: "MySQL数据库工程师",
                value: 22,
              },
              {
                name: "Oracle Database Developer",
                value: 21,
              },
              {
                name: "全球EC后端工程师",
                value: 20,
              },
              {
                name: "软件开发经理",
                value: 20,
              },
              {
                name: "运维工程师",
                value: 20,
              },
              {
                name: "高级.NET前端开发工程师",
                value: 20,
              },
              {
                name: "高级GIS开发工程师",
                value: 19.5,
              },
              {
                name: "高级python后端工程师",
                value: 19.5,
              },
              {
                name: "导航算法-构图定位",
                value: 19,
              },
              {
                name: "VUE前端架构师",
                value: 18,
              },
              {
                name: "Web前端开发工程师",
                value: 18,
              },
              {
                name: "自动驾驶算法工程师",
                value: 17,
              },
              {
                name: "Node.js后端工程师",
                value: 16,
              },
              {
                name: "无人机飞控算法工程师",
                value: 15,
              },
              {
                name: "研发经理",
                value: 15,
              },
              {
                name: "导航制导与控制工程师",
                value: 15,
              },
              {
                name: "三维gis开发工程师",
                value: 15,
              },
              {
                name: "地理信息平台研发工程师",
                value: 13,
              },
              {
                name: "arcgis二次开发",
                value: 12,
              },
              {
                name: "导航测试",
                value: 10,
              },
              {
                name: "数据库系统管理员",
                value: 9,
              },
              {
                name: "测量员/测绘员",
                value: 8,
              },
              {
                name: "UI设计师",
                value: 7,
              },
              {
                name: "Web前端实习生",
                value: 3.5,
              },
              {
                name: "测绘专业实习生",
                value: 3,
              },
            ],
          },
        ],
      });
    },
    initChart4() {
      for (var i = 0; i < this.plan_table.length; i++) {
        this.option4.xAxis.data.push(this.plan_table[i].month);

        this.option4.series[0].data.push(this.plan_table[i].qd);

        this.option4.series[1].data.push(this.plan_table[i].gis);

        this.option4.series[2].data.push(this.plan_table[i].sjk);
        this.option4.series[3].data.push(this.plan_table[i].hd);
        

        this.option4.yAxis[0].max = Math.ceil(this.plan_table[0].hd) + 2;
      }
    },
    wordCloudInti(wrapEl, data) {
      let myChart = echarts.init(wrapEl);
      var option = {
        tooltip: {
          show: true,
        },
        series: [
          {
            name: "热词",
            type: "wordCloud",
            sizeRange: [10, 35],
            rotationRange: [-20, 20],
            shape: "circle",
            left: "center",
            top: "center",
            width: "100%",
            height: "100%",
            gridSize: 7,
            textPadding: 0,
            autoSize: {
              enable: true,
              minSize: 4,
            },
            textStyle: {
              normal: {
                color: function () {
                  return (
                    "rgb(" +
                    [
                      Math.round(Math.random() * 250),
                      Math.round(Math.random() * 250),
                      Math.round(Math.random() * 250),
                    ].join(",") +
                    ")"
                  );
                },
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: "#333",
              },
            },
            data: data,
          },
        ],
      };
      myChart.setOption(option);
    },
    initChart7() {
      var myChart = echarts.init(document.getElementById("chart7"));
      let arr = [];
      this.chart7.forEach((element) => {
        arr.push({ value: element.value, name: element.name });
      });
      myChart.setOption({
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            center: ["50%", "60%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 1,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: arr,
          },
        ],
      });
    },
  },
};
</script>

<style scoped lang="less">
#salary {
  z-index: 1;
  position: fixed;
  width: 100%;
  height: calc(100% - 45px);
  .left {
    height: 100%;
    width: 25%;
    position: absolute;
    top: 0%;
    left: 3%;
    float: left;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: stretch;
    background: url("../../assets/img/fq/ptbg3.png");
    background-size: 100% 100%;
    .countdata {
      height: 85%;
      width: 100%;
      float: left;
      display: flex;
      flex-direction: column;
      align-items: center;
      .datasource {
        height: 13%;
        width: 90%;
        display: flex;
        .leftpt {
          margin-right: 2%;
          color: #fff;
        }
      }
      .count {
        height: 65%;
        width: 90%;
        margin: 1% 0%;
        display: flex;
        float: left;
        .total {
          height: 100%;
          width: 30%;
          margin-right: 5%;
          display: flex;
          flex-direction: column;
          background: linear-gradient(#1edaeb) left top no-repeat,
            linear-gradient(#1edaeb) left top no-repeat,
            linear-gradient(#1edaeb) right top no-repeat,
            linear-gradient(#1edaeb) right top no-repeat,
            linear-gradient(#1edaeb) left bottom no-repeat,
            linear-gradient(#1edaeb) left bottom no-repeat,
            linear-gradient(#1edaeb) right bottom no-repeat,
            linear-gradient(#1edaeb) right bottom no-repeat;
          background-size: 1px 10px, 10px 1px, 1px 10px, 10px 1px;
          align-items: center;
          .title {
            color: #44c5db;
          }
          span {
            color: #44c5db;
          }
        }
        .company {
          height: 100%;
          width: 30%;
          margin-right: 5%;
          display: flex;
          flex-direction: column;
          background: linear-gradient(#1edaeb) left top no-repeat,
            linear-gradient(#1edaeb) left top no-repeat,
            linear-gradient(#1edaeb) right top no-repeat,
            linear-gradient(#1edaeb) right top no-repeat,
            linear-gradient(#1edaeb) left bottom no-repeat,
            linear-gradient(#1edaeb) left bottom no-repeat,
            linear-gradient(#1edaeb) right bottom no-repeat,
            linear-gradient(#1edaeb) right bottom no-repeat;
          background-size: 1px 10px, 10px 1px, 1px 10px, 10px 1px;
          align-items: center;
          .title {
            color: #61ccbe;
          }
          span {
            color: #61ccbe;
          }
        }
        .position {
          height: 100%;
          width: 30%;
          display: flex;
          flex-direction: column;
          background: linear-gradient(#1edaeb) left top no-repeat,
            linear-gradient(#1edaeb) left top no-repeat,
            linear-gradient(#1edaeb) right top no-repeat,
            linear-gradient(#1edaeb) right top no-repeat,
            linear-gradient(#1edaeb) left bottom no-repeat,
            linear-gradient(#1edaeb) left bottom no-repeat,
            linear-gradient(#1edaeb) right bottom no-repeat,
            linear-gradient(#1edaeb) right bottom no-repeat;
          background-size: 1px 10px, 10px 1px, 1px 10px, 10px 1px;
          align-items: center;
          .title {
            color: #4c8de2;
          }
          span {
            color: #4c8de2;
          }
        }
        .title {
          height: 15%;
          width: 90%;
          margin: 5% 0%;
          align-items: center;
          font-size: 12pt;
        }
        .d {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 75%;
          width: 85%;
          background: url("../../assets/img/fq/bg6.png");
          background-size: 100% 100%;
          > span {
          }
        }
      }
    }
  }
  .main {
    height: 33.3%;
    width: 46.8%;
    position: absolute;
    float: left;
    bottom: 0%;
    left: 28.1%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: stretch;
    background: url("../../assets/img/fq/ptbg3.png");
    background-size: 100% 100%;
    .col-content {
      margin-bottom: 0.2%;
    }
  }
  .right {
    height: 100%;
    width: 25%;
    bottom: 0%;
    right: 0%;
    position: absolute;
    float: left;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: stretch;
    background: url("../../assets/img/fq/ptbg3.png");
    background-size: 100% 100%;
    // background: rgba(7, 41, 61, 0.637);
  }
}
#map {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.col-content {
  height: 100%;
  flex: 1;
  margin-bottom: 0;
  width: 100%;
  top: 1%;
  margin-bottom: 0.5%;
  background: url("../../assets/img/fq/buttonbg.png") no-repeat;
  background-size: 100% 100%;
  .row1chartcontent {
    height: 85%;
    width: 100%;
  }
}

.row1title {
  height: 15%;
  width: 100%;
  color: aliceblue;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2%;
  // background-color: rgba(26, 62, 83, 0.623);
  // background-color: #1b3147;
  .imgBK {
    width: 11%;
    height: 39%;
    background: url("../../assets/img/pt/pt_title.png") no-repeat;
    background-size: 100% 100%;
  }
  span {
    // color: rgb(115, 215, 228);
    color: #fff;
    font-size: 13pt;
    margin-left: 1%;
    margin-top: -0.5%;
  }
}
.row2title {
  height: 15%;
  width: 100%;
  color: aliceblue;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2%;
  // background-color: #1b3147;
  .imgBK {
    width: 5.5%;
    height: 38%;
    background: url("../../assets/img/pt/pt_title.png") no-repeat;
    background-size: 100% 100%;
  }
  span {
    // color: rgb(115, 215, 228);
    color: #fff;
    font-size: 13pt;
    margin-left: 0.5%;
    margin-top: -0.3%;
  }
}
.el-checkbox {
  color: #fff;
}
// /deep/.mapboxgl-ctrl-attrib-inner{
//   a{
//     color: transparent;
//   }
// }
</style>