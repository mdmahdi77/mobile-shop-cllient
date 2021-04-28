import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../App';
import OrderDetail from '../OrderDetails/OrderDetail';

const Orders = () => {
    const {orderId} = useParams()
    const [orders, setOrders] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('http://localhost:6066/orders?email='+loggedInUser.email, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => setOrders(data))
    },[])

    
    return (
        <div>
            <h1>Your Total Orders ({orders.length})</h1>
            {
                orders.map(order => <OrderDetail order={order}></OrderDetail>)
            }
        </div>
    );
};

export default Orders;