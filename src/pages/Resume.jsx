import React from 'react'
import ResumeSection from '../components/ResumeSection'
import { useContext } from 'react'
import { AppContext } from '../App'

const Resume = () => {

  const {darkTheme,tertiaryDarkTheme} = useContext(AppContext)

   return (
    <main className={`${darkTheme ? tertiaryDarkTheme : null}`}>
      <ResumeSection/>
    </main>
  )
}

export default Resume