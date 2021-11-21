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
    path: "/skillanalysis",
    name: "skillanalysis",
    component: () => import("@/views/skillanalysis"),
  },
  {
    path: "/data",
    name: "data",
    component: () => import("@/views/data"),
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
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
    path: "/jobdetails",
    name: "jobdetails",
    component: () => import("@/views/datapanel/jobdetails"),
  },
  {
    path: "/salary",
    name: "salary",
    component: () => import("@/views/datapanel/salarystatistics"),
  },
  {
    path: "/education",
    name: "education",
    component: () => import("@/views/datapanel/educationstatistics"),
  },
  {
    path: "/experience",
    name: "experience",
    component: () => import("@/views/datapanel/workexperience"),
  },
  {
    path: "/aggregation",
    name: "aggregation",
    component: () => import("@/views/thematicmap/pointaggregation"),
  },
  {
    path: "/sequential",
    name: "sequential",
    component: () => import("@/views/thematicmap/sequential"),
  },
  {
    path: "/graded",
    name: "graded",
    component: () => import("@/views/thematicmap/gradedcolor"),
  },
  {
    path: "/flow",
    name: "flow",
    component: () => import("@/views/thematicmap/personnelflow"),
  },
  {
    path: "/thermodynamic",
    name: "thermodynamic",
    component: () => import("@/views/thematicmap/thermodynamic"),
  },
  {
    path: "/factor",
    name: "factor",
    component: () => import("@/views/thematicmap/factorstatistics"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
