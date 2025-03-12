export interface ProductModel {
  _id: string;
  name: string;
  description?: string;
  price?: number;
  category: string;
  image?: string;
  stock?: number;
  createdAt: Date;
}
