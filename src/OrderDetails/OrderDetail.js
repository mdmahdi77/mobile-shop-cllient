import React from 'react';
import './OrderDetail.css'

const OrderDetail = (props) => {
    const {name, price, brand, checkIn, displayName} = props.order
    return (
        <div className="orderList">
            <h1>{displayName}</h1>
            <h2>{name}</h2>
            <h3>{brand}</h3>
            <h5>{price}</h5>
            <h6>{(new Date(checkIn).toDateString("dd/MM/yyyy"))}</h6>
        </div>
    );
};

export default OrderDetail;