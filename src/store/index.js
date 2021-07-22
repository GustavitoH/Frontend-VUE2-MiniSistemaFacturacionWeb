import Vue from "vue";
import Vuex from "vuex";
import productos from "./modules/productos";
import facturas from "./modules/facturas";
import detalleFacturas from "./modules/detalleFacturas";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    productos,
    facturas,
    detalleFacturas,
  },
  strict: debug,
});
