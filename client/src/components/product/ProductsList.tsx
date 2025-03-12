import { ProductModel } from "../../models/ProductModel";
import Product from "./Product";

interface Props {
  products: ProductModel[];
}

const ProductsList: React.FC<Props> = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-2 m-2 w-auto">
      {products.map((product) => (
        <div key={product._id}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
