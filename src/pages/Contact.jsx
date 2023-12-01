import React from 'react'
import Navbar from '../components/Navbar'

const Contact = () => {

  const page = 'Contact'
  
  return (
    <>
      
        <Navbar page={page}/>
        <section className='font-montserrat'>
                <h1 className='text-center font-bold text-4xl mt-5'>Contact</h1>
        </section>
    </>
  )
}

export default Contact