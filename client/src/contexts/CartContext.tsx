import { createContext, useState, ReactNode, useEffect } from "react";
import { ProductModel } from "../models/ProductModel";
import { useAuth } from "../hooks/useAuth";

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
  const { user } = useAuth();
  const [cart, setCart] = useState<CartProduct[]>([]);

  useEffect(() => {
    if (user && user.user._id) {
      const storedCart = localStorage.getItem(`cart_${user.user._id}`);
      setCart(storedCart ? JSON.parse(storedCart) : []);
    } else {
      setCart([]);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.user._id) {
      localStorage.setItem(`cart_${user.user._id}`, JSON.stringify(cart));
    }
  }, [cart, user]);

  const addToCart = (product: CartProduct) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p._id === product._id);
      let updatedCart;
      if (existingProduct) {
        updatedCart = prevCart.map((p) =>
          p._id === product._id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }
      return updatedCart;
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
