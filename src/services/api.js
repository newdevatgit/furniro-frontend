import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/products", // backend URL
});

export const getProducts = (params) => API.get("/", { params });
export const addProduct = (data) => API.post("/", data);
export const updateProduct = (id, data) => API.put(`/${id}`, data);
export const deleteProduct = (id) => API.delete(`/${id}`);
