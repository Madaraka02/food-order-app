import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="header__right" >
            <Link to="/" className="header__link">Food app</Link>
            </div>
            <div className="header__middle" >
            <Link to="/buy" className="header__link">Breakfast</Link>
            <Link to="/lunch" className="header__link">Lunch</Link>
            <Link to="/supper" className="header__link">Supper</Link>
            <Link to="/orders" className="header__link">View my Orders</Link>
            </div>
            <div className="header__left" >
            <Link to="/login" className="header__link">Sign In</Link>
            <Link to="/register" className="header__link">Sign Up</Link>
            </div>
        </div>
    )
}

export default Header
