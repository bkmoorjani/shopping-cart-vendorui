import { useSelector } from "react-redux";
import Orders from "../../components/Orders/Orders";
import { selectOrders } from "../../features/orders/ordersSlice";

const OrdersSmart = () => {
    

    const orders = useSelector(selectOrders);
    return (
        <Orders orders={orders}></Orders>
    )
  
}

export default OrdersSmart;