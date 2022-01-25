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
    path: "/recommend",
    name: "recommend",
    component: () => import("@/views/recommend"),
  },
  {
    path: "/skill",
    name: "skill",
    component: () => import("@/views/skill"),
  },
  {
    path: "/data",
    name: "data",
    component: () => import("@/views/data"),
  },
  {
    path: "/skAnalysis",
    name: "skAnalysis",
    component: () => import("@/views/skAnalysis"),
  },
  {
    path: "/query",
    name: "query",
    component: () => import("@/views/query"),
  },
  {
    path: "/thememap",
    name: "thememap",
    component: () => import("@/views/thememap"),
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
