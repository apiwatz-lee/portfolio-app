import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import AboutMe from '../components/AboutMe'


const HomePage = () => {

  const page = 'HomePage'

  return (
    <>
        <Hero/>
        <Navbar page={page}/>
    </>
  )
}

export default HomePage