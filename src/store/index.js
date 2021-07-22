import Vue from "vue";
import Vuex from "vuex";
import productos from "./modules/productos";
import kardex from "./modules/kardex";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    productos,
    kardex,
  },
  strict: debug,
});
