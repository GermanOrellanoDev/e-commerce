import { useCart } from "../../hooks/useCart";
import { BsPlusLg, BsDashLg } from "react-icons/bs";
import { CartProduct } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../services/orderService";
import { useAuth } from "../../hooks/useAuth";

const Cart: React.FC = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleIncrement = (i: CartProduct) => {
    addToCart(i);
  };
  const handleDecrement = (i: CartProduct) => {
    const productId: string = i._id;
    removeFromCart(productId);
  };

  const handleBuy = async () => {
    if (!user || !user.user._id) {
      console.log("Usuario no autenticado");
      navigate("/login");
      return;
    }

    const orderData = {
      userId: user.user._id, //modificar
      products: cart.map((item) => ({
        productId: item._id,
        quantity: item.quantity,
        price: item.price,
      })),
      totalPrice,
    };

    try {
      const order = await createOrder(orderData);
      navigate("/orders", { state: order });
    } catch (error) {
      console.error("Error al crear la orden: ", error);
    }
  };

  return (
    <div>
      <h2 className="font-bold text-lg text-center">Tu carrito</h2>
      <div className="rounded-lg bg-white overflow-hidden m-1 w-auto h-auto shadow-lg">
        {cart.length === 0 ? (
          <p>Tu carrito está vacío</p>
        ) : (
          <div className="flex flex-col items-center">
            <ul className="grid grid-cols-2">
              {cart.map((item) => (
                <li
                  key={item._id}
                  className="flex flex-col items-center w-auto h-72 p-2"
                >
                  <img className="" src={item.image} alt={item.name} />
                  <h3 className="mt-1 font-bold text-sm text-center">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs text-gray-600">
                    Precio: ${item.price?.toFixed(2)}
                  </p>
                  <div className="flex items-center space-x-3 m-4">
                    <button
                      onClick={() => handleDecrement(item)}
                      className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <BsDashLg className="text-gray-600" />
                    </button>
                    <p className="text-xs text-gray-600">{item.quantity}</p>
                    <button
                      onClick={() => handleIncrement(item)}
                      className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <BsPlusLg className="text-gray-600" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="m-1.5 font-bold">
              <p>Precio total: ${totalPrice.toFixed(2)}</p>
            </div>
            <div className="p-1">
              <button
                onClick={handleBuy}
                className="m-3 w-full bg-blue-400 text-white font-bold text-sm rounded-md py-1 hover:bg-blue-600 transition-colors duration-300"
              >
                Comprar ahora
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
