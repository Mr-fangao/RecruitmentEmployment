<template>
    <nav>
      <ul>
        <li>
          <h1>就业推荐与智能分析系统</h1>
          <router-link to="/query" exact>职位查询</router-link>
          <router-link to="/data" exact>就业统计</router-link>
          <router-link to="/skAnalysis" exact>综合分析</router-link>
          <router-link to="/skill" exact>技能分析</router-link>
          <router-link to="/thememap" exact>专题地图</router-link>
        </li>
      </ul>
      <img src="../assets/img/time.png" />
      <span class="times">{{ time }}</span>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      time: "08月31日 10:29",
    };
  },
  mounted() {
    this.currentTime();
  },
  methods: {
    currentTime() {
      setInterval(this.getTime, 500);
    },
    getTime() {
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      let ss =
        new Date().getSeconds() < 10
          ? "0" + new Date().getSeconds()
          : new Date().getSeconds();
      this.time = mm + "月" + dd + "日 " + hh + ":" + mf + ":" + ss;
    },
  },
};
</script>

<style lang="less" scoped>
nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  padding: 0px;
  img{
    margin-left: 200px;
  }
  .times {
    width: 160px;
    margin-left: 10px;
    font-size: 18px;
    float: right;
    font-family: Microsoft YaHei;
    color: #ffffff;
  }
  ul {
    height: 100%;
    list-style-type: none; /*消除黑点*/
    text-align: center;
    padding-right: 70px;
    background: url(../assets/img/header_bg.png);
    background-size: 100% 100%;
    li {
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0px;
      h1 {
        font-size: 26px;
        color: #fff;
        font-family: Microsoft YaHei;
        margin: 0px 60px 0px 20px;
      }
      a {
        font-size: 18px;
        width: 90px;
        color: #fff; /*设置字体颜色*/
        font-family: Microsoft YaHei;
        text-decoration: none; /*消除下划线*/
        border-radius: 5px;
        margin: 0px 50px 0px 0px;

        line-height: 32px;
      }
    }
  }
}
/*选中则发生一些变化*/

.router-link-active {
  cursor: pointer;
  color: #1bcddd;
  background: url(../assets/img/menucurrent.png);
  background-size: 100% 100%;
}
</style>
