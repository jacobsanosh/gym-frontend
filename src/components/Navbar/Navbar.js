import React from "react";

import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {

  return (
    <div className="nav__container">
      <div className="nav__items_container">
      <Link to="/" className="nav__logo">
        sculpt
      </Link>
      <ul className="nav__items">
        <li className="active">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">About us</Link>
        </li>
      
      </ul>
      </div>
  
    </div>
  );
}

export default Navbar;
