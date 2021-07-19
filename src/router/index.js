import Vue from "vue";
import VueRouter from "vue-router";
import Productos from "@/views/productos/Index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/productos",
    name: "productos",
    component: Productos,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
