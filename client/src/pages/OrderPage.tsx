import OrderListContainer from "../components/order/OrderListContainer";
import { useLocation } from "react-router-dom";

const OrdersPage: React.FC = () => {
  const location = useLocation();
  const order = location.state;

  if (!order) {
    return <p>No se encontró la Orden</p>;
  }

  return (
    <div className="bg-gray-200">
      <OrderListContainer />
    </div>
  );
};

export default OrdersPage;
