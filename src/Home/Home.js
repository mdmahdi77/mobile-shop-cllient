import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://serene-ocean-28542.herokuapp.com/products')
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