import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { getProducts } from "../../services/productService";
import { ProductModel } from "../../models/ProductModel";
import ProductsList from "./ProductsList";

const ProductsListContainer: React.FC = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error al obtener los productos");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div className="text-white">Cargando...</div>;

  return (
    <>
      {user ? (
        <h2 className="font-bold text-lg text-white text-center">
          {user?.user.name}, estos son nuestros productos
        </h2>
      ) : (
        <h2 className="font-bold text-lg text-white text-center">
          ¡Hola! Estos son nuestros productos
        </h2>
      )}

      <div className="">
        <ProductsList products={products} />
      </div>
    </>
  );
};

export default ProductsListContainer;
