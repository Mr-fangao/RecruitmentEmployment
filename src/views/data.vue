<template>
  <div class="headerPanel">
    <!-- 点击切换变色导航栏 -->
    <div class="leftPanel">
      <template v-for="(item, index) in nav"
 :class="{ active: index == current }"
        :key="index"
        @click="go(index)"
      >
      </template>
      {{ item }}
    </div>
    <div class="rightPanel">
      <template
        v-for="(item, index) in nav"
        :class="{ active: index == current }"
        :key="index"
        @click="go(index)"
      >
      </template>
      {{ item }}
    </div>
    <!-- END -->
  </div>
</template>

<script>
export default {
  name: "data",
  data() {
    return {
      current: 1, //切换标识
      nav: [
        //导航栏数据
        "首页",
        "新闻中心",
        "要闻资讯",
        "联系我们",
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
  },
};
</script>

<style lang="less" scoped>
/*点击切换变色导航栏*/
ul li {
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
