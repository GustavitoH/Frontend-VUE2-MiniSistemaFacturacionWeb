<template>
  <!--Cantidad de roductos-->
  <div class="w-100">
    <div class="d-flex m-auto w-100">
      <div class="card shadow mt-4 m-2 h-25 w-25" style="border: none">
        <div class="card-body">
          <h2 class="card-subtitle text-muted" style="font-size: 70px">
            {{ totalProductos.TOTAL }}
          </h2>
        </div>
        <div class="card-header" style="background-color: #e7e7e7a1">
          <h5 class="card-title">
            <a href="/productos" style="text-decoration: none; color: #3b5672">
              PRODUCTOS
            </a>
          </h5>
        </div>
      </div>
      <!--Productos más vendidos-->
      <div class="card shadow mt-4 m-2 h-25 w-25" style="border: none">
        <div class="d-flex card-body justify-content-end">
          <h2
            class="card-subtitle text-muted"
            style="margin-right: 120px; font-size: 70px"
          >
            {{ masVendidos[1] }}
          </h2>
          <h5
            class="card-subtitle text-muted mt-4 me-4"
            style="font-size: 20px"
          >
            {{ masVendidos[0] }}
          </h5>
        </div>
        <div class="card-header">
          <h5 class="card-title">
            <a href="/productos" style="text-decoration: none; color: #3b5672">
              MÁS VENDIDO
            </a>
          </h5>
        </div>
      </div>
      <!--Productos menos vendidos-->
      <div class="card shadow mt-4 m-2 h-25 w-25" style="border: none">
        <div class="d-flex card-body justify-content-end">
          <h2
            class="card-subtitle text-muted"
            style="margin-right: 70px; font-size: 70px"
          >
            {{ menosVendidos[1] }}
          </h2>
          <h5
            class="card-subtitle text-muted mt-4 me-2"
            style="font-size: 20px"
          >
            {{ menosVendidos[0] }}
          </h5>
        </div>
        <div class="card-header">
          <h5 class="card-title">
            <a href="/productos" style="text-decoration: none; color: #3b5672">
              MENOS VENDIDO
            </a>
          </h5>
        </div>
      </div>
      <!--Facturado en el día-->
      <div class="card shadow mt-4 m-2 h-25 w-25" style="border: none">
        <div class="d-flex card-body justify-content-end">
          <h2
            class="card-subtitle text-muted"
            style="margin-right: 70px; font-size: 70px"
          >
            {{ totalVendido.TOTAL_VENTA_HOY }}
          </h2>
          <h5
            class="card-subtitle text-muted mt-4 me-4"
            style="font-size: 30px"
          >
            $
          </h5>
        </div>
        <div class="card-header">
          <h5 class="card-title">
            <a href="/factura" style="text-decoration: none; color: #3b5672">
              FACTURADO EN EL DÍA
            </a>
          </h5>
        </div>
      </div>
    </div>
    <!--Tabla Kardex-->
    <div>
      <div class="card shadow m-auto mt-2 w-100" style="border: none;">
        <div class="card-body justify-content-end">
          <div class="p-4">
            <List :listaKardex="listaKardex" :mostrar="false" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import List from "@/views/kardex/List";

export default {
  name: "Dashboard",
  components: {
    List,
  },
  created() {
    this.loadTotalProductos();
    this.loadKardex();
  },
  computed: {
    ...mapState({
      totalProductos: (state) => state.productos.listaProductos[0],
      masVendidos: (state) =>
        state.productos.listaMasVendidos[0].PRODUCTO_MAS_VENDIDO.split([","]),
      menosVendidos: (state) =>
        state.productos.listaMenosVendidos[0].PRODUCTO_MENOS_VENDIDO.split([
          ",",
        ]),
      totalVendido: (state) => state.productos.totalVendido[0],
      listaKardex: (state) => state.kardex.listaKardex,
    }),
  },
  methods: {
    ...mapActions("productos", [
      "getTotalProductos",
      "getMasVendido",
      "getMenosVendido",
      "getTotalVendido",
    ]),
    loadTotalProductos() {
      this.getTotalProductos();
      this.getMasVendido();
      this.getMenosVendido();
      this.getTotalVendido();
    },
    ...mapActions("kardex", ["getListaKardex"]),
    loadKardex() {
      this.getListaKardex();
    },
  },
};
</script>
