import React ,{useState,useEffect}from 'react'

import MainLayout from '../../components/MainLayout/MainLayout'
import OurTrainerCard from '../../components/OurTrainerCard/OurTrainerCard'

import { getTrainers } from '../../api'
const TrainersPage = () => {
  const [trainers, setTrainers] = useState([])
  useEffect(() => {
    (async()=>{
      getTrainers()
    })()
  }, [])
  return (
    <MainLayout>
      <OurTrainerCard/>
    </MainLayout>
  )
}

export default TrainersPage
