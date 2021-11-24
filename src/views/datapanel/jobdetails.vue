<template>
  <div class="table">
    <el-card shadow="hover" class="tebale_card"
      ><el-input
        v-model="search"
        size="mini"
        placeholder="输入关键字搜索"
      />
      <el-table
        border
        style="width: 100%; align: center"
        :row-style="getRowClass"
        :header-row-style="getRowClass"
        :header-cell-style="getRowClass"
        :data="
          (tableData,
          tableData.filter(
            (data) =>
              !search || data.name.toLowerCase().includes(search.toLowerCase())
          ))
        "
      >
        <el-table-column prop="time" label="发布日期" width="120">
        </el-table-column>
        <el-table-column prop="company" label="公司名称">
        </el-table-column
        ><el-table-column prop="position" label="岗位名称" width="150">
        </el-table-column
        ><el-table-column prop="region" label="工作地区" width="120">
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
        <el-table-column prop="xxxx" label="详细信息" width="180"
          ><el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >详情</el-button
          >
        </el-table-column>
      </el-table>
      <div style="margin: 10px 0">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          layout="total ,prev, pager, next, jumper"
          :total="total"
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
      pageSize: 10,
      search: "",
      tableData: [
        // {
        //   // fbrq: "1991-10-05",
        //   // gsmc: "滁州科技公司",
        //   // gwmc: "GIS开发工程师",
        //   // gzdq: "滁州学院",
        //   // xzfw: "0.7-1万/月",
        //   // xlyq: "本科",
        //   // gzjy: "1年",
        //   // gslx: "民营公司",
        //   // gsgm: "5",
        // },
      ],
    };
  },
  created() {
    this.load();
  },
  methods: {
    getRowClass({ row, column, rowIndex, columnIndex }) {
      return "background:#3f5c6d2c;color:#FFF;";
    },
    load() {
      request
        .post("/api/data/queryForm", {
          pageNum: this.currentPage,
          pageSize: this.pageSize,
          search: this.search,
        })
        .then((res) => {
          console.log(res);
          this.tableData = res.data.records;
        });
    },
    // handleSizeChange1: function (pagesize) {
    //   // 每页条数切换
    //   this.pagesize = pagesize;
    //   this.handleCurrentChange(this.currentPage1);
    // },
    // handleCurrentChange: function (currentPage) {
    //   //页码切换
    //   this.currentPage1 = currentPage;
    //   this.currentChangePage(this.tableData, currentPage);
    // },
    // //分页方法（重点）
    // currentChangePage(list, currentPage) {
    //   let from = (currentPage - 1) * this.pagesize;
    //   let to = currentPage * this.pagesize;
    //   this.tableData = [];
    //   for (; from < to; from++) {
    //     if (list[from]) {
    //       this.tableData.push(list[from]);
    //     }
    //   }
    // },
  },
};
</script>

<style lang="less" scoped>
.table {
  padding: 10px;
  height: calc(100% - 40px);
}
.tebale_card {
  background-color: #00a2ff2c;
  height: 100%;
}
.el-table,
.el-table__expanded-cell {
  background-color: #3f5c6d2c;
}
:deep(.el-table .cell) {
  text-align: center;
}
.el-input {
  width: 300px;
  left: 75%;
  margin-bottom: 10px;
}
.el-pagination {
  margin: 10px 0px 0px 520px;
}
:deep(.el-input--mini .el-input__inner) {
  background-color: #3f5c6d2c;
}
:deep(.el-table tbody tr:hover > td) {
  background-color: #09e8f02c !important;
}
:deep(.el-pagination .el-pager li) {
  background-color: #00a2ff2c;
  color: #fff;
  margin: 0 2px;
}
:deep(.el-pagination .btn-prev) {
  background-color: #00a2ff2c;
  color: #fff;
}
:deep(.el-pagination .btn-next) {
  background-color: #00a2ff2c;
  color: #fff;
}
</style>
>
