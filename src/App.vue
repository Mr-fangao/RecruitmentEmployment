<template>
  <div id="app" class="app">
    <Header v-show="$route.name !== 'Home'"></Header>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="less" scoped>
.app {
  background: url(../src/assets/img/b1.png);
    background-size: 100% 100%;
}
</style>
