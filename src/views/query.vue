<template>
  <div class="query">
    <div id="map" />
    <div class="cx">
      <el-input
        prefix-icon="el-icon-search"
        v-model="search"
        size="mini"
        placeholder="输入关键字搜索"
      /><el-button size="mini" id="button" @click="Search">查询</el-button>
    </div>
    <div class="table">
      <el-card shadow="hover" class="tebale_card">
        <el-table
          style="width: 100%; align: center"
          :row-click="Detail"
          :row-style="getRowClass"
          :header-row-style="getRowClass"
          :header-cell-style="getRowClass"
          :data="tableData"
          :cell-style="{ padding: '2px 0' }"
          :height="getheight"
        >
          <el-table-column prop="time" label="发布日期" width="120">
          </el-table-column>
          <el-table-column
            prop="company"
            label="公司名称"
            :show-overflow-tooltip="true"
          >
          </el-table-column>
          <el-table-column
            prop="position"
            label="岗位名称"
            width="210"
            :show-overflow-tooltip="true"
          >
          </el-table-column>
          <el-table-column prop="region" label="工作地区" width="100">
          </el-table-column
          ><el-table-column prop="salary" label="薪资范围" width="100">
          </el-table-column
          ><el-table-column prop="require" label="学历要求" width="100">
          </el-table-column
          ><el-table-column prop="experience" label="工作经验" width="100">
          </el-table-column
          ><el-table-column prop="type" label="公司类型" width="120">
          </el-table-column
          ><el-table-column prop="type" label="公司规模" width="120">
          </el-table-column>
          <el-table-column prop="detail" label="详细信息" width="120">
            <template slot-scope="scope">
              <el-button
                type="text"
                @click="flyToLocation(scope.row.x, scope.row.y)"
                >定位</el-button
              >
              <el-button
                type="text"
                @click="flyToLocation(scope.row.x, scope.row.y)"
                >详情</el-button
              >
            </template>
            <!-- <el-dialog title="公司详情" :visible.sync="dialogTableVisible" append-to-body>
                <el-table :data="tableData">
                  <el-table-column label="公司名称"
                    ><p>{{ scope.row.company }}</p></el-table-column
                  >
                  <el-table-column label="岗位名称"
                    ><p>{{ scope.row.position }}</p></el-table-column
                  >
                  <el-table-column label="工作地区"
                    ><p>{{ scope.row.region }}</p></el-table-column
                  >
                </el-table>
              </el-dialog> -->
          </el-table-column>
        </el-table>
        <div style="margin: 5px 0px">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pageSize"
            layout="total ,prev, pager, next, jumper"
            :total="total"
            @click="Click"
            background
            small
          >
          </el-pagination>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
const mapboxgl = require("mapbox-gl");
import request from "../utils/request";
import poppage from "../components/poppage.vue";
export default {
  name: "query",
  components: { poppage },
  data() {
    return {
      total: 0,
      currentPage: 1,
      search: "",
      show: false,
      // dialogTableVisible: false,
      tableData: [],
      pageSize: 5,
      porpID: "",
      // transTitle: ["", "学生1", "学生2", "学生3"], // transTitle 该标题为转化后的标题
    };
  },
  mounted() {
    //登录绑定事件
    window.addEventListener("keydown", this.keyDown);
    this.initmap();
  },
  created() {
    this.load();
    this.getHeight();
    // // 数组按矩阵思路, 变成转置矩阵
    // let matrixData = this.originData.map((row, i) => {
    //   let arr = [];
    //   for (let key in row) {
    //     arr.push(row[key]);
    //   }
    //   return arr;
    // });
    // // 加入标题拼接最终的数据
    // this.transData = matrixData[0].map((col, i) => {
    //   return [
    //     this.originTitle[i],
    //     ...matrixData.map((row) => {
    //       return row[i];
    //     }),
    //   ];
    // });
  },
  methods: {
    Detail(row) {
      console.log(row);
    },
    // showPop(val) {
    //   this.porpID = val.id;
    //   this.show = true;
    // },
    // hideModal() {
    //   // 取消弹窗回调
    //   this.show = false;
    // },
    // submit() {
    //   // 确认弹窗回调
    //   this.show = false;
    // },
    flyToLocation(x, y) {
      console.log(x, y);
      this.map.flyTo({
        center: [x, y], // 中心点
        zoom: 16.5, // 缩放比例
        pitch: 45, // 倾斜度
      });
    },
    getRowClass({ row, column, rowIndex, columnIndex }) {
      return "background:#3f5c6d2c;color:#FFF;";
    },
    keyDown(e) {
      //如果是回车则执行查询方法
      if (e.keyCode == 13) {
        document.getElementById("button").click();
      }
    },
    getHeight() {
      this.getheight = window.innerHeight - 495 + "px";
    },
    //加载表格数据
    load() {
      request
        .post("/api/data/queryForm", {
          pageNum: this.currentPage,
          pageSize: this.pageSize,
          // search: this.search,
        })
        .then((res) => {
          console.log(res);
          this.tableData = res.data.jobInfos;
          this.total = res.data.total;
          this.pagecount = res.data.pages;
        });
    },
    //获取当前页面数据
    Click() {
      request
        .post("/api/data/queryForm", {
          pageNum: this.currentPage,
        })
        .then((res) => {
          console.log(res);
          this.tableData = res.data.jobInfos;
          this.total = res.data.total;
        });
    },
    //查询
    Search() {
      request
        .post("/api/data/queryAny", {
          search: this.search,
          pageNum: this.currentPage,
        })
        .then((res) => {
          console.log(res);
          this.tableData = res.data.jobInfos;
          this.total = res.data.total;
        });
    },
    handleCurrentChange(val) {
      //页码切换
      // console.log("当前页:${val}");
      // this.currentPage = val;
      this.currentPage = val;
      console.log(val);
      request
        .post("/api/data/queryForm", {
          pageNum: val,
          pageSize: this.pageSize,
        })
        .then((res) => {
          console.log(res, val);
          this.tableData = res.data.jobInfos;
          this.pageSize = res.data.pages;
        });
    },
    //分页方法（重点）
    // currentChangePage(list, currentPage) {
    //   let from = (currentPage - 1) * this.pageSize;
    //   let to = currentPage * this.pageSize;
    //   this.tableData = [];
    //   for (; from < to; from++) {
    //     if (list[from]) {
    //       this.tableData.push(list[from]);
    //     }
    //   }
    // },
    //获取详细信息
    // rowDbclick(row, column) {
    //   var id = row.ID;
    //   this.handleDetail(id);
    // },
    // handleDetail(row) {
    //   console.log(row);
    //   this.dialogData.company = row.company;
    //   this.dialogData.position = row.position;
    // },
    initmap() {
      this.$mapboxgl.accessToken =
        "pk.eyJ1IjoiY2hlbmpxIiwiYSI6ImNrcWFmdWt2bjBtZGsybmxjb29oYmRzZzEifQ.mnpiwx7_cBEyi8YiJiMRZg";
      this.map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/chenjq/cl010ychv001214pdpa5xyq5a",
        center: [105, 35],
        zoom: 3.5,
      });
    },
  },
  watch: {},
};
</script>

<style lang="less" scoped>
.query {
  position: fixed;
  height: 100%;
  width: 100%;
}
.cx {
  position: absolute;
  top: 10px;
  left: 0px;
  width: 20%;
  .el-input {
    width: 200px;
    margin-right: 20px;
    background-image: url("../assets/img/fq/bg9.png");
    background-size: 100% 100%;
  }
  .el-button {
    background-color: #225e81e3;
    border-color: #1edaeb;
    color: #fff;
  }
}
.table {
  position: absolute;
  bottom: 46px;
  right: 0px;
  width: 90%;
  height: 40%;
}
#map {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.tebale_card {
  background-color: #18608aad;
  height: 100%;
  border-color: #1edaeb;
}

/deep/.el-card__body {
  padding: 10px;
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
/deep/ .el-table .cell {
  text-align: center;
}
/deep/.el-table::before {
  background-color: transparent;
}
/deep/.el-pagination__total,
/deep/.el-pagination__jump {
  color: #fff;
}
/deep/ .el-input--mini .el-input__inner {
  background-color: #3f5c6d2c;
  color: #fff;
  border: none;
}
/deep/.el-table tbody tr:hover > td {
  background-color: #09e8f02c !important;
}
/deep/.el-table tr {
  background-color: #3f5c6d2c;
  color: #fff;
}
/deep/ .el-pagination .el-pager li,
/deep/ .el-pagination .btn-prev,
/deep/ .el-pagination .btn-next {
  background-color: #00a2ff2c;
  color: #fff;
}
</style>
>
