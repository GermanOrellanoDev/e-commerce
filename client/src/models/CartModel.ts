export interface CartModel {
  _id: string;
  userId: string;
  product: {
    name: string;
    productId: string;
    quantity: number;
    price: number;
  };
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}
