import React,{useState,useEffect} from 'react'

import MainLayout from '../../components/MainLayout/MainLayout'
import OurTrainerCard from '../../components/OurTrainerCard/OurTrainerCard'

import { getTrainers } from '../../api'
const TrainersPage = () => {
  const [trainers, setTrainers] = useState([])
  useEffect(() => {
     (async()=>{
      const data=await getTrainers();
      setTrainers(data)
      console.log("new data is ",trainers)
     })()
  }, [trainers])
  return (
    <MainLayout>
      {trainers.map((items,index)=>{
        return(
          <OurTrainerCard key={index} data={items}/>
        )
      })}
    </MainLayout>
  )
}

export default TrainersPage
