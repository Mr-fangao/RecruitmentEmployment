<template>
  <div class="header" @select="handleSelect" active-text-color="#ffd04b">
    <el-row>
      <el-col :span="8"
        ><div class="left">
          <p name="data" @click="godata" :class="{active:current=='数据面板'}">数据面板</p>
          <p name="job" @click="gojob" :class="{active:current=='职位搜索'}">职位搜索</p>
          <p name="spatial" @click="gospatial">空间查询</p>
          <p name="skill" @click="goskill">技能需求</p>
        </div></el-col
      >
      <el-col :span="8"><h1>行业招聘大数据分析与就业服务系统</h1></el-col>
      <el-col :span="8"
        ><div class="right">
          <p name="map" @click="gomap">专题地图</p>
          <p name="analysis" @click="goanalysis">时空分析</p>
          <p name="employment" @click="goemployment">就业推荐</p>
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
      current:['数据面板','职位搜索'],
    };
  },
  // mounted() {
  //   // default-active和 路由名称 相同时，导航栏背景高亮
  //   this.routerName = this.$route.name;
  // },
  methods: {

    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    godata() {
      this.$router.push({ path: "/data" });
    },
    gojob() {
      this.$router.push({ path: "/job" });
    },
    gospatial() {
      this.$router.push({ path: "/spatial" });
    },
    goskill() {
      this.$router.push({ path: "/skill" });
    },
    gomap() {
      this.$router.push({ path: "/map" });
    },
    goanalysis() {
      this.$router.push({ path: "/analysis" });
    },
    goemployment() {
      this.$router.push({ path: "/employment" });
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
    .active {
      color: white;
      border: 1px solid green;
      color: white;
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
