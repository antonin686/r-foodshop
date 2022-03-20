import OrderBox from "../../components/OrderBox";
import { CustomerUrl } from "../../helpers/apiLinks";
import useAuth from "../../hooks/useAuth";
import useGetFetch from "../../hooks/useGetFetch";

function Orders() {
  const auth = useAuth();
  const [orders] = useGetFetch(CustomerUrl + "/orders/", auth.token);
  return (
    <div>
      <h1 className="font-bold text-2xl mb-2">Order History</h1>
      <div className="flex flex-col gap-4">
        {orders &&
          orders.map((order: any, index: number) => (
            <OrderBox key={index}
              items={order.items}
              address={order.address}
              created={order.created_at}
            />
          ))}
      </div>
    </div>
  );
}

export default Orders;
