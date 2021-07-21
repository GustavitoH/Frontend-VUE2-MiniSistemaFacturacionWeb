import Vue from "vue";
import VueRouter from "vue-router";
import Productos from "@/views/productos/Index";
import Factura from "@/views/factura/Factura";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Productos,
  },
  {
    path: "/productos",
    name: "productos",
    component: Productos,
  },
  {
    path: "/productos/:id",
    name: "modificarProducto",
    component: Productos,
  },
  {
    path: "/productos/:id",
    name: "eliminarProducto",
    component: Productos,
  },
  {
    path: "/factura",
    name: "factura",
    component: Factura,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
