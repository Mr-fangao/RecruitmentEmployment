<template>
  <div class="query">
    <div class="left">1</div>
    <div class="middle">
      <div id="map"></div>
    </div>
    <div class="right">5</div>
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
.query {
  display: flex;
  height: calc(100% - 50px);
  background-color: transparent;
}
</style>