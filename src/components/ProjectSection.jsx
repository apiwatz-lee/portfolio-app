import React from 'react'
import {projects} from '../data/Projects'
import { Link } from 'react-router-dom'
import ButtonLink from './ButtonLink'
import Skills from './Skills'
import { useContext } from 'react'
import { AppContext } from '../App'

const ProjectSection = () => {  

  const {darkTheme,secondaryDarkTheme} =  useContext(AppContext)

  const projectCard = projects.map((item)=>{
      return (
        item.id % 2 === 0 ?
  
        <Link to={item.url} key={item.id} target='_blank'>  
          <section className={`border flex flex-col-reverse w-96 h-auto rounded-lg shadow-lg p-10 gap-10 lg:flex-row lg:w-[1200px] mx-20 hover:scale-105 transition duration-500 cursor-pointer ${darkTheme ? `${secondaryDarkTheme} border-none` : null}`}>  
            <div className='flex flex-col gap-5 justify-center items-center lg:justify-evenly lg:text-center'>
              <h1 className='font-bold text-lg lg:text-2xl'>{item.name}</h1>
              <p className={`text-center text-gray-500 ${darkTheme ? 'text-gray-400':null}`}>{item.description}</p>
              <div className='flex h-20 w-92 flex-wrap items-center justify-center gap-2 lg:gap-5'>
                {item.stack.map((item,index)=>{
                  return  <p className={`h-8 p-3 text-sm lg:text-base flex items-center rounded-full bg-gray-300 ${darkTheme ? 'bg-gray-700':null}`} key={index}>{item}</p>
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
        <section className={`border flex flex-col w-96 h-auto rounded-lg shadow-lg p-10 gap-10 lg:flex-row lg:w-[1200px] mx-20 hover:scale-105 transition duration-500 cursor-pointer ${darkTheme ? `${secondaryDarkTheme} border-none` : null}`}>  
          <div className='text-center'>
            <img src={item.img} alt={item.name} className='rounded-xl shadow-lg object-cover'/>
          </div>
  
          <div className='flex flex-col gap-5 justify-center items-center lg:justify-evenly lg:text-center'>
            <h1 className='font-bold text-lg lg:text-2xl'>{item.name}</h1>
            <p className={`text-center text-gray-500 ${darkTheme ? 'text-gray-400':null}`}>{item.description}</p>
            <div className='flex h-20 w-92 flex-wrap items-center justify-center gap-2 lg:gap-5'>
              {item.stack.map((item,index)=>{
                return  <p className={`h-8 p-3 text-sm lg:text-base flex items-center rounded-full bg-gray-300 ${darkTheme ? 'bg-gray-700':null}`} key={index}>{item}</p>
              })}
            </div>
          </div>
        </section>
        </Link>
        )
    })
      
  return (
    <main className={`font-montserrat flex flex-col justify-center items-center gap-10 mb-10 w-screen`}>
      <h1 className='text-center font-bold text-4xl mt-5'>Projects</h1>
      {/* <Skills/> */}
      {projectCard}
      <ButtonLink path='/resume' text='Consider my resume'/> 
    </main>
  )
}

export default ProjectSection