<template>
  <div class="card mt-4 h-100 w-25" style="border: none">
    <div class="card-body">
      <h1 class="card-subtitle mb-2 text-muted pt-5">
        {{ totalProductos[0].TOTAL }}
      </h1>
      <h5 class="card-title"><strong>PRODUCTOS</strong></h5>
      <span href="#" class="card-link">
        <router-link class="nav-link" :to="{ name: 'productos' }">
          Producto
        </router-link></span
      >
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Dashboard",
  computed: {
    ...mapState({
      totalProductos: (state) => state.productos.listaProductos,
    }),
  },

  created() {
    this.loadTotalProductos();
  },
  methods: {
    ...mapActions("productos", ["getTotalProductos"]),
    loadTotalProductos() {
      this.getTotalProductos();
    },
  },
};
</script>
