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


  // {
  //   path: "/spatial",
  //   name: "spatial",
  //   component: () => import("@/views/spatial"),
  // },
  // {
  //   path: "/skill",
  //   name: "skill",
  //   component: () => import("@/views/skill"),
  // },
  // {
  //   path: "/map",
  //   name: "map",
  //   component: () => import("@/views/map"),
  // },
  // {
  //   path: "/analysis",
  //   name: "analysis",
  //   component: () => import("@/views/analysis"),
  // },
  // {
  //   path: "/employment",
  //   name: "employment",
  //   component: () => import("@/views/employment"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
