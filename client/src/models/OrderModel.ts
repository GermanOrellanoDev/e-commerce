export interface OrderModel {
  _id: string;
  userId: string;
  product: {
    name: string;
    productId: string;
    quantity: number;
    price: number;
  };
  totalPrice: number;
  status: "pendiente" | "procesando" | "retirado" | "entregado" | "cancelado";
  createdAt: Date;
  updatedAt: Date;
}
