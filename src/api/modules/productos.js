import axios from "axios";
import API_URL from "@/api";

const listaProductos = () => axios.get(`${API_URL}/productos`);
const crearProducto = (nuevoProducto) =>
  axios.post(`${API_URL}/productos`, nuevoProducto);
const modificarProducto = (producto) => {
  return axios.put(`${API_URL}/productos/${producto.id}`, producto);
};
export default {
  listaProductos,
  crearProducto,
  modificarProducto,
};
