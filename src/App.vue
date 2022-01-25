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
  background: #021D33;
}
</style>
