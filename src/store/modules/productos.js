import productos from "@/api/modules/productos";
const state = {
  listaProductos: [],
};
const actions = {
  getListaProductos(context) {
    return productos.listaProductos().then((response) => {
      context.commit("GET_PRODUCTOS", response.data);
    });
  },
  crearProducto(context, nuevoProducto) {
    return productos.crearProducto(nuevoProducto).then((response) => {
      context.commit("CREAR_PRODUCTO", response.data.producto);
      return response.data;
    });
  },
};
const mutations = {
  GET_PRODUCTOS(state, payload) {
    state.listaProductos = payload;
  },
  CREAR_PRODUCTO(state, payload) {
    state.listaProductos.push(payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
