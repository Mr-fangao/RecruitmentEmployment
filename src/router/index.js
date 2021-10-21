import Vue from 'vue'
import Router from 'vue-router'
import login from "../components/views/login";
import test from "../components/views/test";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
      meta: {
        showNav: true
      }
    },
    {
      path:'/test',
      name:'test',
      component:test
    }
  ]
})
