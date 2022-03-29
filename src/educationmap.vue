<template>
  <div class="themap">
    <iframe
      src="./static/GraphEduc.html"
      frameborder="0"
      width="100%"
      height="100%"
      scrolling="auto"
    ></iframe>
  </div>
</template>
<script>
// import d from '../pu'
export default {
  data() {
    return {
      // mapurl:'/GraphEduc.html'
    };
  },
  methods: {},
  created() {},
};
</script>
<style lang="less" scoped>
.themap{
  width: 100%;
  height: calc(100% - 45px);
}
</style>