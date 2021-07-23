<template>
  <!--Cantidad de roductos-->
  <div class="w-100">
    <div class="d-flex m-auto w-100">
      <div class="card shadow mt-4 m-2 h-25 w-25" style="border: none">
        <div class="card-body">
          <h2 class="card-subtitle text-muted" style="font-size: 70px">
            {{ totalproductos }}
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
            {{ this.masvendido[1] }}
          </h2>
          <h5
            class="card-subtitle text-muted mt-4 me-4"
            style="font-size: 20px"
          >
            {{ this.masvendido[0] }}
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
            {{ menosvendidos[1] }}
          </h2>
          <h5
            class="card-subtitle text-muted mt-4 me-2"
            style="font-size: 20px"
          >
            {{ menosvendidos[0] }}
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
            style="margin-right: 20px; font-size: 70px"
          >
            {{ totalventas }}
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
      <div class="card shadow m-auto mt-2 w-100" style="border: none">
        <div class="card-body justify-content-end">
          <h2 class="card-subtitle text-muted">hola</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import API_URL from "@/api";
export default {
  name: "Dashboard",
  data() {
    return {
      totalproductos: 0,
      masvendido: 0,
      menosvendidos: 0,
      totalventas: 0,
    };
  },
  created() {
    axios.get(`${API_URL}/productos/total`).then((res) => {
      this.totalproductos = res.data[0].TOTAL;
    });
    axios.get(`${API_URL}/productos/masvendidos`).then((res) => {
      this.masvendido = res.data[0].PRODUCTO_MAS_VENDIDO.split([","]);
    });
    axios.get(`${API_URL}/productos/menosvendidos`).then((res) => {
      this.menosvendidos = res.data[0].PRODUCTO_MENOS_VENDIDO.split([","]);
    });
    axios.get(`${API_URL}/productos/menosvendidos`).then((res) => {
      this.menosvendidos = res.data[0].PRODUCTO_MENOS_VENDIDO.split([","]);
    });
    axios.get(`${API_URL}/productos/totalventas`).then((res) => {
      this.totalventas = res.data[0].TOTAL_VENTA_HOY;
    });
  },
};
</script>
