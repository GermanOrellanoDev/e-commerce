import api from "./api";

export const getOrders = async () => {
  const response = await api.get("/orders");
  return response.data;
};

export const getOrdersById = async (id: string) => {
  const response = await api.get(`/orders/${id}`);
  return response.data;
};
