import { createRouter, createWebHistory } from "vue-router";
import Authenticate from "../components/Authenticate.vue";
// import Dashboard from "../components/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Authenticate",
      component: Authenticate,
    },
    {
      path: "/Dashboard",
      name: "Dashboard",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/Dashboard.vue"),
    },
  ],
});

export default router;
