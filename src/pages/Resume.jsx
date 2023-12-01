import React from 'react'
import Navbar from '../components/Navbar'
import MyResume from '../assets/files/AphiwatLee2023.pdf'

const Resume = () => {

  const page = "Resume"

  return (
    <>
        <Navbar page={page}/>
        <section className='font-montserrat flex flex-col justify-center items-center border gap-5'>
                <h1 className='text-center font-bold text-4xl mt-5'>Resume</h1>
                <a href={MyResume} target='_blank'>
                  <button className='border p-3 rounded-full duration-300 hover:bg-[#3E3F42] hover:text-white'>Download CV</button>
                </a>
        </section>
    </>
  )
}

export default Resume