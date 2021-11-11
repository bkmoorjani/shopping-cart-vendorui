import React from "react";

const Order = (props:any) => {
    const {  _id,orderRefNo,custId,products,status} = props;

    
    return <div>
        <div>{_id}</div>
        <div>{orderRefNo}</div>
        <div>{custId}</div>
        <div>{products}</div>
        <div>{status}</div>
    </div>
}

export default Order;