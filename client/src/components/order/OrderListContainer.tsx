import { useEffect, useState } from "react";
import { getOrders, deleteOrder } from "../../services/orderService";
import { OrderModel } from "../../models/OrderModel";
import OrdersList from "./OrdersList";

const OrderListContainer: React.FC = () => {
  const [orders, setOrders] = useState<OrderModel[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

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

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleRemoveOrder = async (orderId: string) => {
    try {
      setOrders((prev) => prev.filter((o) => o._id !== orderId));
      await deleteOrder(`/${orderId}`);
      console.log("Orden eliminada");
    } catch (error) {
      console.error("Error al eliminar la orden", error);
      fetchOrders();
    }
  };

  if (loading) return <div className="text-white">Cargando...</div>;

  return (
    <>
      <h2 className="font-bold text-lg text-white text-center">Ordenes</h2>
      {orders.length ? (
        <div>
          <div>
            <OrdersList orders={orders} onDelete={handleRemoveOrder} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col rounded-lg bg-white overflow-hidden m-8 w-2xs h-24 shadow-lg">
          <h3 className="mt-1 font-bold text-sm text-white text-center">
            No hay ordenes
          </h3>
        </div>
      )}
    </>
  );
};

export default OrderListContainer;
