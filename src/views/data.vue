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
const mapboxgl = require("mapbox-gl");
export default {
  name: "jobsearch",
  data() {},
  mounted() {
    this.initmap();
  },
  methods: {
  initmap(){
    mapboxgl.accessToken = 'pk.eyJ1IjoibXItZmFuZ2FvIiwiYSI6ImNrdnVwM2VxbDE0MTUyb2x5ZGhmNjBlNnEifQ.rJDFiUCZgFylAzguZBspKw'; //这里请换成自己的token
    var map = new mapboxgl.Map({
    container: 'map', // container id 绑定的组件的id
    style: 'mapbox://styles/mapbox/streets-v11', //地图样式，可以使用官网预定义的样式,也可以自定义
    center: [118.726533,32.012005], // 初始坐标系，这个是南京建邺附近
    zoom: 15,     // starting zoom 地图初始的拉伸比例
    pitch: 60,  //地图的角度，不写默认是0，取值是0-60度，一般在3D中使用
    bearing: -17.6, //地图的初始方向，值是北的逆时针度数，默认是0，即是正北
    antialias: true, //抗锯齿，通过false关闭提升性能
    });
   }
 }
};
</script>

<style lang="less" scoped>
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
    width: 100%;
    height: 100%;
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
