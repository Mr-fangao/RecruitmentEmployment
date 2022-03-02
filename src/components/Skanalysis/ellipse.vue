<template>
  <div class="com">
    <div id="map" />
    <div class="content">
      <div class="right">
        <div class="title">
          <span>标准差椭圆分析</span>
        </div>
        <div class="toppart">
          <span>数据时间:</span>
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="-"
            size="small"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
          <div class="maptool">
            <el-button>请求数据</el-button>
            <el-button>开始分析</el-button>
          </div>
        </div>
        <div class="bottompart"></div>
      </div>
    </div>
    <!-- <div id="map" /> -->
    <!-- <div class="mapTool1">
      <div class="IDW">标准差椭圆分析</div>
      <div class="DayPicContainer">
        <div class="DayPicTitle">数据日期</div>
        <el-date-picker
          class="DayPic"
          v-model="DateValue"
          type="date"
          placeholder="选择日期"
        ></el-date-picker>
      </div>
      <div class="IDWtoolContainer">
        <div class="GetMapValue1">请求数据</div>
        <div class="AnaMapValue2">开始分析</div>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "deviationellipse",
  data() {
    return {
      DateValue: new Date(),
      value1,
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

<style scoped lang="less">
#map {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.com {
  position: fixed;
  height: 100%;
  width: 100%;
}
.content {
  height: 100%;
  width: 20%;
  position: absolute;
  z-index: 100;
  top: 0%;
  right: 0.2%;
  display: flex;
  flex-direction: row;
  .right {
    height: 90%;
    width: 100%;
    margin-top: 3%;
    margin-right: 0.5%;
    background: url("../../assets/img/fq/bg.png");
    background-size: 100% 100%;
    // background: #14659467;
    // border: 1px solid #0cf3f3;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    .title {
      // flex: 0.5;
      margin-top: 5%;
      height: 7%;
      width: 100%;
      position: relative;
      left: 4%;
      background: url(../../assets/img/pt/pt_title1.png) no-repeat;
      background-size: 88% 50%;
      font-size: 16pt;
      > span {
        float: left;
        margin-left: 10%;
        font-size: 14pt;
        line-height: 20px;
        color: aliceblue;
        text-shadow: 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fff,
          0 0 30px #38e9e0, 0 0 40px #0cf3f3;
      }
    }
    .toppart {
      position: absolute;
      top: 10%;
      width: 100%;
      height: 30%;
      > span {
        width: 33%;
        height: 10%;
        margin-left: -44%;
        margin-top: 2%;
        border-left: 5px solid #0cf3f3;
        font-size: 12pt;
        line-height: 22px;
        color: aliceblue;
        position: absolute;
      }
      .maptool {
        position: absolute;
        top: 25%;
        left: 13%;
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
/deep/.el-input__inner {
  left: 20%;
  position: absolute;
  display: inline-block;
  -webkit-appearance: none;
  background: transparent;
  border-radius: 4px;
  border: 0px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: rgba(220, 225, 227, 0.96);
  // display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 33px;
  width: 100%;
  padding: 0 0 0 35px;
}
/deep/.el-date-editor .el-range-input {
  width: 30%;
  height: 60%;
  background: rgba(82, 173, 209, 0.3);
}
/deep/.el-button {
  
  background: rgba(11, 176, 241, 0.493);
  border: none;
  color: #ffffff;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 5px;
}
/deep/.el-button:focus,
.el-button:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
/deep/.el-range-editor--small .el-range__close-icon,
.el-range-editor--small .el-range__icon {
  line-height: 24px;
  color: transparent;
}
</style>
