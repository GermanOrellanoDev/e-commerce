import { OrderModel } from "../../models/OrderModel";
import { BsBucket } from "react-icons/bs";

interface Props {
  order: OrderModel;
  onDelete: (id: string) => void;
}

const Order: React.FC<Props> = ({ order, onDelete }) => {
  return (
    <div className="flex flex-col rounded-lg bg-white overflow-hidden m-1 w-auto h-auto shadow-lg">
      <div className="my-2 p-1">
        <h3 className="mt-1 font-bold text-sm">N° Órden: {order._id}</h3>
      </div>
      <div className="flex flex-col items-center p-2">
        <h3 className="mt-1 font-bold text-sm">Productos en la órden</h3>
        <div className="my-2 p-1 w-full h-24 bg-gray-500 rounded-md font-extralight text-white text-xs">
          <h3>
            Producto: {} {/* agregar nombre de producto */}
          </h3>
          <p>Estado: {order.status}</p>
        </div>
        <p className="text-sm mt-3 font-medium">
          Total: ${order.totalPrice.toFixed(2)}
        </p>
        <button
          onClick={() => onDelete(order._id)}
          className="flex items-center justify-center mt-3 w-32 bg-red-400 text-white text-sm rounded-md py-1 hover:bg-red-600 transition-colors duration-300"
        >
          <BsBucket className="mr-1 text-sm" />
          Quitar
        </button>
      </div>
    </div>
  );
};

export default Order;
