import axios from "axios";
import API_URL from "@/api";

const listaFactura = () => axios.get(`${API_URL}/facturas`);
const crearFactura = (nuevaFactura) =>
  axios.post(`${API_URL}/facturas`, nuevaFactura);

export default {
  listaFactura,
  crearFactura,
};
