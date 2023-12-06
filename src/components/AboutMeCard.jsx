import React from 'react'
import me2 from "../assets/me/me2.jpg"
import { statement } from "../data/Statement"
import { Link } from 'react-router-dom'
import ButtonLink from './ButtonLink'

const AboutMeCard = () => {
    
    const myIntroduction = statement.introduction.map((item)=>{
    return (<p className='text-center text-[14px] lg:text-xl lg:text-start text-gray-500' key={item.id}>{item.description}</p>)
  })
  
  return (
    <>
         <main className='font-montserrat flex flex-col justify-center items-center mt-10'>
            <h1 className='text-center font-bold text-4xl'>{statement.page}</h1>
            <section className='flex flex-col gap-10 lg:flex-row justify-center items-center my-10'>
              <img src={me2} alt="me" className='rounded-full w-72' />

              <div className='w-96 lg:w-[500px] text-md flex flex-col justify-center items-center lg:items-start gap-3 lg:gap-7'>
                <h2 className='w-[400px] text-xl text-center font-semibold lg:w-[600px] lg:text-start lg:text-3xl text-gray-700'> {statement.greeting}</h2>
                {myIntroduction}
              </div>
            </section>

            {/* <ButtonLink path='/aboutme' text='Get to know me'/>        */}
              
          </main>
    </>
  )
}

export default AboutMeCard