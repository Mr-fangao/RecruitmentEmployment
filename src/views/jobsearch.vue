<template>
  <div class="grid-container">
    <div class="pt1"><header></header>1</div>
    <div class="pt2"><header></header>2</div>
    <div class="pt3"><header></header>3</div>
    <div class="pt4">4</div>
    <div class="pt5"><header></header>5</div>
    <div class="pt6"><header></header>6</div>
    <div class="pt7"><header></header>7</div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  components: { Header },
  name: "jobsearch",
  data() {},
};
</script>

<style lang="less" scoped>
@import "../assets/css/globalpt.css";

.grid-container {
  display: grid;
  height: calc(100% - 45px);
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "pt1 pt4 pt5 "
    "pt2 pt4 pt6 "
    "pt3 pt4 pt7 ";
  background-color: transparent;
  div {
    text-align: center;
    font-size: 30px;
    outline: 1px dashed #fff;
  }
  .pt1 {
    grid-area: pt1;
  }
  .pt2 {
    grid-area: pt2;
  }
  .pt3 {
    grid-area: pt3;
  }
  .pt4 {
    grid-area: pt4;
  }
  .pt5 {
    grid-area: pt5;
  }
  .pt6 {
    grid-area: pt6;
  }
  .pt7 {
    grid-area: pt7;
  }
}
</style>
