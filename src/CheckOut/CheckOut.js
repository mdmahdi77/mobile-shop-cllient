import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../App';
import './CheckOut.css'

const CheckOut = () => {
    const {checkOutId} = useParams()

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('http://localhost:6066/products')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const productOrder = product.find(pd => pd._id == checkOutId)

    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date()
    });

    const history = useHistory()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const handleOrder = id => {
        const newOrder = {...productOrder, ...selectedDate, ...loggedInUser}

        fetch('http://localhost:6066/addOrders', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert("Your Order Placed Successfully")
            }
            history.push(`/productOrder/${id}`)
        })
    }

    return (
        <div>
            <h1>Checkout</h1>
            <div className="checkOut">
                <h3>{productOrder?.name}</h3>
                <h5>{productOrder?.quantity}</h5>
                <h4>{productOrder?.price}</h4>
                <button className="mainButton" onClick={() => handleOrder(checkOutId)}>Orders</button>
            </div>
        </div>
    );
};

export default CheckOut;