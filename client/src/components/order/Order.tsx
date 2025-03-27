import { OrderModel } from "../../models/OrderModel";

interface Props {
  order: OrderModel;
}

const Order: React.FC<Props> = ({ order }: Props) => {
  return (
    <div className="flex flex-col rounded-lg bg-white overflow-hidden m-1 w-auto h-96 shadow-lg">
      <div className="my-2 p-1">
        <h3 className="mt-1 font-bold text-sm">N° Órden: {order._id}</h3>
      </div>
      <div className="flex flex-col p-1">
        <h3 className="mt-1 font-bold text-sm">Productos en la órden</h3>
        <div className="my-2 p-1 bg-gray-500 rounded-md font-extralight text-white  text-xs">
          <h3>
            Producto: {} {/* agregar nombre de producto */}
          </h3>
          <p>Estado: {order.status}</p>
        </div>
        <p className="text-sm mt-3 font-medium">
          Total: ${order.totalPrice.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Order;
