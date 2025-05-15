import ProductDetail from "../components/product/ProductDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../services/productService";
import { ProductModel } from "../models/ProductModel";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductModel | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);

    const fetchProduct = async () => {
      try {
        const data = await getProductsById(id);
        setProduct(data);
        setLoading(false);
        console.log("producto seleccionado:", id);
      } catch (error) {
        console.error("Producto no encontrado", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p className="p-4">Cargando producto...</p>;
  if (!product) return <p className="p-4">Producto no encontrado</p>;

  return (
    <div className="flex flex-col w-auto min-h-screen bg-gradient-to-b from-40% from-gray-700 to-gray-300 mt-16 items-center">
      <ProductDetail product={product}></ProductDetail>
    </div>
  );
};

export default ProductDetailPage;
