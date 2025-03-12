import api from "./api";

export const getProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const getProductsById = async (id: string) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};
