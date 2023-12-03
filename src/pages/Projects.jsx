import React from 'react'
import Navbar from '../components/Navbar'
import {projects} from '../data/Projects'
import { Link } from 'react-router-dom'
import ProjectSection from '../components/ProjectSection'
import Footer from "../components/Footer"

const Projects = () => {

  return (
    <>
        <Navbar page='Projects'/>
        <ProjectSection/>
        <Footer/>
    </>
  )
}

export default Projects