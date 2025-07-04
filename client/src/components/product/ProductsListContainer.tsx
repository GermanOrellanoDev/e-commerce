import { useAuth } from "../../hooks/useAuth";

import { ProductModel } from "../../models/ProductModel";
import ProductsList from "./ProductsList";

interface Props {
  products: ProductModel[];
  loading: Boolean;
}

const ProductsListContainer: React.FC<Props> = ({ products, loading }) => {
  const { user } = useAuth();

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
