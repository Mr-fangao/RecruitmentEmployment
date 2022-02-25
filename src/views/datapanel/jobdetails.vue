<template>
  <div class="table">
    <el-card shadow="hover" class="tebale_card">
      <el-input
        prefix-icon="el-icon-search"
        v-model="search"
        size="mini"
        placeholder="输入关键字搜索"
      /><el-button size="mini" id="button" @click="Search">查询</el-button>
      <el-table
        border
        style="width: 100%; align: center"
        :row-style="getRowClass"
        :header-row-style="getRowClass"
        :header-cell-style="getRowClass"
        :data="tableData"
        :height="getheight"
      >
        <el-table-column prop="time" label="发布日期" width="120">
        </el-table-column>
        <el-table-column prop="company" label="公司名称"> </el-table-column>
        <el-table-column prop="position" label="岗位名称" width="210">
        </el-table-column>
        <el-table-column prop="region" label="工作地区" width="120">
        </el-table-column
        ><el-table-column prop="salary" label="薪资范围" width="120">
        </el-table-column
        ><el-table-column prop="require" label="学历要求" width="120">
        </el-table-column
        ><el-table-column prop="experience" label="工作经验" width="120">
        </el-table-column
        ><el-table-column prop="type" label="公司类型" width="120">
        </el-table-column
        ><el-table-column prop="type" label="公司规模" width="120">
        </el-table-column>
        <el-table-column prop="detail" label="详细信息" width="120">
          <template #default="scope"
            ><el-button size="mini" @click="dialogTableVisible = true"
              >详情</el-button
            >
            <el-dialog v-model="dialogTableVisible" title="公司详情">
              <el-form label-position="left" inline class="demo">
                <el-form-item label="公司名称">
                  <p>{{ scope.row.company }}</p>
                </el-form-item>
                <el-form-item label="岗位名称">
                  <p>{{ scope.row.position }}</p>
                </el-form-item>
                <el-form-item label="工作地区">
                  <p>{{ scope.row.region }}</p>
                </el-form-item>
              </el-form>
            </el-dialog></template
          >
        </el-table-column>
      </el-table>
      <div style="margin: 10px 0">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="9"
          layout="total ,prev, pager, next, jumper"
          :total="total"
          @click="Click"
          background
        >
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
import request from "../../utils/request";
export default {
  name: "TableC",
  data() {
    return {
      total: 0,
      currentPage: 1,
      search: "",
      dialogTableVisible: false,
      tableData: [],
      // transTitle: ["", "学生1", "学生2", "学生3"], // transTitle 该标题为转化后的标题
    };
  },
  mounted() {
    //登录绑定事件
    window.addEventListener("keydown", this.keyDown);
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
      this.getheight = window.innerHeight - 170 + "px";
    },
    //加载表格数据
    load() {
      request
        .post("/api/data/queryForm", {
          pageNum: this.currentPage,
          // pageSize: this.pageSize,
          // search: this.search,
        })
        .then((res) => {
          console.log(res);
          this.tableData = res.data.jobInfos;
          this.total = res.data.total;
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
      console.log("当前页:${val}");
      this.currentPage = val;
    },
    //分页方法（重点）
    currentChangePage(list, currentPage) {
      let from = (currentPage - 1) * this.pageSize;
      let to = currentPage * this.pageSize;
      this.tableData = [];
      for (; from < to; from++) {
        if (list[from]) {
          this.tableData.push(list[from]);
        }
      }
    },
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
  },
};
</script>

<style lang="less" scoped>
.table {
  padding: 10px;
  height: calc(100% - 50px);
}
.tebale_card {
  background-color: #00a2ff2c;
  height: 100%;
  .el-input {
    width: 300px;
    margin: 0px 20px 10px 72%;
  }
}
:deep(.el-overlay) {
  background-color: rgba(255, 255, 255, 0.02);
}
.el-table,
.el-table__expanded-cell {
  background-color: #3f5c6d2c;
}
/deep/ .el-table .cell {
  text-align: center;
}

.el-pagination {
  margin: 10px 0px 0px 520px;
}
/deep/ .el-input--mini .el-input__inner {
  background-color: #3f5c6d2c;
}
/deep/.el-table tbody tr:hover > td {
  background-color: #09e8f02c !important;
}
/deep/.el-table tr {
  background-color: #3f5c6d2c;
  color: #fff;
}
/deep/ .el-pagination .el-pager li {
  background-color: #00a2ff2c;
  color: #fff;
  margin: 0 2px;
}
/deep/ .el-pagination .btn-prev {
  background-color: #00a2ff2c;
  color: #fff;
}
/deep/ .el-pagination .btn-next {
  background-color: #00a2ff2c;
  color: #fff;
}
</style>
>
