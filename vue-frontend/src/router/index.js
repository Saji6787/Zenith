import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import ProfileView from "../views/ProfileView.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: LoginView },
  { path: "/register", component: RegisterView },
  {
    path: "/profile",
    component: ProfileView,
    meta: { requiresAuth: true }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// proteksi halaman profile
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (to.meta.requiresAuth && !token) {
    next("/login");
  } else {
    next();
  }
});

export default router;
