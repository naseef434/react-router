import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
function Nav() {

    const navStyle = {
        color:'white'
    }
  return (
    <nav>
        <ul className="nav-links">
            <Link style={navStyle} to="/about">
                <li>about</li>
            </Link>
            <Link style={navStyle} to="/shop">
                <li>Shop</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
