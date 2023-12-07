import React from 'react'
import Hero from '../components/Hero'
import AboutMeCard from '../components/AboutMeCard'
import { useContext } from 'react'
import { AppContext } from '../App'

const HomePage = () => {

  const {darkTheme,tertiaryDarkTheme} = useContext(AppContext)

  return (
    <main className={`${darkTheme ? tertiaryDarkTheme : null}`}>
        <Hero/>
        <AboutMeCard/>
    </main>
  )
}

export default HomePage