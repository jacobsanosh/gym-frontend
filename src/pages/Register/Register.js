import React from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Register() {
  const navigate = useNavigate();
  //creating an useState
  const [usertype, setUsertype] = useState(null);
  const onChangeValue = (event) => {
    setUsertype(event.target.value);
    console.log(usertype);
  };
  const Trainer = () => {
    if (usertype === "trainer") {
      return (
        <>
          <div className="lgn__inputBox">
            <label>gym name</label>
            <input type="text" placeholder="enter gym name" />
          </div>
          <div className="lgn__inputBox">
            <label>specialization</label>
            <input type="text" placeholder="enter your specialization" />
          </div>
          <div className="lgn__file">
            <label>Qualification</label>
            <input type="file" id="file"/>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="lgn__inputBox">
            <label>age</label>
            <input type="number" placeholder="enter ages" />
          </div>
          <div className="lgn__inputBox">
            <label>height</label>
            <input type="number" placeholder="enter height in cm" />
          </div>
          <div className="lgn__inputBox">
            <label>weight</label>
            <input type="number" placeholder="enter weight in kg" />
          </div>
          <div className="lgn__inputBox"></div>
          <div className="lgn__inputBox">
            <textarea
              placeholder="Enter your need"
              className="reg__textarea"
              rows={5}
              cols={40}
            ></textarea>
          </div>
        </>
      );
    }
  };
  return (
    <div className="Login__main_container">
      <div className="lgn__container">
        <div className="lgn__left"></div>
        <div className="lgn__right">
          <div className="lgn__input">
            <div className="lgn__inputBox">
              <h1>Register</h1>
            </div>
            <div className="lgn__inputBox">
              <label>Username</label>
              <input type="text" placeholder="enter your name" />
            </div>
            <div className="lgn__inputBox">
              <label>Password</label>
              <input type="password" placeholder="enter password" />
            </div>
            <div className="lgn__inputBox" onChange={onChangeValue}>
              <input type="radio" value="trainer" name="type_user" /> Trainer
              <input type="radio" value="user" name="type_user" /> User
            </div>
            {Trainer()}
            {/* {usertype==='trainer'?<>
            <div className="lgn__inputBox">
              <label>age</label>
              <input type="number" placeholder="enter ages" />
            </div>
            <div className="lgn__inputBox">
              <label>height</label>
              <input type="number" placeholder="enter height in cm" />
            </div>
            <div className="lgn__inputBox">
              <label>weight</label>
              <input type="number" placeholder="enter weight in kg" />
            </div>
            <div className="lgn__inputBox"></div>
            <div className="lgn__inputBox">
              <textarea
                placeholder="Enter your need"
                className="reg__textarea"
                rows={5}
                cols={40}
              ></textarea>
            </div></>:<></>} */}

            <div className="lgn__inputBox">
              <input
                type="submit"
                value="register"
                onClick={() => {
                  navigate("/");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
