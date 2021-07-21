<template>
  <div class="w-50 m-auto shadow p-3 mb-5 bg-body rounded">
    <h1 class="text-lg-left">Productos</h1>
    <nav class="navbar navbar-expand-lg navbar-dark bg-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Productos<span class="sr-only"></span
            ></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">/ Lista</a>
          </li>
        </ul>
      </div>
    </nav>
    <h3 class="text-left py-3 m-0">Crear Producto</h3>
    <form class="justify-content-center">
      <div class="d-flex bd-highlight mb-3">
        <div class="p-2 bd-highlight col-md-6">
          <label for="inputProducto">producto</label>
          <input
            type="text"
            class="form-control"
            id="inputProducto"
            v-model="newProducto.producto"
            required
          />
        </div>
        <div class="p-2 bd-highlight col-md-6">
          <label for="inputPrecio">Precio</label>
          <input
            type="number"
            class="form-control"
            id="inputPrecio"
            v-model="newProducto.precio"
            required
          />
        </div>
      </div>
      <div class="d-flex bd-highlight mb-3">
        <div class="p-2 bd-highlight col-md-6">
          <label for="inputDescripcion">Descripcion</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail"
            v-model="newProducto.descripcion"
          />
        </div>
        <div class="p-2 bd-highlight col-md-6">
          <label for="inputCantidad">Cantidad</label>
          <input
            type="number"
            class="form-control"
            id="inputCantidad"
            v-model="newProducto.cantidad"
            required
          />
        </div>
      </div>

      <button
        type="button"
        class="btn btn-success float-right m-2"
        @click="crearNuevoProducto()"
      >
        Guardar
      </button>
      <button
        type="button"
        class="btn btn-primary float-right m-2"
        v-if="buttonEdit"
        @click="editarProducto()"
      >
        Editar
      </button>
    </form>
    <List :listaProductos="listaProductos" />
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import swal from "sweetalert";
import List from "@/views/productos/List";
export default {
  name: "IndexProductos",
  data() {
    return {
      buttonEdit: false,
      newProducto: {
        id: 0,
        producto: "",
        precio: 0,
        descripcion: "",
        cantidad: 0,
      },
      producto: {},
    };
  },
  components: {
    List,
  },
  computed: {
    ...mapState({
      listaProductos: (state) => state.productos.listaProductos,
    }),
  },
  created() {
    this.loadProductos();
  },
  watch: {
    "newProducto.producto": function () {
      this.loadProductos();
    },
  },
  methods: {
    ...mapActions("productos", [
      "getListaProductos",
      "crearProducto",
      "modificarProducto",
      "eliminarProducto",
    ]),
    loadProductos() {
      this.getListaProductos();
    },
    crearNuevoProducto() {
      this.crearProducto(this.newProducto).then((res) => {
        swal("Buen Trabajo!", res.message, "success");
        this.newProducto.producto = "";
        this.newProducto.precio = 0;
        this.newProducto.descripcion = "";
        this.newProducto.cantidad = 0;
      });
    },
    editarProducto() {
      this.modificarProducto(this.newProducto).then((res) => {
        swal("Buen Trabajo!", res.message, "success");
        this.newProducto.producto = "";
        this.newProducto.precio = 0;
        this.newProducto.descripcion = "";
        this.newProducto.cantidad = 0;
        this.buttonEdit = false;
      });
    },
  },
};
</script>
