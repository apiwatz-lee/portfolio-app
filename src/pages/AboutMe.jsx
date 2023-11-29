import React from 'react'
import Navbar from '../components/Navbar'

const AboutMe = () => {

const page = 'AboutMe'

  return (
    <>
        <Navbar page={page}/>
        <section className='font-montserrat'>
                <h1 className='text-center font-bold text-4xl mt-5'>About Me</h1>
        </section>
    </>
  )
}

export default AboutMe