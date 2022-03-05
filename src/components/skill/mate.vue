<template>
  <div class="mate">
    <div class="left">
      <div class="hd">
        <span>岗位技能匹配关系图</span>
      </div>
      <div id="Chart1"></div>
    </div>

    <div class="right">
      <div class="pt pt1">
        <div class="hd">
          <span>技能top10</span>
        </div>
        <div id="chart2" :style="{ width: '100%', height: '100%' }"></div>
        <!-- <el-table
          style="width: 90%; align: center; margin-left: 5%"
          :row-style="getRowClass"
          :header-row-style="getRowClass"
          :header-cell-style="getRowClass"
          :data="tableData"
          :cell-style="{ padding: '2px 0' }"
        >
          <el-table-column prop="top" label="排名" width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="名称"
            :show-overflow-tooltip="true"
          >
          </el-table-column>
          <el-table-column
            prop="count"
            label="频数"
            width="120"
            :show-overflow-tooltip="true"
          >
          </el-table-column>
        </el-table> -->
      </div>
      <div class="pt pt2">
        <div class="hd">
          <span>技能要求月变化图</span>
        </div>
        <div id="chart3" :style="{ width: '100%', height: '100%' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
// const mapboxgl = require("mapbox-gl");
import echarts from "echarts";
// import 'echarts/theme/macarons.js';
// import 'echarts-wordcloud/dist/echarts-wordcloud.js';
// import 'echarts-wordcloud/dist/echarts-wordcloud.min.js';
// import 'jquery/dist/jquery.min.js';
// let echarts = require("echarts/lib/echarts");
// require("echarts/lib/chart/graph");
// require("echarts/lib/component/force");
// require("echarts/lib/component/title");
// require("echarts/lib/component/legend");
export default {
  name: "mate",
  data() {
    return {
      tableData: [
        {
          top: "1",
          name: "",
          count: "",
        },
        {
          top: "2",
          name: "",
          count: "",
        },
        {
          top: "3",
          name: "",
          count: "",
        },
        {
          top: "4",
          name: "",
          count: "",
        },
        {
          top: "5",
          name: "",
          count: "",
        },
        {
          top: "6",
          name: "",
          count: "",
        },
        {
          top: "7",
          name: "",
          count: "",
        },
        {
          top: "8",
          name: "",
          count: "",
        },
        {
          top: "9",
          name: "",
          count: "",
        },
        {
          top: "10",
          name: "",
          count: "",
        },
      ],
    };
  },
  mounted() {
    this.showct1();
    this.showct2();
    // this.fetchData1(1);
    // this.fetchData2(1);
    // this.loadList();
    // this.initmap();
  },
  methods: {
    getRowClass({ row, column, rowIndex, columnIndex }) {
      return "background:#3f6981a4;color:#FFF;";
    },
    // fetchData1(ct1) {
    //   var code = JSON.stringify(ct1);
    //   console.log(code);
    //   request.post("/api//data/salaryRe", { code }).then((res) => {
    //     this.chartdata1 = res.data[ct1 - 1];
    //     console.log(res.data[ct1 - 1]);
    //     //解决 echarts动态渲染数据图形不生效问题:获取数据但不渲染，执行下一个循环才将数据渲染进echarts
    //     this.$nextTick(() => {
    //       this.showct1();
    //     });
    //   });
    // },
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
          name: "单位：个",
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
            // data: this.chartdata1,
            data: [820, 932, 901, 934, 1290, 1330, 1320,2000],
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
    showct1() {
      let myChart1 = echarts.init(document.getElementById("Chart1"));
      var baseName = "网络招聘";
      var option;
      var chartData = {
        WebGIS工程师: [
          "算 法",
          "hadoop",
          "编程语言",
          "WebGIS",
          "C/C++",
          "gis",
          "HTML/CSS",
          "JS",
          "数据库",
          "ArcGIS API for JS",
          "ArcSDE",
          "Vue",
          ".net",
          "Bootstrap",
          "leaflet",
          "Java",
          "MapBox",
          "遥感",
          "JQuery",
          "SpringBoot",
          "JSP",
          "React",
          "SuperMap",
          "文档撰写",
          "沟通合作",
          "LayUI",
          "EasyUI",
          "CesiumJS",
          "发散思维",
          "Android/IOS",
          "解决方案",
          "Skyline",
          "熟悉软件使用",
        ],
        GIS开发工程师: [
          "算法研究",
          "JavaScript",
          "前端框架",
          "数据库技术",
          "HTML/CSS(3)/JS",
          "QT",
          "PHP",
          "jsp",
          "Android",
          "SQL",
          "ArcGIS",
          "ArcMap",
          "JavaEE",
          "CASS",
          "AutoCAD",
          "二次开发",
          "OpenLayers",
          "地图前端",
          "ENVI",
          "遥感技术",
          "QGIS",
          ".net/C#",
          "PostGIS",
          "Cesium",
          "Oracle",
          "MySQL",
          "MapGIS",
          "软件开发能力",
          "技术方案",
          "Spring框架技术",
          "ArcGIS Server",
          "GeoServer",
          "mapbox",
          "Leaflet",
          "GIS软件",
        ],
        "C++研发工程师": [
          "算法开发",
          "C++编程",
          "底层开发",
          "javascript",
          "webgis",
          "地理信息系统",
          "oracle",
          "mysql",
          "osg",
          "openGL",
          "Windows/Linux",
          "OGRE",
          "CAD",
          "arcgis系列产品",
          "gdal",
          "GIS软件使用能力",
          "主流前端技术",
          "vue/react/angular",
          "SQL server/MySQL/Oracle/mongoDB",
          "数据处理技术",
        ],
        Java开发工程师: [
          "java/javaEE",
          "GIS/地理信息",
          "DataBase技术",
          "MyBatis",
          "SpringMVC/SpringBoot",
          "bootstrap",
          "android/ios",
          "windows/Linux",
          "opengl",
          "html/CSS/js",
          "VS Code",
          "Jsp",
          "sql Server",
          "ORACLE",
          "MYSQL",
          "mongoDB",
          "TomCAT",
          "VUE",
          "argis/arcmap/arcserver/arcpy",
          "arcgis api",
          "开发技术强",
          "数据处理能力",
        ],
        测绘工程师: [
          "测量仪器",
          "数据处理",
          "地图制图",
          "cad",
          "ArcGIS/ArcMap/...",
          "规划",
          "外业",
          "工作认真,吃苦耐劳",
          "PS",
          "Cass",
          "数据入库",
          "经纬仪",
          "全站仪",
          "摄影测量",
          "航测",
          "土地资源管理",
          "地信",
          "Office",
          "遥 感",
          "RTK",
        ],
        三维GIS开发: [
          "三维GIS",
          "ArcGIS API开发",
          "cesium",
          "WebGL",
          "Echarts",
          "html",
          "css(3)",
          "Js",
          "Geoserver",
          "jquery",
          "算法",
          "Leafletjs",
          "ORACLE/MYSQL",
          "sql server/mongoDB/...",
          "软件应用与开发",
          "AE开发",
          "数据处理与入库",
        ],
        大数据分析: [
          "云计算/Hadoop",
          "数 据 库",
          "Spark",
          "Redis",
          "数据分析",
          " webgl",
          "git",
          "TensorFlow",
          "可视化",
          "postgresql",
        ],
        GIS制图: [
          "熟练地图前端",
          "三维",
          "arcgis api4.x",
          "arcmap",
          "supermap",
          "mapgis",
          "专题制图",
          "ArcGIS Pro",
          "ArcPy",
          "autocad",
          "前端",
          " Photoshop",
          "Erdas",
          "envi",
          "测量",
          "Qgis",
        ],
        GIS数据处理: [
          "gis软件",
          "python",
          "envi/erdas/遥感解译",
          "mapgis/qgis",
          "hadoop/spark",
          "数据库应用",
          "细心与效率",
        ],
        遥感工程师: [
          "遥感/遥感解译",
          "Envi",
          "ERDAS",
          "Arcmap",
          "qgis/mapgis",
          "摄影测量/航测",
          "数据编辑与处理",
          "arcpy",
          "Supermap",
          "JS API for ArcGIS",
          "IDL",
          "C++",
        ],
      };
      var datas = [
        {
          name: baseName || "",
          draggable: true,
        },
      ];
      var lines = [];
      var categoryIdx = 0;
      var keyIndex = 0;
      var dataIndex = 0;
      $.each(chartData, function (key, values) {
        keyIndex = dataIndex;
        datas.push({
          name: key,
          category: categoryIdx,
          draggable: true,
        });
        keyIndex++;
        dataIndex++;
        lines.push({
          source: 0,
          target: keyIndex,
          value: "",
        });
        $(values).each(function (idx, val) {
          datas.push({
            name: val,
            category: categoryIdx,
            draggable: true,
          });
          dataIndex++;
          lines.push({
            source: keyIndex,
            target: dataIndex,
            value: "",
          });
        });
        categoryIdx++;
      });
      var option = {
        // title: {
        //   // text: "岗位技能匹配关系图",
        //   left: "center",
        //   top: "2.5%",
        //   textStyle: { fontSize: 25 },
        // },
        tooltip: {},
        animationDurationUpdate: 2500,
        label: { normal: { show: true, textStyle: { fontSize: 12 } } },
        series: [
          {
            type: "graph",
            layout: "force",
            symbolSize: 35,
            legendHoverLink: true,
            focusNodeAdjacency: true,
            roam: true,
            label: {
              normal: {
                show: true,
                position: "inside",
                textStyle: { fontSize: 12 },
              },
            },
            legend: { tooltip: { show: true } },
            force: { repulsion: 65 },
            edgeSymbolSize: [4, 50],
            edgeLabel: {
              normal: {
                show: true,
                textStyle: { fontSize: 10 },
                formatter: "{c}",
              },
            },
            categories: [
              { value: 10, itemStyle: { normal: { color: "#00ff7f" } } },
              { itemStyle: { normal: { color: "#0055ff" } } },
              { itemStyle: { normal: { color: "#ffaa00" } } },
              { itemStyle: { normal: { color: "#ff55ff" } } },
              { itemStyle: { normal: { color: "#e26691" } } },
              { itemStyle: { normal: { color: "#79dae2" } } },
              { itemStyle: { normal: { color: "#2fffff" } } },
              { itemStyle: { normal: { color: "#aaff7f" } } },
              { itemStyle: { normal: { color: "#ffaa7f" } } },
              { itemStyle: { normal: { color: "#fab452" } } },
            ],
            data: datas,
            links: lines,
            lineStyle: { normal: { opacity: 0.9, width: 1, curveness: 0 } },
          },
        ],
      };
      myChart1.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
.mate {
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  .left {
    // position: absolute;
    // top: 0px;
    // margin-left: 3%;
    height: 92%;
    width: 60%;
    display: flex;
    flex-direction: column;
    margin: 1% 1% 1% 3%;
    .hd {
      display: flex;
      width: 42%;
      margin: 0px 0px 10px 10px;
      height: 28px;
      background: url(../../assets/img/pt/pt_title1.png) no-repeat;
      background-size: 100% 100%;
      span {
        margin-left: 9%;
        line-height: 30px;
        font-size: 18px;
        color: #fff;
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff,
          0 0 40px #38e9e0, 0 0 70px #0cf3f3;
      }
    }
    #Chart1 {
      width: 100%;
      height: 100%;
    }
  }
}

.right {
  height: 92%;
  width: 40%;
  float: left;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  .pt1 {
    flex: 1.2;
    el-table {
      margin-left: 10%;
    }
  }
  .pt2 {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    .echart {
      height: calc(100% - 28px);
      width: 100%;
      display: flex;
      flex-direction: row;
      .select {
        position: relative;
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
  }
  #Chart2 {
    width: 100%;
    height: 100%;
  }
}
.pt {
  flex: 1;
  width: 100%;
  height: 100%;
  background: url(../../assets/img/pt/ptbg.png) no-repeat;
  background-size: 100% 100%;
  .hd {
    display: flex;
    width: 65%;
    margin: 3%;
    height: 28px;
    background: url(../../assets/img/pt/pt_title1.png) no-repeat;
    background-size: 100% 100%;
    span {
      margin-left: 32px;
      line-height: 30px;
      font-size: 18px;
      color: #fff;
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #38e9e0,
        0 0 70px #0cf3f3;
    }
  }
}

/deep/.el-table tr {
  background-color: #3f5c6d2c;
  color: #fff;
}
/deep/.el-table tbody tr:hover > td {
  background-color: #09e8f02c !important;
}
/deep/ .el-table__cell {
  text-align: center;
  padding: 0px;
}
/deep/.el-table::before {
  background-color: transparent;
}
/deep/.el-overlay {
  background-color: rgba(255, 255, 255, 0.02);
}
/deep/.el-table,
.el-table__expanded-cell {
  background-color: #3f5c6d2c;
}
/deep/.el-table td.el-table__cell,
/deep/.el-table th.el-table__cell.is-leaf {
  border: transparent !important;
}
</style>