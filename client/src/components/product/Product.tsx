import { CartProduct } from "../../contexts/CartContext";
import { useCart } from "../../hooks/useCart";
import { BsCart, BsBucket } from "react-icons/bs";
import { ProductModel } from "../../models/ProductModel";

interface Props {
  product: ProductModel;
}

const Product: React.FC<Props> = ({ product }: Props) => {
  const { addToCart, removeFromCart } = useCart();

  const handleAddToCart = (product: ProductModel) => {
    const cartProduct: CartProduct = { ...product, quantity: 1 };
    console.log("Producto agregado" + product.name);
    addToCart(cartProduct);
  };

  const handleRemoveToCart = (product: ProductModel) => {
    const cartProductId: string = product._id;
    console.log("Producto quitado" + product._id);
    removeFromCart(cartProductId);
  };

  return (
    <div className="flex flex-col rounded-lg bg-white overflow-hidden m-1 w-auto h-96 shadow-lg">
      <img className="" src={product.image} alt={product.name} />
      <div className="my-2 p-1">
        <h3 className="mt-1 font-bold text-sm">{product.name}</h3>
        <p className="mt-1 text-xs">{product.description}</p>
        <div className="mt-2 text-xs text-gray-600">
          $ {product.price?.toFixed(2)}
        </div>
      </div>
      <div className="p-1">
        <button
          onClick={() => handleAddToCart(product)}
          className="flex items-center justify-center mt-3 w-full bg-blue-400 text-white text-sm rounded-md py-1 hover:bg-blue-600 transition-colors duration-300"
        >
          <BsCart className="mr-1 text-lg" />
          Agregar
        </button>
        <button
          onClick={() => handleRemoveToCart(product)}
          className="flex items-center justify-center mt-3 w-full bg-red-400 text-white text-sm rounded-md py-1 hover:bg-red-600 transition-colors duration-300"
        >
          <BsBucket className="mr-1 text-lg" />
          Quitar
        </button>
      </div>
    </div>
  );
};

export default Product;
