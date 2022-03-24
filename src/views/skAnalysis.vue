<template>
  <div id="feelings">
    <div id="map" />
    <div class="content">
      <keep-alive>
        <component :is="comp" v-show="isShow"></component>
      </keep-alive>
    </div>
    <div class="main">
      <div class="right">
        <div class="mutual">
          <el-row :gutter="20">
            <el-col :span="8"><span>空间尺度:</span></el-col>
            <el-col :span="16">
              <div class="grid-content bg-specially">
                <div class="tab">
                  <el-select v-model="value1" clearable placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value1"
                      :label="item.label"
                      :value1="item.value1"
                    >
                    </el-option>
                  </el-select>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8"><span>时间尺度:</span></el-col>
            <el-col :span="16">
              <div class="grid-content bg-specially">
                <div class="tab">
                  <el-date-picker
                    v-model="value2"
                    type="monthrange"
                    range-separator="至"
                    start-placeholder="开始月份"
                    end-placeholder="结束月份"
                  >
                  </el-date-picker>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12"><el-button>一键爬取</el-button></el-col>
            <el-col :span="12"><el-button>开始分析</el-button> </el-col>
          </el-row>
        </div>
      </div>
      <div class="bottompart"></div>
    </div>
  </div>
</template>

<script>
// import deviationellipse from "../components/Skanalysis/ellipse.vue";
// import feelmonitor from "../components/Skanalysis/feelmonitor.vue";
export default {
  // components: { feelmonitor, deviationellipse },
  name: "skAnalysis",
  data() {
    return {
      isShow: true,
      // DateValue: new Date(),
      value1: "",
      value2: "",
      options: [
        {
          value1: "选项1",
          label: "省份",
        },
        {
          value1: "选项2",
          label: "城市",
        },
      ],
    };
  },
  mounted() {
    this.initmap();
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
  },
};
</script>
<style>
.el-picker-panel {
  background: #0d1f30;
  border: 1px solid #4a8faabd;
  font-size: 8pt;
  text-align: center;
  line-height: 25px;
  border-radius: 5px;
  color: #fff;
}
.el-date-range-picker__content.is-left {
  border-right: 1px solid #909399da;
}
.el-date-table td.next-month,
.el-date-table td.prev-month {
  color: #909399;
}
.el-date-table th {
  color: #fff;
}
.el-date-range-picker__header {
  color: #fff;
}
.el-date-table td.in-range div,
.el-date-table td.in-range div:hover,
.el-date-table.is-week-mode .el-date-table__row.current div,
.el-date-table.is-week-mode .el-date-table__row:hover div {
  background-color: #4a8faabd;
}
.el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background-color: #3eb7c738;
}
.el-picker-panel__icon-btn {
  color: #fff;
}
.el-select-dropdown {
  background-color: #0d1f30;
}
.el-select-dropdown__item {
  color: #fff;
}
.el-date-editor .el-range-separator {
  width: 10%;
  color: #fff;
}
</style>
<style lang="less" scoped>
#feelings {
  position: fixed;
  width: 100%;
  height: 100%;
}
#map {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.content {
  position: absolute;
  top: 0;
  z-index: 9999;
  height: 100%;
  width: 100%;
}
.main {
  height: 92%;
  width: 23%;
  position: absolute;
  z-index: 100;
  top: 1%;
  right: 0.2%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #04111d94;
  border-radius: 20px;
  background: url("../assets/img/fq/ptbg1.png") no-repeat;
  background-size: 100% 100%;
  .right {
    height: 30%;
    width: 94%;
    margin-top: 4%;
    display: flex;
    flex-direction: column;
     align-items: center;
    flex-wrap: nowrap;
    justify-content: flex-start;
    .mutual {
      display: flex;
      flex: 1;
      float: left;
      flex-direction: column;
      justify-content: center;
      width: 98%;
      color: #fff;
      margin: 3% 0%;
      background: linear-gradient(#1edaeb) left top no-repeat,
        linear-gradient(#1edaeb) left top no-repeat,
        linear-gradient(#1edaeb) right top no-repeat,
        linear-gradient(#1edaeb) right top no-repeat,
        linear-gradient(#1edaeb) left bottom no-repeat,
        linear-gradient(#1edaeb) left bottom no-repeat,
        linear-gradient(#1edaeb) right bottom no-repeat,
        linear-gradient(#1edaeb) right bottom no-repeat;
      //linear-gradient(to left, #f00, #f00) right bottom no-repeat;//四个角的边框 to left 代表颜色渐变的方向
      background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px;
      .grid-content {
        border-radius: 4px;
        min-height: 42px;
      }
      .bg-specially {
        height: 100%;
        // width: 60%;
        .labelcontent {
          display: flex;
          width: 100%;
          padding: 2% 0%;
          line-height: 25px;
          flex-wrap: wrap;
          > span {
            font-size: 10pt;
            color: #c5d4e6;
            // margin-left: -19%;
          }
          .chooselabel {
            background: #8ae5e54a;
            margin-left: 2%;
            margin-bottom: 1%;
            border: 1px solid #ffffff40;
            font-size: 8pt;
            text-align: center;
            line-height: 25px;
            border-radius: 5px;
            cursor: pointer;
            // margin: 1% 1% 1% 1% ;
          }
        }
      }
      .tab {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        > span {
          position: absolute;
          top: 64%;
          left: 39%;
          color: #a7c7c7f0;
          font-size: 10pt;
        }
        /deep/.el-input {
          line-height: 32px;
        }
        /deep/.el-input__inner {
          background: #c3e3e72b;
          border-radius: 4px;
          border: 1px solid #3eb7c738;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          color: rgba(220, 225, 227, 0.96);
          font-size: inherit;
          height: 32px;
          // line-height: 90px;
          width: 100%;
          padding: 0px;
          // margin-top: 2%;
        }
        /deep/.el-range-editor .el-range-input {
          height: 28px;
          justify-items: center;
          background: #c3e3e72b;
          border-radius: 4px;
          border: 1px solid #3eb7c738;
          color: #fff;
        }
      }
    }
    .bottompart {
      position: absolute;
      bottom: 9%;
      width: 100%;
      height: 50%;
    }
  }
}
/deep/.el-row {
  width: 100%;
  color: #fff;
  font-size: 12pt;
  text-align: center;
  flex-direction: row;
  // margin-left: 0% !important;
  // margin-right: 0% !important;
  // margin-bottom: 0px;
  margin-bottom: 2%;
  &:last-child {
    margin-bottom: 0;
  }
}
/deep/.el-col {
  border-radius: 4px;
  padding-left: 0% !important;
  padding-right: 0% !important;
}
/deep/.el-button {
  // background: rgba(11, 176, 241, 0.493);
  background: url("../assets/img/fq/wggl_tab.png");
  background-size: 100% 100%;
  border: none;
  color: #ffffff;
  // padding: 12px 20px;
  font-size: 14px;
  border-radius: 5px;
}
/deep/.el-button:focus,
.el-button:hover {
  color: #1edaeb;
}
</style>
