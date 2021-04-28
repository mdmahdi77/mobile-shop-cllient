import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div  className="navSection">
            <div className="logo">
            <h1 class="logoHeader">Mobile <span>Shop</span></h1>
            </div>
            <div className="navList">
                <ul>
                    <li>
                    <Link to="/home">Home</Link>
                    </li>
                    <li>
                    <Link to="/admin">Admin</Link>
                    </li>
                    <li>
                    <Link to="/orders">Orders</Link>
                    </li>
                    {/* <li>
                    <Link to="/invent">invent</Link>
                    </li> */}
                    <li>
                    <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;