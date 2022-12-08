import React from 'react'
import Footer from '../../components/Footer/Footer'
import HomeLayout from '../../components/HomeLayout/HomeLayout'
import MainLayout from '../../components/MainLayout/MainLayout'
import OurServices from '../../components/OurServices/OurServices'
import ServiceProvided from '../../components/ServicesProvided/ServiceProvided'

const LandingPage = () => {
  return (
    <MainLayout>
      <HomeLayout/>
      <ServiceProvided/>
      <OurServices/>
      <Footer/>
    </MainLayout>
  )
}

export default LandingPage
