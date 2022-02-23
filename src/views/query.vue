<template>
  <div class="grid-container">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">
      <div id="map"></div>
    </div>
    <div class="item5">5</div>
    <div class="item6">6</div>
    <div class="item7">7</div>
  </div>
</template>

<script>
export default {
  name: "query",
  data() {
     return {} 
  },}
</script>

<style lang="less" scoped>
.grid-container {
  display: grid;
  height: calc(100% - 45px);
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "pt1 pt4 pt5 "
    "pt2 pt4 pt6 "
    "pt3 pt4 pt7 ";
  background-color: transparent;

  div {
    text-align: center;
    font-size: 30px;
    //outline: 1px dashed rgb(136, 27, 27);
  }
  .item1 {
    grid-area: pt1;
  }
  .item2 {
    grid-area: pt2;
  }
  .item3 {
    grid-area: pt3;
  }
  .item4 {
    grid-area: pt4;
  }
  .item5 {
    grid-area: pt5;
  }
  .item6 {
    grid-area: pt6;
  }
  .item7 {
    grid-area: pt7;
  }
}
</style>