import React from 'react'
import Skills from './Skills'
import {projects} from '../data/Projects'
import { Link } from 'react-router-dom'
import ButtonLink from './ButtonLink'


const ProjectSection = () => {  

  const projectCard = projects.map((item)=>{
      return (
        item.id % 2 === 0 ?
  
        <Link to={item.url} key={item.id} target='_blank'>  
          <section className='border flex flex-col-reverse w-96 h-auto rounded-lg shadow-lg p-10 gap-10 lg:flex-row lg:w-[1200px] mx-20 hover:scale-105 transition duration-500 cursor-pointer group hover:bg-gray-700'>  
            <div className='flex flex-col gap-5 justify-center items-center lg:justify-evenly lg:text-center'>
              <h1 className='font-bold text-lg lg:text-2xl group-hover:text-white'>{item.name}</h1>
              <p className='text-center text-gray-500 group-hover:text-white'>{item.description}</p>
              <div className='flex h-20 w-92 flex-wrap items-center justify-center gap-2 lg:gap-5'>
                {item.stack.map((item,index)=>{
                  return  <p className='h-8 p-3 text-sm lg:text-base flex items-center rounded-full bg-gray-300' key={index}>{item}</p>
                })}
              </div>
            </div>
  
            <div className='text-center'>
              <img src={item.img} alt={item.name} className='rounded-xl shadow-lg object-cover'/>
            </div>
          </section>
        </Link>    
        :
        <Link to={item.url} key={item.id} target='_blank'>  
        <section className='border flex flex-col w-96 h-auto rounded-lg shadow-lg p-10 gap-10 lg:flex-row lg:w-[1200px] mx-20 my-5 hover:scale-105 transition duration-500 cursor-pointer group hover:bg-gray-700'>  
          <div className='text-center'>
            <img src={item.img} alt={item.name} className='rounded-xl shadow-lg object-cover'/>
          </div>
  
          <div className='flex flex-col gap-5 justify-center items-center lg:justify-evenly lg:text-center'>
            <h1 className='font-bold text-lg lg:text-2xl group-hover:text-white'>{item.name}</h1>
            <p className='text-center text-gray-500 group-hover:text-white'>{item.description}</p>
            <div className='flex h-20 w-92 flex-wrap items-center justify-center gap-2 lg:gap-5'>
              {item.stack.map((item,index)=>{
                return  <p className='h-8 p-3 text-sm lg:text-base flex items-center rounded-full bg-gray-300' key={index}>{item}</p>
              })}
            </div>
          </div>
        </section>
        </Link>
        )
    })
      
  return (
    <main className='font-montserrat flex flex-col justify-center items-center gap-10 w-5/6 lg:w-auto mb-10'>
      <h1 className='text-center font-bold text-4xl mt-5'>Projects</h1>
      {/* <Skills/> */}
      {projectCard}
      <ButtonLink path='/resume' text='Consider my resume'/> 
    </main>
  )
}

export default ProjectSection