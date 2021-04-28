import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:6066/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className="home">
            {
                products.map( product => <Product product={product}></Product>)
            }
        </div>
    );
};

export default Home;