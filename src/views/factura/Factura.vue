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
      <div class="d-flex bd-highlight mb-3">
        <div class="p-2">
          <label for="inputProducto">
            Número de factura: <span>{{ 123 }}</span>
          </label>
        </div>
      </div>
      <div class="d-flex bd-highlight mb-6">
        <div class="form-floating col-md-6">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="none"
          />
          <label for="floatingInput">Cliente</label>
        </div>
        <div class="form-floating col-md-6">
          <input
            type="date"
            class="form-control"
            id="floatingInput"
            placeholder="none"
          />
          <label for="floatingInput">Fecha</label>
        </div>
      </div>

      <template>
        <vuetable
          ref="vuetable"
          :fields="['Producto', 'Cantidad', 'Precio']"
        ></vuetable>
      </template>
      <div class="d-flex justify-content-end">
        <div class="col-md-3">
          <ul class="list-group">
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-center
              "
            >
              Iva
              <span class="">{{ 0 }}</span>
            </li>
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-center
              "
            >
              Subtotal
              <span class="">{{ 0 }}</span>
            </li>
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-center
              "
            >
              Total
              <span class="rounded-pill">{{ 0 }}</span>
            </li>
          </ul>
        </div>
      </div>

      <button type="button" class="btn btn-success float-right m-2">
        Guardar
      </button>
      <button type="button" class="btn btn-primary float-right m-2">
        Editar
      </button>
    </form>
  </div>
</template>
<script>
import Vuetable from "vuetable-2";
export default {
  name: "IndexFactura",
  components: { Vuetable },
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
};
</script>
