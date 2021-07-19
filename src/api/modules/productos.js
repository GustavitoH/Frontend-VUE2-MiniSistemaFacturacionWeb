import axios from "axios";
import API_URL from "@/api";

const listaProductos = () => axios.get(`${API_URL}/productos`);

export default {
  listaProductos,
};
