import { ProductModel } from "../../models/ProductModel";
import { Link } from "react-router-dom";

interface Props {
  product: ProductModel;
}

const Product: React.FC<Props> = ({ product }: Props) => {
  return (
    <Link to={`/products/${product._id}`}>
      <div className="flex flex-col rounded-lg bg-white overflow-hidden m-1 w-auto h-72 shadow-lg">
        <img className="" src={product.image} alt={product.name} />
        <div className="my-2 p-1">
          <h3 className="mt-1 font-bold text-sm">{product.name}</h3>
          <p className="mt-1 text-xs">{product.description}</p>
          <div className="mt-2 text-xs text-gray-600">
            $ {product.price?.toFixed(2)}
          </div>
        </div>
        <div className="p-1"></div>
      </div>
    </Link>
  );
};

export default Product;
