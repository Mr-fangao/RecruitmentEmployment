<template>
  <div id="map">
    <div class="container">
      <div class="left-part">
        <div class="pt1">
          <header>
            <div class="header-title">TOP10城市薪资水平</div>
          </header>
        </div>
        <div class="pt2">2</div>
        <div class="pt3">3</div>
      </div>
      <div class="right-part">
        <div class="pt4">4</div>
        <div class="pt5">5</div>
        <div class="pt6">6</div>
      </div>
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
// div {

//   outline: 1px dashed rgb(136, 27, 27);
// }
.map {
  position: relative;

}
.left-part {
  position: absolute;
  height: 100%;
  width: 25%;
  float: left;
  display: flex;
  flex-direction: column;
  background: url(../assets/img/pt/leftsidepart.png);
  opacity: 1;
  background-size: 150% 100%;
  .pt1 {
    flex: 1;
  }
  .pt2 {
    flex: 1;
  }
  .pt3 {
    flex: 1;
  }
}
.right-part {
  position: absolute;
  left: 80%;
  height: 100%;
  width: 20%;
  float: right;
  display: flex;
  flex-direction: column;
  // background: url(../assets/img/pt/rightsidepart.png);
  // opacity: 1;
  // background-size: 150% 100%;
  .pt4 {
    flex: 1;
  }
  .pt5 {
    flex: 1;
  }
  .pt6 {
    flex: 1;
  }
}
</style>