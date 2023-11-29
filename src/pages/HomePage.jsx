import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import AboutMe from '../components/AboutMe'


const HomePage = () => {

  const page = 'HomePage'

  return (
    <div className='bg-mountain bg-cover bg-bottom h-screen '>
        <Navbar page={page}/>
        <Hero/>
    </div>
  )
}

export default HomePage