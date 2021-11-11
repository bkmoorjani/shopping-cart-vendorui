import React, { useMemo } from "react";
import { IOrders } from "../../features/orders/ordersSlice";


const Orders = (props:any) => {
    
    const { order } = props;
     
    const ordersUI = useMemo(() => {
        return order.map((order: IOrders) =>
            <Orders key={order._id} {...order}></Orders>)
    }, [order])
    return (
        <div>
            <div>{ordersUI }</div>
           
            

        </div>
    
        )
    

}

export default Orders;