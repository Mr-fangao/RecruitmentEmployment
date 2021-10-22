<template>
  <div class="header">
    <el-header
      class="d-flex align-items-center"
      style="background: transparent"
    >
      <el-menu
        :default-active="navBarIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="transparent"
        active-text-color="#4edeff"
      >
        <el-menu-item index="1">数据面板</el-menu-item>
        <el-menu-item index="1">职位搜索</el-menu-item>
        <el-menu-item index="1">空间查询</el-menu-item>
        <el-menu-item index="1">技能需求</el-menu-item>
      </el-menu>
      <h1>行业招聘大数据分析与就业服务系统</h1>
      <el-menu
        :default-active="navBarIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="transparent"
        text-color="#fff"
        active-text-color="#4edeff"
      >
        <el-menu-item index="1">专题地图</el-menu-item>
        <el-menu-item index="1">时空分析</el-menu-item>
        <el-menu-item index="1">就业推荐</el-menu-item>
      </el-menu>
    </el-header>
  </div>
</template>

<script>
// import '../../assets/css/global.css'
export default {
  name: "Header",
  data() {
    return {
      navBarIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  width: 100%;
  background: url(../assets/img/headerbg.png);
  background-size: 100% 100%;
  .el-header {
    display: flex;
    flex-direction: row;
    .el-menu-item {
      font-size: 20px;
    }
  }
  h1 {
    font-size: 24px;
    color: #ffffff;
    font-family: Microsoft YaHei;
    font-weight: bold;
  }
}

.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
}
</style>
