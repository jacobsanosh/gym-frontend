import React from 'react'
import img from "../../assets/user.jpg";
import './ClientuserCard.css'
function ClientuserCard({data}) {
    // console.log("on client",data)
  return (
    <div className="ourtrainer__container">
    <div className="user_item">
      <img src={img} alt="" className="user__img" />
      <div className="detail__container">
        <p>name:{data.name}</p>
        <p>height:</p>
        <p>weight:</p>
        <button className='details__btn'>set workout</button>
        <button className='details__btn'>set diet</button>
      </div>
    </div>
  </div>
  )
}

export default ClientuserCard
