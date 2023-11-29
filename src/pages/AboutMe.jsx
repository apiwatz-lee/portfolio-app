import React from 'react'
import Navbar from '../components/Navbar'
import { story } from '../data/myStory'
import me2 from "../assets/me2.jpg"

const AboutMe = () => {

  const page = "AboutMe"

  const myStory = story.map((item)=>{
    return (
              <section className='h-auto w-full flex flex-col justify-center items-center gap-10 my-2' key={item.id}>
                <p className='w-[300px] text-center lg:text-xl lg:w-[1200px]'>{item.description}</p>
                <img src={item.img} alt="me" className='w-[300px] lg:w-[500px] shadow-2xl rounded-lg'/>
              </section>
    )})

  return (
    <>
        <Navbar page={page}/>
        <main className='font-montserrat flex flex-col justify-center items-center gap-10 my-5'>
          <h1 className='text-center font-bold text-4xl my-5'>About Me</h1>
          <div className='flex flex-col gap-10 lg:flex-row justify-center items-center'>
            <img src={me2} alt="me" className='rounded-full w-72' />

            <div className='w-96 lg:w-[700px] text-md flex flex-col justify-center items-center lg:items-start gap-3 lg:gap-7'>
              <h2 className='w-72 lg:w-[600px] text-center font-semibold lg:text-start lg:text-3xl'> Hey There ! Welcome to my blog</h2>
              <p className='font-light text-center text-[14px] lg:text-2xl lg:text-start'> I'm Apiwat Leelasawatsuk </p>
              <p className='font-light text-center text-[14px] lg:text-2xl lg:text-start'> Interested in front-end development utilizing React.js. </p>
              <p className='font-light text-center text-[14px] lg:text-2xl lg:text-start'> Base in Bangkok,Thailand </p>
            </div>

          </div>
          <h1 className='font-bold text-3xl'>Stories of my life</h1>

        {myStory}
        
        <p className='text-base text-center font-md w-72 lg:text-xl lg:w-auto'>Thanks a bunch for hanging out with me through this story. Catch you on the flip side!</p>
        </main>
    </>
  )
}

export default AboutMe