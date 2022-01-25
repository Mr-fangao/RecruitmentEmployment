// import { createApp } from "vue";
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
// import App from "./App.vue";
// import router from "./router";
// import store from "./store";
// import "./assets/css/global.css";
// import "./assets/css/globalpt.css";

// // import mapBoxGl from 'mapbox-gl';
// // Vue.prototype.mbgl = mapBoxGl;
// createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/css/global.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入echarts
import * as echarts from 'echarts';
import 'echarts-gl'
Vue.prototype.$echarts = echarts

import mapBoxGl from 'mapbox-gl'
Vue.prototype.$mapboxgl = mapBoxGl

Vue.config.productionTip = false
Vue.use(ElementUI);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
