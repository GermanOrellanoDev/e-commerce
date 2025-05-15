import OrderListContainer from "../components/order/OrderListContainer";
import { useLocation } from "react-router-dom";

const OrdersPage: React.FC = () => {
  const location = useLocation();
  const order = location.state;

  if (!order) {
    return <p>No se encontró la Orden</p>;
  }

  return (
    <div className="flex flex-col w-auto min-h-screen bg-gradient-to-b from-40% from-gray-700 to-gray-300 mt-16 items-center">
      <OrderListContainer />
    </div>
  );
};

export default OrdersPage;
