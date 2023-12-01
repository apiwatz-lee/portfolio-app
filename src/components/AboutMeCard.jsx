import React from 'react'
import me2 from "../assets/me/me2.jpg"
import { statement } from "../data/Statement"

const AboutMeCard = () => {
    
    const myIntroduction = statement.introduction.map((item)=>{
    return (<p className='text-center text-[14px] lg:text-2xl lg:text-start text-gray-500' key={item.id}>{item.description}</p>)
  })
  
  return (
    <>
        <section className='flex flex-col gap-10 lg:flex-row justify-center items-center'>
            <img src={me2} alt="me" className='rounded-full w-72' />

            <div className='w-96 lg:w-[700px] text-md flex flex-col justify-center items-center lg:items-start gap-3 lg:gap-7'>
              <h2 className='w-72 text-3xl text-center font-semibold lg:w-[600px] lg:text-start lg:text-3xl text-gray-700'> {statement.greeting}</h2>
              {myIntroduction}
            </div>
          </section>
    </>
  )
}

export default AboutMeCard