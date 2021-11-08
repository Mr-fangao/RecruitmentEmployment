<template>
<div class="grid-container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>

  <div class="item5">5</div>
  <div class="item6">6</div>
  <div class="item7">7</div>

	<div class="item10">5</div>
  <div class="item11">6</div>
  <div class="item12">7</div>


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
// .lg_main {
//   display: grid;
//   grid-template-columns: 100px auto 100px;
//   grid-template-rows: 33% 33% 33%;
//   grid-template-areas:
//     "pt1 · pt4 "
//     "pt2 · pt5 "
//     "pt3 · pt6 ";

//   // .panel_title {
//   //   > span {
//   //     color: #fbf816;
//   //     margin-left: 10px;
//   //   }

//   //   &::before {
//   //     content: "";
//   //     width: 30px;
//   //     height: 31px;
//   //     position: relative;
//   //     top: 8px;
//   //     margin: 0;
//   //     display: inline-block;
//   //     // background: url('~public/images/djgk/icon1.png') center center no-repeat;
//   //   }
//   // }

//   .panel {
//     outline: 1px dashed #ff1493;
//   }
  
.grid-container {
  display: grid;
  grid-template-columns: 350px auto 350px;
  grid-template-rows: 221px 221px 221px ;
  // grid-template-rows: 33% 33% 33%;
  grid-gap: 1px;
  background-color:transparent;
  padding: 1px;
}

.grid-container > div {
  background-color: transparent;
  text-align: center;
  // padding: 20px 0;
  font-size: 30px;
  outline: 1px dashed #ff1493;
}
</style>
