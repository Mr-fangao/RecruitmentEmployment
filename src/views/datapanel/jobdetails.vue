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
          tableData.filter(
            (data) =>
              !search || data.name.toLowerCase().includes(search.toLowerCase())
          )
        "
      >
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="100">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "TableC",
  data() {
    return {
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
          name: "测试",
          address: "测试",
        },
        {
          date: "测试",
          name: "测试",
          address: "测试",
        },
      ],
    };
  },
  methods: {
    getRowClass({ row, column, rowIndex, columnIndex }) {
      return "background:#3f5c6d2c;color:#FFF;";
    },
  },
};
</script>

<style lang="less" scoped>
.table {
  padding: 10px;
}
.tebale_card {
  background-color: #00a2ff2c;
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
:deep(.el-pagination.is-background .el-pager li) {
  background-color: #00a2ff2c;
  color: #fff;
}
:deep(.el-pagination.is-background .btn-prev) {
  background-color: #00a2ff2c;
  color: #fff;
}
:deep(.el-pagination.is-background .btn-next) {
  background-color: #00a2ff2c;
  color: #fff;
}
</style>
>
