import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import AboutMeCard from '../components/AboutMeCard'


const HomePage = () => {

  const page = 'HomePage'

  return (
    <div className='h-screen'>
        <Navbar page={page}/>
        <Hero/>
        <AboutMeCard/>
    </div>
  )
}

export default HomePage