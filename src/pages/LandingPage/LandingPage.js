import React from 'react'
import Footer from '../../components/Footer/Footer'
import HomeLayout from '../../components/HomeLayout/HomeLayout'
import MainLayout from '../../components/MainLayout/MainLayout'
import OurServices from '../../components/OurServices/OurServices'
import OurTrainers from '../../components/OurTrainers/OurTrainers'

const LandingPage = () => {
  return (
    <MainLayout>
      <HomeLayout/>
      <OurServices/>
      <OurTrainers/>
      <Footer/>
    </MainLayout>
  )
}

export default LandingPage
