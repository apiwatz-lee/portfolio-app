import React from 'react'
import { Link } from 'react-router-dom'
import MyResume from '../assets/files/AphiwatLee2023.pdf'

const CallToAction = () => {
  return (
    <section className='flex justify-center items-center gap-5'>
          
              <a
                href={MyResume} 
                target='_blank' 
                className='p-2 rounded-md bg-gray-700 text-white text-sm animate-bounce hover:bg-gray-600 duration-500'>
                  Resume
              </a>
            

         
              <Link 
                to='/contact' 
                className='p-2 rounded-md bg-gray-700 text-white text-sm animate-bounce hover:bg-gray-600 duration-500'>
                  Contact Me
              </Link>
          
    </section>
  )
}

export default CallToAction