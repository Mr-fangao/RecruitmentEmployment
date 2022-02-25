<template>
  <div class="skill">
    <div id="map"></div>
    <div class="left">
      <div class="pt 1"></div>
      <div class="relation">
        <div class="hd">
          <span>123</span>
        </div>
        <div id="Chart"></div>
      </div>
    </div>
    <div class="right">
      <div class="part">
        <div class="pt 4">
          <div class="hd">
            <span>123</span>
          </div>
        </div>
        <div class="pt 5">
          <div class="hd">
            <span>123</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      mapboxgl.accessToken =
        "pk.eyJ1IjoiY2hlbmpxIiwiYSI6ImNrcWFmdWt2bjBtZGsybmxjb29oYmRzZzEifQ.mnpiwx7_cBEyi8YiJiMRZg";
      var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox:/ylesenjq/cl010ychv001214pdpa5xyq5a",
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
  z-index: 0;
    margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
.skill {
  position: fixed;
  display: flex;
  height: calc(100% - 50px);
  background-color: transparent;
  .left {
    position: absolute;z-index: 999;
    top: 1;
    display: flex;
    height: 100%;
    width: 40%;
    flex-direction: column;
    .pt1 {
      width: 100%;
      height: 30%;
    }
    .relation {
      margin-bottom: 15px;
      width: 100%;
    }
  }
  .right {
    position: absolute;
    z-index: 999;
    display: flex;
    top: 0%;
    height: 100%;
    width: 60%;
    flex-direction: column;
    justify-items: center;
    .part {
      height: 30%;
      width: 100%;
      .pt4 {
        width: 50%;
        height: 100%;
      }
    }
  }
  .pt {
    height: 215px;
    margin-top: 15px;
    width: 100%;
    background: url(../assets/img/pt/pt_bg.png) no-repeat;
    background-size: 100% 100%;
    .hd {
      display: flex;
      width: 100%;
      height: 30px;
      margin-top: 5px;
      background: url(../assets/img/pt/h_bg.png) no-repeat;
      background-size: 50% 100%;
      span {
        margin-left: 20px;
        line-height: 30px;
        font-size: 18px;
        color: #fff;
      }
    }
  }
}
</style>