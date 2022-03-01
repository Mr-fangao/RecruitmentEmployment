<template>
  <div class="com">
    <div id="map" />
    <div class="content">
      <div class="right">
        <div class="title">
          <span>客流分析</span>
        </div>
        <div class="crawling">
          <el-select v-model="value" placeholder="数据来源">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-date-picker v-model="date" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
        <el-button>一键爬取</el-button>
        <div class="space"></div>
        <div class="query">
          <el-input placeholder="请输入关键词" v-model="input" clearable>
          </el-input>
          <el-button>查询</el-button>
          <!-- <i slot="prefix" class="el-input__icon el-icon-search"></i> -->
        </div>
        <el-button>重置</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "feelmonitor",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "微博",
        },
        {
          value: "选项2",
          label: "小红书",
        },
        {
          value: "选项3",
          label: "马蜂窝",
        },
      ],
      value: "",
      date: "",
      input: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
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
        center: [110, 40],
        zoom: 4,
      });
    },
  },
};
</script>

<style scoped lang="less">
.com {
  position: fixed;
  height: 100%;
  width: 100%;
}
#map {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
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
    margin: 1%;
    height: 90%;
    width: 100%;
    margin-left: 0.5%;
    background: #14659467;
    border: 1px solid #0cf3f3;
    border-radius: 10px;
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
    .crawling {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 10px;
      .el-select {
        padding-right: 10px;
      }
    }
    .query {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 10px;
      .el-input {
        padding-right: 10px;
      }
    }
  }
}
</style>
