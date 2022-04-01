<template>
  <div id="mate">
    <transition name="fade">
      <loading v-if="isLoading" :state="state"></loading>
    </transition>
    <div class="mapcontent">
      <keep-alive>
        <component :is="comp" v-show="isShow"></component>
      </keep-alive>
    </div>
    <div class="right">
      <div class="he">
        <div class="prompt">
          <span
            >请您输入个人技能和城市进行技能-职位匹配，
            注意：技能为必选项，且技能词输入不能超过三个。
          </span>
        </div>
        <div class="mutual">
          <el-row :gutter="20">
            <el-col :span="8"><span>个人技能:</span></el-col>
            <el-col :span="16">
              <div class="grid-content bg-specially">
                <div class="tab">
                  <el-input
                    v-model="input"
                    placeholder=" 输入内容或点击标签"
                  ></el-input>
                  <div class="labelcontent">
                    <span>输入示例:</span>
                    <div
                      class="chooselabel"
                      v-for="(item, i) in labellist"
                      :key="i"
                      @click="getLabel(item.name)"
                    >
                      {{ item.name }}
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8"><span>城市选择:</span></el-col>
            <el-col :span="16">
              <div class="grid-content bg-specially">
                <div class="tab">
                  <el-input v-model="input1" placeholder=" 输入内容"></el-input>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12"
              ><el-button @click="mate()">开始匹配</el-button></el-col
            >
            <el-col :span="12"
              ><el-button @click="clear()">重置选择</el-button>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="main">
        <div class="title"><span>职位匹配结果</span></div>
        <div class="table">
          <el-table
            ref="interfaceTable"
            :data="tableCityData"
            stripe
            highlight-current-row
            class="“customer-table”"
          >
            <el-table-column
              prop="company"
              label="公司名称"
              :show-overflow-tooltip="true"
            >
            </el-table-column>
            <el-table-column
              prop="position"
              label="职位名称"
              :show-overflow-tooltip="true"
            >
            </el-table-column>
            <el-table-column prop="detail" label="定位" width="60">
              <template slot-scope="scope">
                <el-button
                  type="text"
                  @click.native.stop="flyToLocation(scope.row.x, scope.row.y)"
                  >定位</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Bus from "../assets/js/bus.js";
import request from "../../utils/request";
import loading from "../../components/loading.vue";
import skillpointgather from "../../components/thememap/skillpointgather.vue";
import wordcloud from "../../assets/js/echarts-wordcloud-master/index";
// import echarts from "echarts";
// const mapboxgl = require("mapbox-gl");
export default {
  name: "mate",
  components: {
    loading,
    wordcloud,
    skillpointgather,
  },
  data() {
    return {
      //动画加载
      state: "",
      isLoading: false,
      //地图切换
      index: 1,
      comp: "skillpointgather",
      isShow: true,
      //示例
      labellist: [
        { id: 1, name: "WebGIS" },
        { id: 2, name: "ArcGIS" },
        { id: 3, name: "SQLSever" },
      ],
      input: "",
      input1: "",
      tableCityData: [
        // { company: "北京易伟航科技有限公司", position: "GIS软件工程师" },
        // { company: "杭州中房信息科技有限公司", position: "高级GIS开发工程师" },
        // { company: "上海耀斑信息科技有限公司", position: "高级GIS开发工程师" },
      ],
    };
  },
  mounted() {
    // this.load();
  },
  methods: {
    submit() {
      // 确认弹窗回调
      this.show = false;
    },
    indexMethod(index) {
      return (this.currentPage - 1) * this.intPageSize + index + 1;
    },
    flyToLocation(x, y) {
      console.log(x, y);
      this.map.flyTo({
        center: [x, y], // 中心点
        zoom: 16.5, // 缩放比例
        pitch: 45, // 倾斜度
      });
    },
    getLabel(val) {
      let label = val;
      this.input = this.input + label + "、";
    },
    //更新数据动画
    refeashData() {
      this.state = "加载数据中......请稍后";
      console.log(111);
      (this.isLoading = true),
        // this.getrealtime();
        setTimeout(() => {
          this.isLoading = false;
        }, 1200);
    },
    mate() {
      if (this.input == "WebGIS、") {
        this.load();
      }
    },
    clear() {
      this.input = "";
    },
    load() {
      request
        .post("/api/data/skillPo", {
          city: "南京",
          skill: "WebGIS",
        })
        .then((res) => {
          console.log(res);
          this.tableCityData = res.data;
          if (this.tableCityData != null) {
            this.isLoading = false;
          }
        });
    },
  },
};
</script>

<style scoped lang="less">
#mate {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  //   background: url("../assets/img/banner.png") no-repeat;
  //   background-size: 100% 100%;
}
#map {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.mapcontent {
  position: relative;
  z-index: 1;
  height: 100%;
  width: 100%;
}
.right {
  position: absolute;
  z-index: 100;
  top: 0.5%;
  height: 92%;
  width: 25%;
  margin-right: 0.2%;
  right: 0;
  background: url("../../assets/img/fq/ptbg1.png") no-repeat;
  background-position: 100% 10%;
  background-size: 100% 100%;
  background-color: #04111d94;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  .he {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    color: #fff;
    .prompt {
      display: flex;
      flex: 0.5;
      align-items: center;
      margin-top: 7%;
      width: 92%;
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
      span {
        padding: 5% 2%;
        // border: 1px solid #1edaeb;
        text-indent: 2em; //文字缩进2字符
        line-height: 18pt;
        text-align: left;
      }
    }
    .mutual {
      flex: 2;
      display: flex;
      flex-direction: column;
      width: 92%;
      margin-top: 4%;
      padding-top: 5%;
      // background: linear-gradient(#1edaeb) left top no-repeat,
      //   linear-gradient(#1edaeb) left top no-repeat,
      //   linear-gradient(#1edaeb) right top no-repeat,
      //   linear-gradient(#1edaeb) right top no-repeat,
      //   linear-gradient(#1edaeb) left bottom no-repeat,
      //   linear-gradient(#1edaeb) left bottom no-repeat,
      //   linear-gradient(#1edaeb) right bottom no-repeat,
      //   linear-gradient(#1edaeb) right bottom no-repeat;
      // //linear-gradient(to left, #f00, #f00) right bottom no-repeat;//四个角的边框 to left 代表颜色渐变的方向
      // background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px;
      /deep/.el-button {
        // background: rgba(11, 176, 241, 0.493);
        background: url("../../assets/img/fq/wggl_tab.png");
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
      .grid-content {
        border-radius: 4px;
        min-height: 36px;
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
            border: 1px solid #ffffff40;
            font-size: 10pt;
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
          line-height: 30px;
        }
        /deep/.el-input__inner {
          left: 0%;
          position: relative;
          display: inline-block;
          -webkit-appearance: none;
          background: #c3e3e72b;
          border-radius: 4px;
          border: 1px solid #3eb7c738;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          color: rgba(220, 225, 227, 0.96);
          font-size: inherit;
          height: 30px;
          // line-height: 90px;
          width: 100%;
          padding: 0px;
          // margin-top: 2%;
        }
      }
    }
  }
  .main {
    display: flex;
    flex: 1;
    flex-direction: column;
    border-top: 1px solid #1edaeb;
    .title {
      margin-top: 2%;
      width: 100%;
      height: 30px;
      color: #fff;
      font-size: 13pt;
    }
    .table {
      width: 100%;
      height: 90%;
      /deep/.el-button {       
        border: none;
        color: rgb(30, 185, 247);
        // padding: 12px 20px;
        font-size: 14px;
        border-radius: 5px;
      }
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
/deep/.el-table .el-table__header-wrapper tr th {
  background-image: linear-gradient(
    -180deg,
    #bdd9e017 1%,
    #9fdae5bb 100%
  ) !important;
  background: transparent;
  // color: rgb(255, 255, 255);
  border-bottom: 1px solid #1faacd;
}
/deep/.el-table,
.el-table__expanded-cell {
  background-color: #3f5c6d2c;
}
/deep/.el-table td.el-table__cell,
/deep/.el-table th.el-table__cell.is-leaf {
  border: transparent !important;
}
/deep/ .el-table .cell {
  text-align: center;
}
/deep/.el-table::before {
  background-color: transparent !important;
}
/deep/.el-table tbody tr:hover > td {
  background-color: #09e8f02c !important;
}
/deep/.el-table tr {
  background-color: #3f5c6d2c;
  color: #fff;
}
/deep/.el-table--striped
  .el-table__body
  tr.el-table__row--striped
  td.el-table__cell {
  background: transparent;
}
//头高、行高
/deep/.el-table__header tr,
.el-table__header th {
  height: 30px;
  padding: 0;
}
/deep/.el-table__body tr,
.el-table__body td {
  height: 35px;
  padding: 0;
}
/deep/.el-table .el-table__cell {
  padding: 0;
}
/deep/.el-table th.el-table__cell > .cell {
  padding: 0;
  text-align: center;
}
</style>
