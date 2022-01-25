<template>
  <nav>
    <ul>
      <li>
        <router-link to="/recommend" exact>智能推荐</router-link>
        <router-link to="/query" exact>职位查询</router-link>
        <router-link to="/data" exact>就业统计</router-link>
        <h1>前程无忧 · 就业推荐与智能分析系统</h1>
        <router-link to="/skAnalysis" exact>综合分析</router-link>
        <router-link to="/skill" exact>技能分析</router-link>
        <router-link to="/thememap" exact>专题地图</router-link>
      </li>
    </ul>
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
      this.time =
        mm + "月" + dd + "日 " + hh + ":" + mf + ":" + ss;
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
  background: url(../assets/img/headerbg.png);
  background-size: 100% 100%;
  padding: 0px;
  .times {
    width: 50px;
    margin:0px 5px 0px 30px;
    font-size: 10px;
    float: right;
    font-family: Microsoft YaHei;
    
    color: #ffffff;
  }
  ul {
    height: 100%;
    list-style-type: none; /*消除黑点*/
    text-align: center;
    margin: 0px;
    li {
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0px 0px 0px 40px;
      
      h1 {
        font-size: 26px;
        color: #ffffff;
        font-family: Microsoft YaHei;
      
        margin:0px 105px 10px 160px;
      }
      a {
        font-size: 18px;
        color: #fff; /*设置字体颜色*/
        font-family: Microsoft YaHei;
        text-decoration: none; /*消除下划线*/
        border-radius: 5px;
        margin: 0px 0px 0px 45px;
        padding:0px 2px 2px 2px;
      }
    }
  }
}
/*选中则发生一些变化*/
.router-link-active {
  cursor: pointer;

  color: #ffffff;
  background: url(../assets/img/menucurrent.png);
  background-position: 49% 25%;
}
</style>
