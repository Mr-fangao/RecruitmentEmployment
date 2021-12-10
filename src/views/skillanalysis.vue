<template>
  <div class="mainpage">
    <mapbox-test/>
  </div>
</template>

<script>
import mapboxtest from "../components/map/maptest.vue";
export default {
  name: "analysis",
  components: {
    mapboxtest,
  },
};
</script>

<style scoped>
  .mainpage{
    width: 100%;
    height: 100%;
  }
</style>