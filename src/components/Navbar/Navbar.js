import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="nav__container">
      <div className="nav__items_container">
      <Link href="/" className="nav__logo">
        sculpt
      </Link>
      <ul className="nav__items">
        <li class="active">
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
