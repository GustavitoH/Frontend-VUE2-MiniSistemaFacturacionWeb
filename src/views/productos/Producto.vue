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
      <button type="button" class="btn btn-outline-primary btn-block m-1">
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
};
</script>
