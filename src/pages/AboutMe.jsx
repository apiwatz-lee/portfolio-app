import React from 'react'
import Navbar from '../components/Navbar'
import Blog from '../components/Blog'

const AboutMe = () => {

  const page = 'AboutMe'

  return (
    <>
        <Navbar page={page}/>
        <Blog/>
    </>
  )
}

export default AboutMe