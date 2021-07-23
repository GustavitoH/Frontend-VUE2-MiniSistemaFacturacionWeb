import Producto from '@/views/productos/Producto';
<template>
  <div class="w-100 shadow p-3 mb-5 bg-body rounded">
    <h1 class="text-lg-start">Factura</h1>
    <nav class="navbar navbar-expand-lg navbar-dark bg-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <h6 class="nav-link" href="#">
              Facturación <span class="sr-only">/</span>
            </h6>
          </li>
          <li class="nav-item">
            <h6 class="nav-link" href="#">Lista</h6>
          </li>
        </ul>
      </div>
    </nav>
    <h3 class="text-left py-3 m-0">Crear Factura</h3>
    <form class="justify-content-center">
      <div class="d-flex bd-highlight mb-6 ms-5">
        <div class="form-floating col-md-6 me-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="none"
            v-model="cliente"
          />
          <label for="floatingInput">Cliente</label>
        </div>
        <div class="form-floating col-md-5">
          <input
            type="date"
            class="form-control"
            id="floatingInput"
            placeholder="none"
            disabled
          />
          <label for="floatingInput">Fecha</label>
        </div>
      </div>
      <div class="d-flex bd-highlight mb-6 ms-5 m-2">
        <div class="form-floating col-md-2 pe-2">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="none"
            v-model="nuevoProducto.ID"
            disabled
          />
          <label for="floatingInput">ID</label>
        </div>
        <div class="form-floating col-md-3 pe-2">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="none"
            v-model="nuevoProducto.PRODUCTO"
            disabled
          />
          <label for="floatingInput">Producto</label>
        </div>
        <button
          type="button"
          class="btn btn-outline-success me-3 ps-5 pe-5"
          @click="modal.show()"
        >
          +
        </button>
        <div class="form-floating col-md-4 pe-2">
          <input
            type="number"
            class="form-control"
            id="floatingInput"
            placeholder="none"
            v-model="cantidad"
          />
          <label for="floatingInput">Cantidad</label>
        </div>
        <button
          type="button"
          class="btn btn-outline-primary me-2 ps-4 pe-4"
          @click="agregar()"
        >
          Agregar
        </button>
      </div>
      <!-- Modal productos -->
      <div class="modal fade" ref="modalProd" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalProdLabel">Producto</h5>
              <button
                type="button"
                class="btn-close"
                @click="modal.hide()"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form class="justify-content-center text-start">
                <div class="d-flex bd-highlight mb-3">
                  <List :listaProductos="listaProductos" />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                @click="modal.hide()"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Tabla detalles-->
      <div class="container mt-5 ms-2">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">PRODUCTO</th>
              <th scope="col">CANTIDAD</th>
              <th scope="col">VALOR UNIT</th>
              <th scope="col">IMPORTE</th>
              <th scope="col">ELIMINAR</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-center"
              v-for="producto in arrayProductos"
              :key="producto.productoIdproducto"
            >
              <td v-text="producto.productoIdproducto"></td>
              <td v-text="producto.nombreproducto"></td>
              <td v-text="producto.cantidad"></td>
              <td v-text="producto.valorunit"></td>
              <td v-text="producto.importe"></td>

              <td>
                <div>
                  <button
                    type="button"
                    class="btn btn-danger text-center"
                    @click="eliminarItem(producto)"
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="d-flex justify-content-end me-5">
          <div class="p-2 bd-highlight col-md-2">
            <input
              type="number"
              class="form-control"
              placeholder="Subtotal"
              id="inputSubtotal"
              v-model="subtotal"
              disabled
            />
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-secondary float-right">
        Cancelar
      </button>
      <button
        type="button"
        class="btn btn-success float-right m-2"
        @click="crear()"
      >
        Guardar
      </button>
    </form>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import axios from "axios";
import API_URL from "@/api";
import swal from "sweetalert";
import { Modal } from "bootstrap";
import List from "@/views/factura/List";

export default {
  name: "IndexFactura",
  data() {
    return {
      arrayProductos: [],
      productoIdproducto: 0,
      nombreproducto: "",
      cantidad: 0,
      valorunit: 0,
      importe: 0,
      subtotal: 0,
      total: 0,
      id: 0,
      cliente: "",
      nuevoProducto: {
        id: 0,
        producto: "",
        precio: 0,
        cantidad: 0,
      },
      modal: null,
    };
  },
  created() {
    this.loadProductos();
    this.$store.dispatch("facturas/getListaFacturas");
    this.$store.dispatch("detalleFacturas/getListaDetalles");
    this.$store.dispatch("productos/getListaProductos");
  },
  components: {
    List,
  },
  computed: {
    ...mapState({
      listaProductos: (state) => state.productos.listaProductos,
      listaFacturas: (state) => state.facturas.listaFacturas,
      listaDetalle: (state) => state.detalleFacturas.listaDetalle,
      IdDetalle: (state) => state.detalleFacturas.listaIdFactura,
    }),
  },
  mounted() {
    this.modal = new Modal(this.$refs.modalProd);
  },
  methods: {
    ...mapActions("detalleFacturas", ["getIdDetalle"]),

    loadProductos() {
      this.getIdDetalle();
    },
    agregar() {
      const produ = {
        productoIdproducto: this.nuevoProducto.ID,
        nombreproducto: this.nuevoProducto.PRODUCTO,
        cantidad: parseInt(this.cantidad),
        valorunit: this.nuevoProducto.PRECIO,
        subtotal: this.subtotales(),
        total: this.subtotales() + this.subtotales() * 0.12,
        importe: parseFloat(this.nuevoProducto.PRECIO) * this.cantidad,
      };

      this.arrayProductos.push(produ);
      this.nuevoProducto.ID = 0;
      this.nuevoProducto.PRODUCTO = "";
      this.nuevoProducto.PRECIO = 0;
      this.subtotal = this.subtotales();
      this.total = this.subtotales() + this.subtotales() * 0.12;

      this.cantidad = 0;
    },
    subtotales() {
      let suma = 0;
      for (let i = 0; i < this.arrayProductos.length; i = 1 + i) {
        const element = this.arrayProductos[i].importe;
        suma += parseFloat(element);
      }
      return suma;
    },

    eliminarItem(producto) {
      const pos = this.arrayProductos.indexOf(producto);
      this.subtotal -= this.arrayProductos[pos].importe;
      this.arrayProductos.splice(pos, 1);
    },

    crear() {
      this.nuevaFactura = {
        cliente: this.cliente,
        subtotal: this.subtotal,
        total: this.total,
      };
      this.$store
        .dispatch("facturas/crearFactura", this.nuevaFactura)
        .then((res) => {
          swal("Buen Trabajo!", res.message, "success");
          axios.get(`${API_URL}/detallefacturas/id`).then((res) => {
            this.id = res;
            console.log(this.id.data[0].ID);
            for (let i = 0; i < this.arrayProductos.length; i = 1 + i) {
              this.nuevoItem = {
                id_factura: this.id.data[0].ID,
                id_producto: this.arrayProductos[i].productoIdproducto,
                cantidad: this.arrayProductos[i].cantidad,
                preciounit: this.arrayProductos[i].valorunit,
                precio: this.arrayProductos[i].valorunit,
                total:
                  this.arrayProductos[i].cantidad *
                  this.arrayProductos[i].valorunit,
              };
              this.$store
                .dispatch("detalleFacturas/crearDetalle", this.nuevoItem)
                .then((res) => {
                  swal("Buen Trabajo!", res.message, "success");
                });
            }
          });
        });
    },
  },
};
</script>
