import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/pages/HomePage"),
  },
  { path: "/Detail", 
    name: "DetailPage", 
    component: () => import("@/pages/DetailPage") },
];

const router = createRouter({
  history: createWebHistory(),
    routes,
});

export default router;
