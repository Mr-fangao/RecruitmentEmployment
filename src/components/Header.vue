<template>
  <div class="header" @select="handleSelect">
    <el-row>
      <el-col :span="8"
        ><div class="left">
          <p name="1">数据面板</p>
          <p name="2">职位搜索</p>
          <p name="3">空间查询</p>
          <p name="4">技能需求</p>
        </div></el-col
      >
      <el-col :span="8"><h1>行业招聘大数据分析与就业服务系统</h1></el-col>
      <el-col :span="8"
        ><div class="right">
          <p name="5">专题地图</p>
          <p name="6">时空分析</p>
          <p name="7">就业推荐</p>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      handleSelect: "1",
    };
  },
};
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  width: 100%;
  background: url(../assets/img/headerbg.png);
  background-size: 100% 100%;
  display: flex;
  flex-direction: row;
  .left {
    display: flex;
    flex-direction: row;
    margin: 0px 10px;
    p {
      font-size: 20px;
      border-bottom: none;
      color: #4edeff;
      padding: 20px 10px 0px 10px;
    }
  }
  h1 {
    font-size: 24px;
    color: #ffffff;
    font-family: Microsoft YaHei;
    font-weight: bold;
    padding: 10px 58px;
  }
  .right {
    display: flex;
    flex-direction: row;
    margin-left: 100px;
    p {
      font-size: 20px;
      border-bottom: none;
      color: #4edeff;
      padding: 20px 10px 0px 10px;
    }
  }
}
.el-row {
  width: 100%;
}
</style>
