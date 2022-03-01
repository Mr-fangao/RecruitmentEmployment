<template>
  <div class="skill">
    <div id="map" />
    <div class="left">
      <div class="pt pt1">
        <div class="hd">
          <span>123</span>
        </div>
      </div>
      <div class="pt pt2">
        <div class="hd">
          <span>123</span>
        </div>
        <div id="Chart"></div>
      </div>
    </div>
    <div class="middle">
      <div class="pt pt3">
        <div class="hd">
          <span>123</span>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="pt pt4">
        <div class="hd">
          <span>123</span>
        </div>
      </div>
      <div class="pt pt5">
        <div class="hd">
          <span>123</span>
        </div>
      </div>
      <div class="pt pt6">
        <div class="hd">
          <span>123</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const mapboxgl = require("mapbox-gl");
export default {
  name: "skill",
  data() {
    return {};
  },
  mounted() {
    this.initmap();
  },
  methods: {
    initmap() {
      this.$mapboxgl.accessToken =
        "pk.eyJ1IjoiY2hlbmpxIiwiYSI6ImNrcWFmdWt2bjBtZGsybmxjb29oYmRzZzEifQ.mnpiwx7_cBEyi8YiJiMRZg";
      this.map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/chenjq/cl010ychv001214pdpa5xyq5a",
        center: [105, 35],
        zoom: 3.5,
      });
    },
  },
};
</script>

<style lang="less" scoped>
#map {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.skill {
  position: fixed;
  height: 100%;
  width: 100%;
}
.left {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 92%;
  width: 32%;
  display: flex;
  flex-direction: column;
  .pt1 {
    width: 100%;
    height: 30%;
  }
  .pt2 {
    width: 100%;
    height: 70%;
  }
}
.middle {
  position: absolute;
  bottom: 0px;
  right: 32%;
  height: 39%;
  width: 34%;
  float: left;
  display: flex;
  .pt3 {
    width: 90%;
    height: 75%;
  }
}
.right {
  position: absolute;
  top: 0px;
  right: 0px;
  height: 92%;
  width: 32%;
  float: left;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  .pt4 {
    width: 95%;
    height: 30%;
  }
  .pt5 {
    width: 95%;
    height: 30%;
  }
  .pt6 {
    width: 95%;
    height: 30%;
  }
}
.pt {
  flex: 1;
  width: 100%;
  height: 100%;
  margin: 10px 0px 0px 10px;
  background: url(../assets/img/pt/ptbg.png) no-repeat;
  background-size: 100% 100%;
  .hd {
    display: flex;
    width: 65%;
    margin: 10px;
    height: 28px;
    background: url(../assets/img/pt/pt_title1.png) no-repeat;
    background-size: 100% 100%;
    span {
      font-size: 18px;
      margin-left: 32px;
      line-height: 30px;
      font-size: 18px;
      color: #fff;
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #38e9e0,
        0 0 70px #0cf3f3;
    }
  }
}
</style>