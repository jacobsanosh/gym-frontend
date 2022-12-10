import React ,{useState,useEffect}from "react";
import { getDiet, getWorkout } from "../../api";
import url from "../../assets/user.jpg";
import DietRow from "../../components/DietRow/DietRow";
import WorkoutRow from "../../components/WorkoutRow/WorkoutRow";
import "./UserdashBoard.css";
function UserdashBoard() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [diet, setDiet] = useState([])
    useEffect(() => {
        (async()=>{
            try{
                setLoading(true)
                const respose=await getWorkout()
                const result=await getDiet() 
                console.log(respose)
                setData(respose.data.workouts)
                setDiet(result.data.diets)
                console.log("diet data",result.data.diets)
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
  

  return (
    <div className="user__dash_container">
      {/* section for user profiles   */}
      <div className="user__profile_div">
        <div className="user__profile_left">
          <img src={url} alt="" />
        </div>
        <div className="user__profile_right">
          <p>username</p>
          <p>age</p>
          <p>height</p>
          <p>weight</p>
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
        <button className="choose_btn">choose an trainer</button>
      </div>
    </div>
  );
}

export default UserdashBoard;
