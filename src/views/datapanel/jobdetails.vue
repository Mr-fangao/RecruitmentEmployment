<template>
  <div class="table">
    <el-card shadow="hover" class="tebale_card"
      ><el-input
        v-model="search"
        size="mini"
        placeholder="输入关键字搜索"
        prefix-icon="el-icon-search"
      />
      <el-table
        border
        style="width: 100%"
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
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
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
        {
          date: "测试",
          name: "测试1",
          address: "测试",
        },
        {
          date: "测试",
          name: "测试",
          address: "测试",
        },
        {
          date: "测试",
          name: "测试",
          address: "测试",
        },

        {
          date: "测试",
          name: "测试",
          address: "测试",
        },
        {
          date: "测试",
          name: "测试",
          address: "测试",
        },
        {
          date: "测试",
          name: "测试",
          address: "测试",
        },
        {
          date: "测试",
          name: "测试",
          address: "测试",
        },
        {
          date: "测试",
          name: "测试",
          address: "测试",
        },
        {
          date: "测试",
          name: "测试",
          address: "测试",
        },
        {
          date: "测试",
          name: "测试2",
          address: "测试",
        },
        {
          date: "测试",
          name: "测试3",
          address: "测试",
        },
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
        .get("/api/data/queryForm", {
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
