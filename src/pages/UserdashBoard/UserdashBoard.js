import React ,{useState,useEffect}from "react";
import { useNavigate } from "react-router-dom";
import { delete_trainer, getDiet, getUserProfile, getWorkout } from "../../api";
import url from "../../assets/user.jpg";
import DietRow from "../../components/DietRow/DietRow";
import WorkoutRow from "../../components/WorkoutRow/WorkoutRow";

import "./UserdashBoard.css";
function UserdashBoard() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [diet, setDiet] = useState([])
    const [getuser, setgetUser] = useState([])
    useEffect(() => {
        (async()=>{
            try{
                setLoading(true)
                const respose=await getWorkout()
                const result=await getDiet() 
                const userData=await getUserProfile()
                // console.log(respose)
                setData(respose.data.workouts)
                setDiet(result.data.diets)
                console.log("user data is",userData)
                setgetUser(userData.data.user)
                // console.log("diet data",result.data.diets)
            }
            catch(error)
            {
                console.log(error)
            }
            finally{
                setLoading(false)
            }
        })()
    }, [])
  const remover_trainer=async()=>{
    try{
      const respose=await delete_trainer();
      if(respose.status===200)
      {
        alert("trainer removed successfully")
        setDiet([])
        setData([])
      }
    }
    catch(error){
      alert("couldn't delete trainer");
      console.log(error)
    }
  }
  const navigate=useNavigate();
  return (
    <div className="user__dash_container">
      {/* section for user profiles   */}
      <div className="user__profile_div">
        <div className="user__profile_left">
          <img src={url} alt="" />
        </div>
        <div className="user__profile_right">
          <p>username:{getuser.name}</p>
          {/* <p>age:{getuser.age}</p> */}
          <p>age:21</p>
          <p>height in cm:{getuser.height_in_cm}</p>
          <p>weight in kg:{getuser.weight_in_kg}</p>
        </div>
      </div>
      {/* section for trainers and their workouts */}
      <div className="trainer__div">
        <h1>Your trainer</h1>
        <div className="work__out">
          <h2>work outs are</h2>
          <table>
            <thead>
              
              <tr>
                <th>workout name</th>
                <th>part of body</th>
                <th>description</th>
                <th>date</th>
                <th>set</th>
                <th>reps</th>
                <th>completed</th>
              </tr>
            </thead>
            <tbody>
              
              {data.map((item,index)=>{
                
                    return( 
                        <WorkoutRow item={item} key={index}/>
                )
                })}
              
            </tbody>
          </table>
        </div>
        <div className="routines">
          <h2>routines are</h2>
          <table>
            <thead>
              <tr>
                <th>food name</th>
                <th>quantity</th>
                <th>protein</th>
                <th>no of times</th>
                <th>time</th>
                <th>completed</th>
              </tr>
            </thead>
            <tbody>
            {diet.map((item,index)=>{
                
                return( 
                    <DietRow item={item} key={index}/>
            )
            })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="choose_trainer">
        {(getuser.trainerStatus)!=="accepted"?
           <button className="choose_btn" onClick={(e)=>{
            navigate('/trainers')
           }}>choose an trainer</button>:
           <button className="choose_btn remove_btn" onClick={(e)=>{
            remover_trainer();
           }}>remove trainer</button>
      }
        
      </div>
    </div>
  );
}

export default UserdashBoard;
