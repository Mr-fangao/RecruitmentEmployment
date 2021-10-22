<template>
  <el-header class="d-flex align-items-center" style="background: transparent">
    <el-menu
      :default-active="navBarIndex"
      class="el-menu-demo"
      mode="horizontal"
      border-bottom="0px solid #000"
      @select="handleSelect"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="1">商品</el-menu-item>
      <el-menu-item index="1">订单</el-menu-item>
      <el-menu-item index="1">会员</el-menu-item>
      <el-menu-item index="1">设置</el-menu-item>
      <el-submenu index="100">
        <template slot="title">
          <!-- 头像 -->
          <el-avatar
            :size="small"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          ></el-avatar>
          silas
        </template>
        <el-menu-item index="100-1">修改</el-menu-item>
        <el-menu-item index="100-2">退出</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-header>
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
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
}
</style>
