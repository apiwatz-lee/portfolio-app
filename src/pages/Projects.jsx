import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Projects = () => {

  const page = 'Projects'
  
  return (
    <>
        <Navbar page={page}/>
        <section className='font-montserrat'>
                <h1 className='text-center font-bold text-4xl mt-5'>Projects</h1>
        </section>
    </>
  )
}

export default Projects