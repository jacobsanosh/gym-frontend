import React from "react";
import "./Login.css";
import {useNavigate} from 'react-router-dom'
function Login() {
  const navigate=useNavigate();
  return (
    <div className="Login__main_container">
      <div className="lgn__container">
        <div className="lgn__left"></div>
        <div className="lgn__right">
          <div className="lgn__input">
          <div className="lgn__inputBox">
              <h1>Login</h1>
            </div>
            <div className="lgn__inputBox">
              <label>Username</label>
              <input type="text" placeholder="enter user name" />
            </div>
            <div className="lgn__inputBox">
              <label>Password</label>
              <input type="password" placeholder="enter password" />
            </div>
            <div className="lgn__inputBox">
              <input type="submit" value="Login" onClick={()=>{
                navigate('/')
              }}/>
            </div>
            <p className="lgn__forget">
              Forgot Password? <a href="/">Click Here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
