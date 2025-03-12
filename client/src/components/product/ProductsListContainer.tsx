import { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import { ProductModel } from "../../models/ProductModel";
import ProductsList from "./ProductsList";

const ProductsListContainer: React.FC = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

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

  if (loading) return <div>Cargando...</div>;

  return (
    <>
      <h2 className="font-bold text-lg text-center">
        Todos nuestros productos
      </h2>
      <div className="">
        <ProductsList products={products} />
      </div>
    </>
  );
};

export default ProductsListContainer;
