<template>
  <div class="table">
    <el-card shadow="hover" class="tebale_card"
      ><el-input
        v-model="search"
        size="mini"
        placeholder="输入关键字搜索"
        @input="Search"
      />
      <el-table
        border
        style="width: 100%; align: center"
        :row-style="getRowClass"
        :header-row-style="getRowClass"
        :header-cell-style="getRowClass"
        :data="tableData"
        ><!-- (tableData,
          tableData.filter(
            (data) =>
              !search ||
              data.company.toLowerCase().includes(search.toLowerCase())
          )) -->
        <el-table-column prop="time" label="发布日期" width="120">
        </el-table-column>
        <el-table-column prop="company" label="公司名称"> </el-table-column
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
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="8"
          layout="total ,prev, pager, next, jumper"
          :total="total"
          @click="Click"
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
      tableData: [
        // {
        //   company: "网易",
        //   position: "B2B大客户销售经理",
        //   region: "北京-海淀区",
        //   salary: "1.5-3万/月",
        //   type: "上市公司",
        //   time: "2021-10-15",
        // },
        // {
        //   company: "辉瑞制药有限公司",
        //   position: "医学事务解决方案副经理- RWE & NIS(J22363)",
        //   region: "北京-东城区",
        //   salary: "2.5-3.5万/月",
        //   type: "外资（欧美）",
        //   time: "2021-10-15",
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
          // pageSize: this.pageSize,
          // search: this.search,
        })
        .then((res) => {
          console.log(res);
          this.tableData = res.data.records;
          this.total = res.data.total;
        });
    },
    Click(val) {
      (this.currentPage = val),
        request
          .post("/api/data/queryForm", {
            pageNum: this.currentPage,
            // pageSize: this.pageSize,
            // search: this.search,
          })
          .then((res) => {
            console.log(res);
            this.tableData = res.data.records;
            this.total = res.data.total;
          });
    },
    Search() {
      request
        .post("/api/data/queryAny", {
          search: this.search,
          pageNum: this.currentPage,
        })
        .then((res) => {
          console.log(res);
          this.tableData = res.data.records;
          this.total = res.data.total;
        });
    },
    handleCurrentChange(val) {
      //页码切换
      console.log("当前页:${val}");
      this.currentPage = val;
      // this.currentChangePage(this.tableData, currentPage);
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
