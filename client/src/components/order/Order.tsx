import { OrderModel } from "../../models/OrderModel";
import { BsBucket, BsCash } from "react-icons/bs";

interface Props {
  order: OrderModel;
  onDelete: (id: string) => void;
}

const Order: React.FC<Props> = ({ order, onDelete }) => {
  return (
    <div className="flex flex-col rounded-lg bg-white overflow-hidden m-1 w-auto h-auto shadow-lg">
      <div className="flex flex-col items-center p-2">
        <h3 className="mt-1 font-bold text-sm">Productos en la órden</h3>
        <div className="my-2 p-1 w-full h-auto bg-gray-500 rounded-md font-extralight text-white text-xs">
          <div className="flex flex-col">
            {order.products.map((p) => (
              <div key={p.productId}>
                <img src="" alt="" />
                <h3>Producto: {p.name}</h3>
                <p>Precio: {p.price}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm mt-3 font-medium">
          <p>Estado: {order.status}</p>
          Total: ${order.totalPrice.toFixed(2)}
        </p>
        <div className="flex mt-2">
          <button
            onClick={() => onDelete(order._id)}
            className="flex items-center justify-center m-1 w-32 bg-red-400 text-white text-sm rounded-md py-1 hover:bg-red-600 transition-colors duration-300"
          >
            <BsBucket className="mr-1 text-sm" />
            Quitar
          </button>
          <button
            onClick={() => order._id} //agregar handle para pagar
            className="flex items-center justify-center m-1 w-32 bg-blue-400 text-white text-sm rounded-md py-1 hover:bg-red-600 transition-colors duration-300"
          >
            <BsCash className="mr-1 text-sm" />
            Ir a pagar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
