import React from "react";
import "./OurTrainerCard.css";
import img from "../../assets/OurGyms/fit4u.jpg";
import { choose_trainer } from "../../api";
import { useNavigate } from "react-router-dom";

function OurTrainerCard(props) {
  const navigate = useNavigate();
  const takeTraining = async (email) => {
    console.log(email)
    try {
      const response = await choose_trainer(email);
      console.log("resposnse from trainer",response.status)
      if (response.status === 200) {
        navigate("/users");
      }
    } catch (error) {
      alert("something went wrong");
      console.log(error)
    }
  };

  return (
    <div className="ourtrainer__container">
      <div className="trainer_item">
        <img src={img} alt="" className="trainer__img" />
        <div className="detail__container">
          <p>name:{props.data.name}</p>
          <p>specialization:{props.data.specialization}</p>
          <p>place:{props.data.place}</p>
          <p>ph number:{props.data.phone_number}</p>
          {props.data.requestStatus === "true" ? (
            <button className="details__btn" disabled={true}>
              request sended
            </button>
          ) : (
            <button
              className="details__btn"
              onClick={(e) => {
                takeTraining(props.data.email);
              }}
            >
              take training
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default OurTrainerCard;
