<template>

  <div class="com-timemap">
    <iframe
      src="./static/timemap.html"
      frameborder="0"
      width="100%"
      height="100%"
      scrolling="auto"
    ></iframe>
    <div id="map">
      
    </div>
  </div>
</template>
<script>
export default {
  name: "timemap",
  mounted() {
   
  },
  methods: {
    
     
    },
};
</script>

<style scoped lang="less">
.com-multimap {
  height: 100%;
}
#map {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.map-overlay {
  position: absolute;
  bottom: 0;
  right: 0;
  background: #fff;
  margin-right: 20px;
  font-family: Arial, sans-serif;
  overflow: auto;
  border-radius: 3px;
}
</style>