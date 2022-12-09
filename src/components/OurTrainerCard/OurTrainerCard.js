import React from "react";
import "./OurTrainerCard.css";
import img from "../../assets/OurGyms/fit4u.jpg";
function OurTrainerCard() {
  return (
    <div className="ourtrainer__container">
      <img src={img} alt="" className="trainer__img" />
      <div className="detail__container">
        <p>name</p>
        <p>place</p>
        <p>rating</p>
        <p>ph number</p>
        <button className="details__btn">Profile</button>
        <button className="details__btn">Take training</button>
      </div>
    </div>
  );
}

export default OurTrainerCard;
