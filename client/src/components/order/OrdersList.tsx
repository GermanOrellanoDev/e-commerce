import { OrderModel } from "../../models/OrderModel";
import Order from "./Order";

interface Props {
  orders: OrderModel[];
}

const OrdersList: React.FC<Props> = ({ orders }: Props) => {
  return (
    <div className="grid grid-cols-2 m-2 w-auto">
      {orders.map((order) => (
        <div key={order._id}>
          <Order order={order} />
        </div>
      ))}
    </div>
  );
};

export default OrdersList;
