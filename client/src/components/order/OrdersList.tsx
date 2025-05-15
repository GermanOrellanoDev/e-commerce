import { OrderModel } from "../../models/OrderModel";
import Order from "./Order";

interface Props {
  orders: OrderModel[];
  onDelete: (id: string) => void;
}

const OrdersList: React.FC<Props> = ({ orders, onDelete }: Props) => {
  return (
    <div className="flex flex-col m-2 w-auto">
      {orders.map((order) => (
        <Order key={order._id} order={order} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default OrdersList;
