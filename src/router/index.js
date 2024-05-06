import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

// createRouter：创建router
const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
