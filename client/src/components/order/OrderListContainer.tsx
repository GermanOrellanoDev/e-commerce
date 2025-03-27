import { useEffect, useState } from "react";
import { getOrders } from "../../services/orderService";
import { OrderModel } from "../../models/OrderModel";
import OrdersList from "./OrdersList";

const OrderListContainer: React.FC = () => {
  const [orders, setOrders] = useState<OrderModel[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        setOrders(data);
      } catch (error) {
        console.error("Error al obtener las órdenes");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <div>Cargando...</div>;

  return (
    <>
      <h2 className="font-bold text-lg text-center">Ordenes</h2>
      <div>
        <OrdersList orders={orders} />
      </div>
    </>
  );
};

export default OrderListContainer;
