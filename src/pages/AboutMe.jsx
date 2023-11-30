import React from 'react'
import Navbar from '../components/Navbar'
import Blog from '../components/Blog'

const AboutMe = () => {

  const page = 'AboutMe'

  return (
    <div className='overflow-x-hidden'>
        <Navbar page={page}/>
        <Blog/>
    </div>
  )
}

export default AboutMe