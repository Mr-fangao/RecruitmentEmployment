<template>
  <div class="header" @select="handleSelect" active-text-color="#ffd04b">
    <div class="left">
      <p name="data" @click="godata(name)" :class="{ active: name == current }">数据面板</p>
      <p name="job" @click="gojob(name)" :class="{ active: name == current }">职位搜索</p>
      <p name="spatial" @click="gospatial">空间查询</p>
      <p name="skill" @click="goskill">技能需求</p>
    </div>
    <h1>行业招聘大数据分析与就业服务系统</h1>
    <div class="right">
      <p name="map" @click="gomap">专题地图</p>
      <p name="analysis" @click="goanalysis">时空分析</p>
      <p name="employment" @click="goemployment">就业推荐</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current:"data",
      data: "",
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
    godata(name) {
      this.current = name; //激活样式
      this.$router.push({ path: "/data" });
    },
    gojob(name) {
      this.current = name; //激活样式
      this.$router.push({ path: "/jobsearch" });
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
    width: 30%;
    margin: 0px 10px;
    p {
      font-size: 20px;
      border-bottom: none;
      color: #4edeff;
      padding: 20px 10px 0px 10px;
    }
    .active {
  /*激活样式*/
  color: red;
  background: url(../assets/img/menucurrent.png);
  background-position: 47% -65%;
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
    width: 30%;
    p {
      font-size: 20px;
      border-bottom: none;
      color: #4edeff;
      padding: 20px 10px 0px 10px;
    }
  }
}
</style>
