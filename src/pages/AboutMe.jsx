import React from 'react'
import Navbar from '../components/Navbar'
import { story } from '../data/myStory'
import me2 from "../assets/me2.jpg"
import Blog from '../components/Blog'

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
        <Blog/>
    </>
  )
}

export default AboutMe