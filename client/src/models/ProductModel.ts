export interface ProductModel {
  _id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
  image?: string;
  quantity?: number;
  stock?: number;
  createdAt: Date;
}
