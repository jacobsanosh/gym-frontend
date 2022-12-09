import React from 'react'
import Footer from '../../components/Footer/Footer'
import HomeLayout from '../../components/HomeLayout/HomeLayout'
import MainLayout from '../../components/MainLayout/MainLayout'
import OurGyms from '../../components/OurGyms/OurGyms'
import OurServices from '../../components/OurServices/OurServices'
import Details from '../../components/details/Details'


const LandingPage = () => {
  return (
    <MainLayout>
      <HomeLayout/>
      <OurServices/>
      <Details/>
      <OurGyms/>
      <Footer/>
    </MainLayout>
  )
}

export default LandingPage
