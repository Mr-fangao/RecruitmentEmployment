<template>
  <div id="app">
    <Header v-show="$route.name!=='login'"></Header>
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

<style>

</style>
