import api from "./api";

export const createOrder = async (orderData: {
  userId: string;
  products: {
    name: string;
    productId: string;
    quantity: number;
    price: number;
  }[];
  totalPrice: number;
}) => {
  const response = await api.post("/orders", orderData);
  return response.data;
};

export const getOrders = async () => {
  const response = await api.get("/orders");
  return response.data;
};

export const getOrdersById = async (id: string) => {
  const response = await api.get(`/orders/${id}`);
  return response.data;
};

export const deleteOrder = async (id: string) => {
  const response = await api.delete(`/orders/${id}`);
  return response.data;
};
