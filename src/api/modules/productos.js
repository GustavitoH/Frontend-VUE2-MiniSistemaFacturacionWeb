import axios from "axios";
import API_URL from "@/api";

const listaProductos = () => axios.get(`${API_URL}/productos`);
const totalProductos = () => axios.get(`${API_URL}/productos/total`);
const crearProducto = (nuevoProducto) =>
  axios.post(`${API_URL}/productos`, nuevoProducto);
const modificarProducto = (producto) => {
  return axios.put(`${API_URL}/productos/${producto.id}`, producto);
};
const eliminarProducto = (producto) =>
  axios.delete(`${API_URL}/productos/${producto.id}`, producto);

export default {
  listaProductos,
  totalProductos,
  crearProducto,
  modificarProducto,
  eliminarProducto,
};
