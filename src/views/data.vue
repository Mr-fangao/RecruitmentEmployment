<template>
  <div class="nav">
    <!-- 点击切换变色导航栏 -->
    <ul>
      <li
          v-for="(item,index) in nav"
          :class="{ active: index == current }"
          :key="index"
          @click="go(index)">
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
      current: 0,//切换标识
      nav: [//导航栏数据
        '首页',
        '新闻中心',
        '要闻资讯',
        '联系我们'
      ]
    };
  },
  methods: {

    // 导航栏切换
    go(index) {
      this.current = index//激活样式
    }

  }
}
</script>

<style>

/*点击切换变色导航栏*/
ul li {
  list-style: none;
  float: left;
  margin-right: 20px;
  padding: 10px;
}

.active { /*激活样式*/
  color: red;
}

</style>
