<template>
  <div class="table_c">
    <div class="table_all">
      <el-card shadow="hover" class="tebale_card">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          :row-style="getRowClass"
          :header-row-style="getRowClass"
          :header-cell-style="getRowClass"
        >
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>

    <script>
export default {
  name: "TableC",
  data() {
    return {
      tableData: [
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
      return "background:#3f5c6d2c;color:#FFFF;";
    },
  },
};
</script>

    <style lang="less" scoped>
.table_c {
   background: url("../../assets/img/mainbg.jpg") center
            center no-repeat;
  margin: 10% 10% 10% 10%;
  padding: 10px;
}
.tebale_card {
  background-color: #00a2ff2c;
}
.el-table,
.el-table__expanded-cell {
  background-color: #3f5c6d2c;
}
</style>>