import React from 'react'
import './Register.css'
function Register() {
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
            <input type="text" placeholder="enter your name" />
          </div>
          <div className="lgn__inputBox">
            <label>Password</label>
            <input type="text" placeholder="enter ages" />
          </div>
          <div className="lgn__inputBox">
            <label>height</label>
            <input type="number" placeholder="enter height in cm" />
          </div>
          <div className="lgn__inputBox">
            <label>weight</label>
            <input type="number" placeholder="enter weight in kg" />
          </div>
          <div className="lgn__inputBox">
          </div>
          <div className="lgn__inputBox">
            <textarea placeholder='Enter your need' className='reg__textarea' rows={5} cols={40}></textarea>
          </div>
          <div className="lgn__inputBox">
            <input type="submit" value="register" />
          </div>
          
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register