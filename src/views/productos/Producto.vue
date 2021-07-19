<template>
  <div class="list-group-item list-group-item-action">
    <div class="text-left float-start">
      <div class="d-flex justify-content-between">
        <h5 class="mb-1">
          <strong>{{ producto.ID }}</strong> || {{ producto.PRODUCTO }}
        </h5>
      </div>
      <small class="d-flex justify-content-left text-muted">
        Descripción:<span class="badge bg-warning text-dark">{{
          producto.DESCRIPCION
        }}</span></small
      >
      <small class="d-flex justify-content-left text-muted mt-1">
        Stock:<span class="">
          {{ producto.CANTIDAD }}
        </span></small
      >
      <small class="d-flex text-muted mt-1">
        Precio:<span class="">
          {{ producto.PRECIO }}
        </span></small
      >
    </div>
    <div class="btn-group-vertical float-end mt-1">
      <button
        type="button"
        class="btn btn-outline-primary btn-block m-1"
        @click="modifarProducto()"
      >
        Editar
      </button>
      <button type="button" class="btn btn-outline-danger btn-block m-1">
        Eliminar
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Producto",
  props: {
    producto: Object,
  },
  methods: {
    modifarProducto() {
      this.$parent.$parent.producto = { ...this.producto };
      this.$parent.$parent.newProducto.producto =
        this.$parent.$parent.producto.PRODUCTO;
      this.$parent.$parent.newProducto.precio =
        this.$parent.$parent.producto.PRECIO;
      this.$parent.$parent.newProducto.descripcion =
        this.$parent.$parent.producto.DESCRIPCION;
      this.$parent.$parent.newProducto.cantidad =
        this.$parent.$parent.producto.CANTIDAD;
      this.$parent.$parent.newProducto.id = this.$parent.$parent.producto.ID;
      this.$parent.$parent.buttonEdit = true;
    },
  },
};
</script>
