import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      showNav: true,
    },
  },
  {
    path: "/jobsearch",
    name: "jobsearch",
    component: () => import("@/views/jobsearch"),
  },
  {
    path: "/data",
    name: "data",
    component: () => import("@/views/data"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/analysis",
    name: "analysis",
    component: () => import("@/views/skillanalysis"),
  },
  {
    path: "/query",
    name: "query",
    component: () => import("@/views/spatialquery"),
  },
  {
    path: "/map",
    name: "map",
    component: () => import("@/views/thematicmap"),
  },
  {
    path: "/datapanel",
    name: "datapanel",
    component: () => import("@/views/datapanel"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
