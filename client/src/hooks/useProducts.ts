import { useState, useEffect } from "react";
import api from "../services/api";
import { ProductModel } from "../models/ProductModel";

export const useProducts = () => {
  const [allProducts, setAllProducts] = useState<ProductModel[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductModel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setAllProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("Error al obtener productos", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filterByName = (query: string) => {
    const normalizedQuery = query.toLowerCase();
    const filtered = allProducts.filter((p) =>
      p.name.toLowerCase().includes(normalizedQuery)
    );
    setFilteredProducts(filtered);
  };

  return { products: filteredProducts, filterByName, loading, error };
};
