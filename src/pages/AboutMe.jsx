import React from 'react'
import Navbar from '../components/Navbar'
import { story } from '../data/myStory'
import me2 from "../assets/me2.jpg"
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