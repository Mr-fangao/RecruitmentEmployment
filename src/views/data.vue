<template>
  <div id="map">
    <div class="grid-container">
      <div class="pt1">1</div>
      <div class="pt2">2</div>
      <div class="pt3">3</div>
      <div class="pt4">4</div>
      <div class="pt5">5</div>
      <div class="pt6">6</div>
      <div class="pt7">7</div>
    </div>
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
    initmap() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiY2hlbmpxIiwiYSI6ImNrcWFmdWt2bjBtZGsybmxjb29oYmRzZzEifQ.mnpiwx7_cBEyi8YiJiMRZg"; //这里请换成自己的token
      var map = new mapboxgl.Map({
        container: "map", // container id 绑定的组件的id
        style: "mapbox://styles/chenjq/ckqkfcjks2rpq17r1wcs2k81x", //地图样式，可以使用官网预定义的样式,也可以自定义
        center: [103.06756, 38.050558], // 初始坐标系，这个是南京建邺附近
        zoom: 3, // starting zoom 地图初始的拉伸比例
        pitch: 0, //地图的角度，不写默认是0，取值是0-60度，一般在3D中使用
        bearing: 0, //地图的初始方向，值是北的逆时针度数，默认是0，即是正北
        antialias: true, //抗锯齿，通过false关闭提升性能
        attributionControl: false,
      });
    },
  },
};
</script>

<style lang="less" scoped>
div {
  text-align: center;
  font-size: 30px;
  outline: 1px dashed rgb(136, 27, 27);
}
.map {
  position: relative;
}
.grid-container {
  position: absolute;
  display: grid;
  height: calc(100% - 45px);
  // grid-template-columns: 1fr 2fr 1fr;
  // grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 409px  600px 400px;
  grid-template-rows: 33.3% 33.3% 33.3%;
  grid-template-areas:
    "pt1 pt4 pt5 "
    "pt2 pt4 pt6 "
    "pt3 pt4 pt7 ";
  .pt1 {
    grid-area: pt1;
    // width: 100px;
    // height: calc((100% - 45px);
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