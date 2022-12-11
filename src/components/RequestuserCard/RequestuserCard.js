import React from 'react'
import { userAccepted, userRejected } from '../../api';
import img from "../../assets/user.jpg";
import './RequestuserCard.css'
function RequestuserCard({data,loaddata}) {
    console.log(data)
    //if the trainer accept request
    const accept_user=async(email)=>{
        try{
            const response=await userAccepted(email);
            if(response.status===200)
            {
                alert("user added")
                loaddata()
            }
        }
        catch(error)
        {
            alert("something went wrong")
            console.log(error)
        }

    }
    const reject_user=async(email)=>{
        try{
            const response=await userRejected(email);
            if(response.status===200)
            {
                alert("user added")
            }
        }
        catch(error)
        {
            alert("something went wrong")
            console.log(error)
        }

    }
  return (
    <div className="ourtrainer__container">
    <div className="req_item">
      <img src={img} alt="" className="req__img" />
      <div className="detail__container">
        <p>name:{data.name}</p>
        <p>height:</p>
        <p>weight:</p>
        <button className='details__btn' onClick={(e)=>{
            accept_user(data.email)
        }}>accept</button>
        <button className='remove__btn details__btn' onClick={(e)=>{
            reject_user(data.email)
        }}>reject</button>
      </div>
    </div>
  </div>
  )
}

export default RequestuserCard
