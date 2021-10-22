<template>
  <div id="app" class="app">
    <Header v-show="$route.name!=='Home'"></Header>
<!--    <img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style lang="less" scoped>
.app{
  background:url(../src/assets/img/mainbg.jpg);
}
</style>