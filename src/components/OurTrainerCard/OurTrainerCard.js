import React,{useState,useEffect} from "react";
import "./OurTrainerCard.css";
import img from "../../assets/OurGyms/fit4u.jpg";

import { getTrainers } from "../../api";

function OurTrainerCard() {
  const [trainers, setTrainers] = useState([])
  useEffect(() => {
     (async()=>{
      const data=await getTrainers();
      setTrainers(data)
      console.log(trainers[0])
     })()
  }, [])
  
  return (
    <div className="ourtrainer__container">
    {trainers.map((items)=>{
      return(
        <div className="trainer_item">
        <img src={img} alt="" className="trainer__img" />
        <div className="detail__container">
          <p>name:{items.name}</p>
          <p>specialization:{items.specialization}</p>
          <p>place</p>
          <p>rating</p>
          <p>ph number</p>
          <button className="details__btn">Profile</button>
          <button className="details__btn">Take training</button>
        </div>
        </div>
      )
    })}
   
   
    </div>
  );
}

export default OurTrainerCard;
