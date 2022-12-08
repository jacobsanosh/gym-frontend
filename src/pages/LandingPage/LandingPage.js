import React from 'react'
import Footer from '../../components/Footer/Footer'
import HomeLayout from '../../components/HomeLayout/HomeLayout'
import MainLayout from '../../components/MainLayout/MainLayout'
import OurGyms from '../../components/OurGyms/OurGyms'
import OurServices from '../../components/OurServices/OurServices'


const LandingPage = () => {
  return (
    <MainLayout>
      <HomeLayout/>
      <OurServices/>
      <OurGyms/>
      <Footer/>
    </MainLayout>
  )
}

export default LandingPage
