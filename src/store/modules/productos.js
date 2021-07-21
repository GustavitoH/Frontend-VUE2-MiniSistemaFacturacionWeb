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
  modificarProducto(context, producto) {
    return productos.modificarProducto(producto).then((response) => {
      context.commit("MODIFICAR_PRODUCTO", producto);
      return response.data;
    });
  },
  eliminarProducto(context, producto) {
    return productos.eliminarProducto(producto).then((response) => {
      context.commit("ELIMINAR_PRODUCTO", producto);
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
  MODIFICAR_PRODUCTO(state, payload) {
    const array = state.listaProductos;
    const idUpdateProd = (value) => {
      return value.id === payload.id;
    };
    state.listaProductos[array.findIndex(idUpdateProd)] = payload;
  },
  ELIMINAR_PRODUCTO(state, payload) {
    state.listaProductos.splice(state.listaProductos.indexOf(payload.id), 1);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
