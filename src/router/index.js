import Vue from "vue";
import VueRouter from "vue-router";
import Productos from "@/views/productos/Index";
import Factura from "@/views/factura/Factura";
import Dashboard from "@/views/dashboard/Dashboard";
import Kardex from "@/views/kardex/Index";
import ListaFactura from "@/views/factura/ListaFactura";

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
  {
    path: "/Ventas",
    name: "listaFactura",
    component: ListaFactura,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/kardex",
    name: "kardex",
    component: Kardex,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
