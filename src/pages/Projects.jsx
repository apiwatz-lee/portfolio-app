import React from 'react'
import ProjectSection from '../components/ProjectSection'
import { useContext } from 'react'
import { AppContext } from '../App'

const Projects = () => {

  const {darkTheme,tertiaryDarkTheme} = useContext(AppContext)

  return (
    <main className={`flex justify-center items-center ${darkTheme ? tertiaryDarkTheme : null}`}>
        <ProjectSection/>
    </main>
  )
}

export default Projects