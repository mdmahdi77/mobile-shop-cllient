import React from 'react';
import { useHistory } from 'react-router';
import './Products.css'

const Product = (props) => {
    const {name, img, brand, price, _id} = props.product
    const history = useHistory()

    const handleCheckOut = (id) => {
        history.push(`/productCheckOut/${id}`)
    }
    return (
        <div className="products">
            <img src={img} alt=""/>
            <h5>{name}</h5>
            <p>{brand}</p>
            <div className="priceBtn">
                <h4>{price}</h4>
                <button className="mainButton" onClick={() => handleCheckOut(_id)}>Buy Now</button>
            </div>
        </div>
    );
};

export default Product;