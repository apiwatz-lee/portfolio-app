import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'


const HomePage = () => {

  const page = 'HomePage'

  return (
    <div className='bg-mountain bg-cover bg-bottom h-screen overflow-y-hidden'>
        <Navbar page={page}/>
        <Hero/>
    </div>
  )
}

export default HomePage