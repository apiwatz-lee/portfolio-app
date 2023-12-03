import React from 'react'
import Navbar from '../components/Navbar'
import {projects} from '../data/Projects'
import { Link } from 'react-router-dom'
import ProjectSection from '../components/ProjectSection'

const Projects = () => {

  return (
    <>
        <Navbar page='Projects'/>
        <ProjectSection/>
    </>
  )
}

export default Projects