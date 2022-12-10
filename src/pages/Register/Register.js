import React from "react";

import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import { registeruser } from "../../api";

function Register() {
  const navigate = useNavigate();
  //creating an useState
  const [usertype, setUsertype] = useState(null);
  const onChangeValue = (event) => {
    setUsertype(event.target.value);
    // console.log(usertype);
  };
  const Trainer = () => {
    if (usertype === "trainer") {
      return (
        <>
          <div className="lgn__inputBox">
            <label>gym name</label>
            <input type="text" placeholder="enter gym name" onChange={(e)=>setGymname(e.target.value)}/>
          </div>
          <div className="lgn__inputBox">
            <label>place</label>
            <input type="text" placeholder="enter your place" onChange={(e)=>setPlace(e.target.value)}/>
          </div>
          <div className="lgn__inputBox">
            <label>phone number</label>
            <input type="tel" placeholder="enter phone number" maxLength={10} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" onChange={(e)=>setPhone(e.target.value)}/>
          </div>
          <div className="lgn__inputBox">
            <label>specialization</label>
            <input type="text" placeholder="enter your specialization" onChange={(e)=>setSpecialization(e.target.value)}/>
          </div>
          <div className="lgn__file">
            <label>Qualification</label>
            <input type="file" id="file" onChange={(e)=>setQualification(e.target.value)}/>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="lgn__inputBox">
            <label>age</label>
            <input type="number" placeholder="enter ages" onChange={(e)=>setAge(e.target.value)}/>
          </div>
          <div className="lgn__inputBox">
            <label>height</label>
            <input type="number" placeholder="enter height in cm" onChange={(e)=>setHeight(e.target.value)}/>
          </div>
          <div className="lgn__inputBox">
            <label>weight</label>
            <input type="number" placeholder="enter weight in kg" onChange={(e)=>setWeight(e.target.value)}/>
          </div>
          <div className="lgn__inputBox"></div>
          <div className="lgn__inputBox">
            <textarea
              placeholder="Enter your need"
              className="reg__textarea"
              rows={5}
              cols={40}
              onChange={(e)=>setNeed(e.target.value)}
            ></textarea>
          </div>
        </>
      );
    }
  };
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [gymname, setGymname] = useState("")
  const [place, setPlace] = useState("")
  const [phone, setPhone] = useState("")
  const [specialization, setSpecialization] = useState("")
  const [qualification, setQualification] = useState("")
  const [age, setAge] = useState("")
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [need, setNeed] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false);
  const registerAttempt=async(e)=>{
    try{
      
      setLoading(true)
      if (usertype === "trainer") {
        const response=await registeruser(email,password,gymname,place,phone,specialization,qualification);
        
        if(response.status===200){
          navigate('/')
        }
      }
      else{
        const response=await registeruser(email,password,age,height,weight,need,'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',need);
        console.log("the response is ",response)
        if(response.status===200)
        {
          navigate('/')
        }
      }
    }
    catch(error){
      console.log(error)
      if (error.response.status === 409) {
        setError("user already exists");
      } else  
      {
        setError("something went wrong")
      }
    
    }
    finally{
      setLoading(false);
    }
  }
  return (
    <MainLayout>

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
              <input type="text" placeholder="enter your name" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="lgn__inputBox">
              <label>Password</label>
              <input type="password" placeholder="enter password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="lgn__inputBox" onChange={onChangeValue}>
              <input type="radio" value="trainer" name="type_user" /> Trainer
              <input type="radio" value="user" name="type_user" /> User
            </div>
            {Trainer()}
    

            <div className="lgn__inputBox">
            <div className="lgn__inputBox">
                <div className="error">{error}</div>
                <input
                  type="submit"
                  value={loading ? "Loading..." : "register"}
                  disabled={loading}
                  onClick={() => {
                    registerAttempt();
                  }}
                />
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    </MainLayout>
  );
}

export default Register;
