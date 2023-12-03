import React from 'react'
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import Footer from "../components/Footer"

const Contact = () => {
 
  return (
    <>
        <Navbar page='Contact'/>             
        <ContactForm/>
        <Footer/>
    </>
  )
}

export default Contact