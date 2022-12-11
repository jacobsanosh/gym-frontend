import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { assignedTrainer, requestedUser } from '../../api'
import ClientuserCard from '../../components/ClientuserCard/ClientuserCard'
import MainLayout from '../../components/MainLayout/MainLayout'
import RequestuserCard from '../../components/RequestuserCard/RequestuserCard'
import './TrainerdashBoard.css'
function TrainerdashBoard() {
    const navigate=useNavigate();
    const [type, setType] = useState("client")
    const [requestuser, setRequestuser] = useState([])
    const [clients, setClients] = useState([])
    useEffect(() => {
        loaddata()
    }, [])
    async function loaddata()
    {
        try{
            const requser=await requestedUser()
            const assuser=await assignedTrainer()
            // console.log(assuser.data.requests)
            setRequestuser(requser.data.requests)
            setClients(assuser.data.requests)
        }
        catch(error)
        {
            console.log(error)
        }
        
    }
    const getClients=()=>{
        return(
            <div className='demo'>
            {clients.map((item,index)=>{
                return(<ClientuserCard data={item} key={index} />)
            })}

            </div>
        )
    }
    const getRequests=()=>{
        return(
            <div className='demo'>
            {requestuser.map((item,index)=>{
                return(<RequestuserCard data={item} key={index} loaddata={loaddata}/>)
            })}

            </div>
        )
    }
    
  return (
    <MainLayout>
       <div className="see_data_btn">
        <button className='choose_btn' onClick={(e)=>{setType("client")}}>Clients</button>
        <button className='choose_btn' onClick={(e)=>{setType("request")}}  >requests</button>
        <button className='choose_btn' onClick={(e)=>{
            navigate('/manageWorkout')
        }}>workout plan</button>
        <button className='choose_btn' onClick={(e)=>{
            navigate('/manageDiet')
        }}>diet plan</button>
       </div>
       {type==='client'?getClients():getRequests()}
    </MainLayout>
  
  )
}

export default TrainerdashBoard
