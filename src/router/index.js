import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/auth/Login.vue";
import SingupVue from "../views/auth/Singup.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/singup",
    name: "singup",
    component: SingupVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
