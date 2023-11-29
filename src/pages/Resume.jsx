import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Resume = () => {

  const page = "Resume"

  return (
    <>
        <Navbar page={page}/>
        <section className='font-montserrat'>
                <h1 className='text-center font-bold text-4xl mt-5'>Resume</h1>
        </section>
    </>
  )
}

export default Resume