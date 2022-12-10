import React from "react";
import "./OurTrainerCard.css";
import img from "../../assets/OurGyms/fit4u.jpg";

function OurTrainerCard(props) {
  return (
    <div className="ourtrainer__container">
        <div className="trainer_item" >
        <img src={img} alt="" className="trainer__img" />
        <div className="detail__container">
          <p>name:{props.data.name}</p>
          <p>specialization;{props.data.specialization}</p>
          <p>place</p>
          <p>rating</p>
          <p>ph number</p>
          <button className="details__btn">Profile</button>
          {props.data.requestStatus==='true'?<button className="details__btn" disabled={true}>request sended</button>:
          <button className="details__btn">take training</button>}
        </div>
        </div>
    </div>
  );
}

export default OurTrainerCard;
