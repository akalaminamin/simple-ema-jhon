import React from 'react';
import logo from "../../images/logo.png";
import "./Header.css"
function Header() {
    return (
        <div>
            <div className="header-container">
                <img className="logo" src={logo} alt="" />
                <nav>
                    <a className="nav-link" href="/shop">Shop</a>
                    <a className="nav-link" href="/review">Order Review</a>
                    <a className="nav-link" href="/inventory">Manage Inventory here</a>
                </nav>
            </div>
        </div>
    )
}

export default Header
