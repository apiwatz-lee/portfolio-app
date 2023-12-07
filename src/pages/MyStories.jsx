import React from 'react'
import Blog from '../components/Blog'
import { useContext } from 'react'
import { AppContext } from '../App'

const AboutMe = () => {

  const {darkTheme,tertiaryDarkTheme} = useContext(AppContext)

  return (
    <main className={`${darkTheme ? tertiaryDarkTheme : null}`}>
        <Blog/>
    </main>
  )
}

export default AboutMe