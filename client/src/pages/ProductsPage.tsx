import { ProductModel } from "../models/ProductModel";
import ProductsListContainer from "../components/product/ProductsListContainer";

interface Props {
  products: ProductModel[];
  loading: Boolean;
}

const ProductsPage: React.FC<Props> = ({ products, loading }) => {
  if (products.length === 0) return <p>No se encontraron productos</p>;

  return (
    <div className="flex flex-col w-auto min-h-screen bg-gradient-to-b from-40% from-gray-700 to-gray-300 mt-16 items-center">
      <ProductsListContainer products={products} loading={loading} />
    </div>
  );
};

export default ProductsPage;
