<template>
  <div class="head">
    <!-- 点击切换变色导航栏 -->
    <ul>
      <li
        v-for="(item, index) in head"
        :class="{ active: index == current }"
        :key="index"
        @click="go(index)"
      >
        {{ item }}
      </li>
      <h1>行业招聘大数据分析与就业服务系统</h1>
      <li
        v-for="(item, index) in head"
        :class="{ active: index == current }"
        :key="index"
        @click="go(index)"
      >
        {{ item }}
      </li>
    </ul>
    <!-- END -->
  </div>
</template>

<script>
export default {
  name: "data",
  data() {
    return {
      current: 0, //切换标识
      head: [
        "首页",
        "新闻中心",
        "要闻资讯",
        "1",
        "3",
        "2",
      ],
    };
  },
  methods: {
    // 导航栏切换
    go(index) {
      this.current = index; //激活样式
      if (index == "0") {
      this.$router.push({ path: "/data" });
      } else if (index == "1") {
      this.$router.push({ path: "/job" });
      }
    },
    // jump(index) {
    //   if (index == "0") {
    //     this.this.$router.push("/about");
    //   }
    //   else if(index == "1"){
    //     this.this.$router.push("/about");
    //   }
    // },
  },
};
</script>

<style lang="less" scoped>
.head{
   height: 60px;
  width: 100%;
  background: url(../assets/img/headerbg.png);
  background-size: 100% 100%;
  display: flex;
  flex-direction: row;
}
/*点击切换变色导航栏*/
ul li {
  display: flex;
  color: #FFFF;
  list-style: none;
  float: left;
  margin-right: 20px;
  padding: 10px;
}

.active {
  /*激活样式*/
  color: red;
  background: url(../assets/img/menucurrent.png);
  background-position: 47% -65%;
}
</style>
