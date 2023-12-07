import React from 'react'
import MyResume from '../assets/files/AphiwatLee2023.pdf'
import me3 from '../assets/me/me3.jpeg'
import { useContext } from 'react'
import { AppContext } from '../App'

const ResumeSection = () => {

  const {darkTheme,secondaryDarkTheme,tertiaryDarkTheme} = useContext(AppContext)

  return (
    <main className={`font-montserrat flex flex-col justify-center items-center gap-5 lg:h-[500px] 2xl:h-[700px] w-full`}>
          <h1 className='text-center font-bold text-4xl mt-7 w-full'>Resume</h1>
          <section className='flex flex-col items-center justify-center w-4/6 lg:flex-row lg:justify-evenly lg:items-center gap-5'>

            <img src={me3} alt='me' className='w-72 rounded-xl'/>

            <div className='flex flex-col justify-center items-center gap-10 pb-5'>
              <p className='text-center'>Thank you for your interest in me. Here is my resume.</p>
              <a href={MyResume} target='_blank'>
                <button className='border p-3 rounded-full duration-300 hover:bg-gray-900 hover:text-white animate-bounce'>Download</button>
              </a>
            </div>

          </section>
    </main>
  )
}

export default ResumeSection