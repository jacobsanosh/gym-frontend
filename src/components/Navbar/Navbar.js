import React from "react";

import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import {Link as Scroller}from 'react-scroll'
function Navbar() {
  const navigate=useNavigate();
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
        {console.log('local value are',localStorage.getItem('email'))}
        {localStorage.getItem('email')===""?
        <>
         <li>
         <Link to="/login">Login</Link>
       </li>
       <li>
        {/* change value of email */}
         <Link to="/register">Register</Link>
       </li>
       </>
        :<>
          <li>
         <div className="logout" onClick={(e)=>{
          localStorage.setItem('email','')
          navigate('/')
         }} >logout</div>
       </li>
        </>
        
      }
       
        <li>
          <Scroller to="details " smooth={true}>About us</Scroller>
        </li>
      
      </ul>
      </div>
  
    </div>
  );
}

export default Navbar;
