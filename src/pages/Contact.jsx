import React from 'react'
import ContactForm from '../components/ContactForm'
import { useContext } from 'react'
import { AppContext } from '../App'

const Contact = () => {

  const {darkTheme,tertiaryDarkTheme} = useContext(AppContext)
 
  return (
    <main className={`${darkTheme ? tertiaryDarkTheme : null}`}>
        <ContactForm/>
    </main>
  )
}

export default Contact