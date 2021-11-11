import React, { useMemo } from 'react';
import { IOrders } from '../../features/orders/ordersSlice';
import Order from '../Order/Order';

const ViewOrders = (props: any) => {
    
    const { Order } = props;
    const {  _id,orderRefNo,custId,products,status} = props;

 
     const viewOrdersUI = useMemo(() => {
        return Order.map((order:IOrders)=> <Order key={order._id} {...order.custId}></Order>)
    },[Order]) 


    return <div>
        <div>We are Viewing in View Orders </div>
      {/*   <div>{_id}</div>
        <div>{orderRefNo}</div>
        <div>{custId}</div>
        <div>{products}</div>
        <div>{status}</div> */}
       <div>{ viewOrdersUI}</div>
    </div>
}

export default ViewOrders;