import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import AboutMeCard from '../components/AboutMeCard'
import Footer from "../components/Footer"


const HomePage = () => {

  return (
    <div className='h-screen'>
        <Navbar page='HomePage'/>
        <Hero/>
        <AboutMeCard/>
        <Footer/>
    </div>
  )
}

export default HomePage