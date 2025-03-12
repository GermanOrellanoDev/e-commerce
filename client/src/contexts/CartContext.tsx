import { createContext, useState, ReactNode } from "react";
import { ProductModel } from "../models/ProductModel";

export interface CartProduct extends ProductModel {
  quantity: number;
}

interface CartContextType {
  cart: CartProduct[];
  addToCart: (product: CartProduct) => void;
  removeFromCart: (productId: string) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const addToCart = (product: CartProduct) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p._id === product._id);
      if (existingProduct) {
        return prevCart.map((p) =>
          p._id === product._id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p._id === productId);
      if (!existingProduct) return prevCart;
      if (existingProduct.quantity > 1) {
        return prevCart.map((p) =>
          p._id === productId ? { ...p, quantity: p.quantity - 1 } : p
        );
      } else {
        return prevCart.filter((p) => p._id !== productId);
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
