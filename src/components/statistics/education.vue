<template>
  <div id="education">
    <div id="map" />
    <div class="left">
      <div class="col-content">
        <div class="row1title">
          <div class="imgBK"></div>
          <span>学历要求统计</span>
        </div>
        <div class="row1chartcontent" id="chart1"></div>
      </div>
      <div class="col-content">
        <div class="row1title">
          <div class="imgBK"></div>
          <span>学历平均薪资统计</span>
        </div>
        <div class="row1chartcontent" id="chart2" ref="Chart2"></div>
      </div>
      <div class="col-content">
        <div class="row1title">
          <div class="imgBK"></div>
          <span>行业学历统计</span>
        </div>
        <div class="row1chartcontent" id="chart3"></div>
      </div>
    </div>
    <div class="main">
      <!-- <div class="map">-->
      <div class="col-content">
        <div class="row2title">
          <div class="imgBK"></div>
          <span>城市学历要求年变化</span>
        </div>
        <div class="row1chartcontent" id="chart4" ref="Chart4"></div>
      </div>
    </div>
    <div class="right">
      <div class="col-content">
        <div class="row1title">
          <div class="imgBK"></div>
          <span>公司类型学历统计</span>
        </div>
        <div class="row1chartcontent" id="chart5"></div>
      </div>
      <div class="col-content">
        <div class="row1title">
          <div class="imgBK"></div>
          <span>城市学历统计</span>
        </div>
        <div class="row1chartcontent" id="chart6"></div>
      </div>
      <div class="col-content">
        <div class="row1title">
          <div class="imgBK"></div>
          <span>职位学历统计</span>
        </div>
        <div class="row1chartcontent" id="chart7"></div>
      </div>
    </div>
  </div>
</template>

<script>
import wordcloud from "../../assets/js/echarts-wordcloud-master/index";
import echarts from "echarts";
export default {
  name: "education",
  components: {
    wordcloud,
  },
  data() {
    return {
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
      // option: {
      //   tooltip: {
      //     trigger: "axis",
      //     formatter: (params) => {
      //       return (
      //         params[0].seriesName +
      //         ": " +
      //         params[0].data +
      //         "<br>" +
      //         params[1].seriesName +
      //         ": " +
      //         params[1].data +
      //         "%"
      //       );
      //     },
      //   },
      //   legend: {
      //     data: ["城市形象", "全国平均水平"],
      //   },
      //   xAxis: [
      //     {
      //       type: "category",
      //       data: [
      //         "交通",
      //         "住宿",
      //         "地理位置",
      //         "旅行体验",
      //         "景区环境",
      //         "景区设施",
      //         "服务",
      //         "饮食",
      //       ],
      //     },
      //   ],
      //   yAxis: [
      //     {
      //       splitLine: { show: false },
      //       type: "value",
      //       name: "数量",
      //       interval: 50,
      //       axisLabel: {
      //         formatter: "{value} ",
      //       },
      //     },
      //   ],
      //   series: [
      //     {
      //       name: "城市形象",
      //       type: "bar",
      //       /*设置柱状图颜色*/
      //       itemStyle: {
      //         normal: {
      //           color: function (params) {
      //             // build a color map as your need.
      //             var colorList = [
      //               "#fe4f4f",
      //               "#fead33",
      //               "#feca2b",
      //               "#fef728",
      //               "#c5ee4a",
      //               "#87ee4a",
      //               "#46eda9",
      //               "#47e4ed",
      //               "#4bbbee",
      //               "#7646d8",
      //               "#924ae2",
      //               "#C6E579",
      //               "#F4E001",
      //               "#F0805A",
      //               "#26C0C0",
      //             ];
      //             return colorList[params.dataIndex];
      //           },
      //           /*信息显示方式*/
      //           label: {
      //             show: true,
      //             position: "top",
      //             formatter: "{b}\n{c}",
      //           },
      //         },
      //       },
      //       data: [0.28, 0.278, 0.478, 0.637, 0.669, 0.369, 0.547, 0.372],
      //     },
      //     {
      //       name: "全国平均水平",
      //       yAxisIndex: 0, //这里要设置哪个y轴，默认是最左边的是0，然后1，2顺序来。
      //       type: "line",
      //       itemStyle: {
      //         /*设置折线颜色*/
      //         normal: {
      //           // color:'#c4cddc'
      //         },
      //       },
      //       data: [0.193, 0.178, 0.512, 0.683, 0.721, 0.358, 0.432, 0.498],
      //     },
      //   ],
      // },
      option4: {
        // title: {
        //   x: "150", // 水平安放位置，默认为左对齐，可选为：
        //   // 'center' ¦ 'left' ¦ 'right'
        //   // ¦ {number}（x坐标，单位px）
        //   y: "top",
        //   //textAlign: null
        //   backgroundColor: "rgba(0,0,0,0)",
        //   borderColor: "#ccc", // 标题边框颜色
        //   borderWidth: 0, // 标题边框线宽，单位px，默认为0（无边框）
        //   padding: 5, // 标题内边距，单位px，默认各方向内边距为5，
        //   itemGap: 10, // 主副标题纵向间隔，单位px，默认为10，
        //   textStyle: {
        //     fontSize: 18,
        //     fontWeight: "bolder",
        //     color: "#ff6666", // 主标题文字颜色
        //   },
        //   text: "全省大中修资金统计",
        // },
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
          x: "center",
          y: "30",
          borderColor: "#6699FF", //边框颜色
          textStyle: {
            color: "#1e90ff", // 图例文字颜色
          },
          data: ["大修金额", "中修沥青砼金额", "预防性养护金额", "金额总计"],
        },
        calculable: true,
        xAxis: {
          data: [],
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
            min: "0",
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
          x: 50,
          y: 30,
          x2: 40,
          y2: 60,
        },
        series: [
          {
            type: "line",
            name: "大修金额",
            data: [],
          },
          {
            type: "line",
            name: "中修沥青砼金额",
            data: [],
          },
          {
            type: "line",
            name: "预防性养护金额",
            data: [],
          },
          {
            type: "line",
            name: "金额总计",
            data: [],
          },
        ],
      },
      plan_table: [
        {
          xxx: "1",
          d: "200",
          z: "300",
          y: "400",
          sum: "500",
        },
        {
          xxx: "2",
          d: "100",
          z: "400",
          y: "50",
          sum: "500",
        },
        {
          xxx: "3",
          d: "150",
          z: "410",
          y: "250",
          sum: "500",
        },
        {
          xxx: "4",
          d: "200",
          z: "450",
          y: "350",
          sum: "500",
        },
      ],
    };
  },
  mounted() {
    this.initmap();
    // this.wordCloudInti(this.$refs.cloudEl, this.cloudData);
    this.initChart1();
    this.initChart2();
    this.initChart3();
    this.initChart4();
    let myChart4 = this.$echarts.init(this.$refs.Chart4);
    myChart4.setOption(this.option4);
    this.initChart5();
    this.initChart6();
    this.initChart7();
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.handleResize();
      });
    });
  },
  methods: {
    initmap() {
      this.$mapboxgl.accessToken =
        "pk.eyJ1IjoiY2hlbmpxIiwiYSI6ImNrcWFmdWt2bjBtZGsybmxjb29oYmRzZzEifQ.mnpiwx7_cBEyi8YiJiMRZg";
      var map = new this.$mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/chenjq/cl010ychv001214pdpa5xyq5a",
        center: [105, 35],
        zoom: 3.5,
      });
    },
    initChart1() {
      var myChart = echarts.init(document.getElementById("chart1"));
      myChart.setOption({
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "2%",
          left: "center",
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 12,
          },
        },
        series: [
          {
            type: "pie",
            center: ["50%", "55%"],
            radius: ["30%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "26",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "博士" },
              { value: 735, name: "硕士" },
              { value: 580, name: "本科" },
              { value: 484, name: "专科" },
              { value: 300, name: "无需" },
            ],
          },
        ],
      });
    },
    initChart3() {
      var myChart = echarts.init(document.getElementById("chart3"));
      myChart.setOption({
        grid: {
          right: "4%",
          top: "12%",
          height:"55%",
          width:"85%",
        },
        legend: {
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 12,
          },
        },
        tooltip: {},
        dataset: {
          dimensions: ["product", "博士", "硕士", "本科", "专科", "高中及以下"],
          source: [
            { product: "计算机软件", 博士: 43.3, 硕士: 85.8, 本科: 93.7 },
            { product: "航天", 博士: 83.1, 硕士: 73.4, 本科: 55.1 },
            { product: "互联网", 博士: 86.4, 硕士: 65.2, 本科: 82.5 },
            { product: "机械", 博士: 72.4, 硕士: 53.9, 本科: 39.1 },
          ],
        },
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
        },
        yAxis: {
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
      });
    },
    initChart7() {
      let myChart = this.$echarts.init(document.getElementById("chart7"));
      myChart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        legend: {
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 12,
          },
        },
        grid: {
          right: "5%",
          top: "14%",
          height:"63%",
          width:"92%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
        },
        yAxis: {
          type: "category",
          data: ["webgis", "", "Wed", "Thu", "Fri", "Sat", "Sun"],
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
        },
        series: [
          {
            name: "博士",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [320, 302, 301, 334, 390, 330, 320],
          },
          {
            name: "硕士",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "本科",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "大专及以下",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [150, 212, 201, 154, 190, 330, 410],
          },
          {
            name: "无需",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320],
          },
        ],
      });
    },
    initChart4() {
      for (var i = 0; i < this.plan_table.length; i++) {
        this.option4.xAxis.data.push(this.plan_table[i].xxx);
        //大修金额总计
        this.option4.series[0].data.push(this.plan_table[i].d);
        //中修金额
        this.option4.series[1].data.push(this.plan_table[i].z);
        //预防性养护金额合计
        this.option4.series[2].data.push(this.plan_table[i].y);
        //金额总计
        this.option4.series[3].data.push(this.plan_table[i].sum);
        //Y轴最大值的设置：向上取整并家500
        this.option4.yAxis[0].max = Math.ceil(this.plan_table[0].sum) + 500;
      }
    },
    initChart2() {
      var myChart = echarts.init(document.getElementById("chart2"));
      myChart.setOption({
        grid: {
          height: "75%",
          width:"80%",
          top: "5%",
          right: "5%",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
          data: ["博士", "硕士", "本科", "大专", "高中", "无需",],
        },
        yAxis: {
          type: "value",
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {
              color: "rgb(115, 215, 228)",
            },
            lineStyle: {
              color: "rgb(115, 215, 228)",
            },
          },
        ],
      });
    },
    // handleResize() {
    //   this.myChart5 && this.myChart5.resize();
    // },
    initChart5() {
      var myChart = echarts.init(document.getElementById("chart5"));
      myChart.setOption({
        color: ["#67F9D8", "#FFE434", "#56A3F1", "#FF917C"],
        // title: {
        //   text: "Customized Radar Chart",
        // },
        legend: {
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 12,
          },
        },
        radar: [
          {
            indicator: [
              { text: "北京" },
              { text: "上海" },
              { text: "杭州" },
              { text: "深圳" },
              { text: "苏州" },
            ],
            center: ["50%", "60%"],
            radius: 70,
            startAngle: 90,
            splitNumber: 4,
            shape: "circle",
            axisName: {
              formatter: "【{value}】",
              color: "#428BD4",
            },
            splitArea: {
              areaStyle: {
                color: ["#77EADF", "#26C3BE", "#64AFE9", "#428BD4"],
                shadowColor: "rgba(0, 0, 0, 0.2)",
                shadowBlur: 10,
              },
            },
            axisLine: {
              lineStyle: {
                color: "rgba(211, 253, 250, 0.8)",
              },
            },
            splitLine: {
              lineStyle: {
                color: "rgba(211, 253, 250, 0.8)",
              },
            },
          },
        ],
        series: [
          {
            type: "radar",
            emphasis: {
              lineStyle: {
                width: 4,
              },
            },
            data: [
              {
                value: [100, 8, 0.4, -80, 2000],
                name: "博士",
              },
              {
                value: [60, 5, 0.3, -100, 1500],
                name: "硕士",
                areaStyle: {
                  // color: "rgba(255, 228, 52, 0.6)",
                },
              },
              {
                value: [80, 6, 0.8, -10, 1800],
                name: "本科",
                areaStyle: {
                  // color: "rgba(255, 228, 52, 0.6)",
                },
              },
              {
                value: [60, 5, 0.3, -100, 1500],
                name: "大专及以下",
                areaStyle: {
                  // color: "rgba(255, 228, 52, 0.6)",
                },
              },
              {
                value: [60, 5, 0.3, -100, 1500],
                name: "无需",
                areaStyle: {
                  // color: "rgba(255, 228, 52, 0.6)",
                },
              },
            ],
          },
        ],
      });
    },
    // wordCloudInti(wrapEl, data) {
    //   let myChart = echarts.init(wrapEl);
    //   var option = {
    //     tooltip: {
    //       show: true,
    //     },
    //     series: [
    //       {
    //         name: "热词",
    //         type: "wordCloud",
    //         sizeRange: [10, 35],
    //         rotationRange: [-20, 20],
    //         shape: "circle",
    //         left: "center",
    //         top: "center",
    //         width: "100%",
    //         height: "100%",
    //         gridSize: 7,
    //         textPadding: 0,
    //         autoSize: {
    //           enable: true,
    //           minSize: 4,
    //         },
    //         textStyle: {
    //           normal: {
    //             color: function () {
    //               return (
    //                 "rgb(" +
    //                 [
    //                   Math.round(Math.random() * 250),
    //                   Math.round(Math.random() * 250),
    //                   Math.round(Math.random() * 250),
    //                 ].join(",") +
    //                 ")"
    //               );
    //             },
    //           },
    //           emphasis: {
    //             shadowBlur: 10,
    //             shadowColor: "#333",
    //           },
    //         },
    //         data: data,
    //       },
    //     ],
    //   };
    //   myChart.setOption(option);
    // },
    initChart6() {
      var myChart = echarts.init(document.getElementById("chart6"));
      const city = [
        "北京","11a",
        "12p",
        "上海","1p",
        "2p",
        "南京","3p",
        "4p",
        "深圳","5p",
        "6p",
        "重庆","7p",
        "8p",
        "杭州","7p",
        "8p",
        "广东","7p",
        "8p",
        "成都","7p",
        "8p",
        "郑州",
        "苏州",
      ];
      const days = [
        "博士",
        "硕士",
        "本科",
        "大专",
        "高中",
       "高中以下", 
        "无需",
        
      ];

      // prettier-ignore
      const data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]]
    .map(function (item) {
        return [item[1], item[0], item[2] || '-'];
    });
      myChart.setOption({
        tooltip: {
          position: "top",
        },
        grid: {
          height: "60%",
          width:"85%",
          top: "5%",
          right: "2%",
        },
        xAxis: {
          type: "category",
          data: city,
          splitArea: {
            show: true,
          },
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
        },
        yAxis: {
          type: "category",
          data: days,
          splitArea: {
            show: true,
          },
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
        },
        visualMap: {
          min: 0,
          max: 30,
          calculable: true,
          orient: "horizontal",
          left: "center",
          bottom: "5%",
        },
        series: [
          {
            type: "heatmap",
            data: data,
            label: {
              show: true,
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
    },
  },
};
</script>

<style scoped lang="less">
#education {
  z-index: 1;
  position: fixed;
  width: 100%;
  height: 100%;
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
  }
  .main {
    // #map{
    //   width: 100%;
    //   height: 66.6%;
    // }
    // height: 100%;
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
</style>
