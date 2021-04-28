import React from 'react';
import fakeData from '../fakeData/MOCK_DATA.json'

const Invent = () => {
    const handleProduct = () => {
        fetch('http://localhost:6066/addProducts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(fakeData)
        })
    }
    return (
        <div>
            <button onClick={handleProduct}>add product</button>
        </div>
    );
};

export default Invent;