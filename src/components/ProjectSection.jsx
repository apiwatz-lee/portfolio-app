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
  
        <Link to={item.url} key={item.id} target='_blank' className='w-full flex justify-center items-center'>  
        <section className={`border flex flex-col-reverse w-full h-auto rounded-xl shadow-lg p-10 gap-10 lg:flex-row lg:w-[1200px] mx-10 ${darkTheme ? `${secondaryDarkTheme} border-none` : null}`}>  
          <div className='flex flex-col gap-5 justify-center items-center lg:justify-evenly lg:text-center'>
            <h1 className='font-bold text-md lg:text-2xl text-center'>{item.name}</h1>
            <p className={`text-sm text-center text-gray-500 ${darkTheme ? 'text-gray-400':null}`}>{item.description}</p>
            <div className='flex h-42 lg:h-auto w-92 flex-wrap items-center justify-center gap-2 lg:gap-5'>
              {item.stack.map((item,index)=>{
                return  <p className={`h-8 p-3 text-sm lg:text-base flex items-center rounded-full bg-gray-300 ${darkTheme ? 'bg-gray-700':null}`} key={index}>{item}</p>
              })}
            </div>
          </div>

          <div className='text-center'>
            <img src={item.img} alt={item.name} className='rounded-xl shadow-lg object-cover hover:scale-105 transition duration-500 cursor-pointer'/>
          </div>
        </section>
      </Link>    
      :
      <Link to={item.url} key={item.id} target='_blank' className='w-full flex justify-center items-center'>  
      <section className={`border flex flex-col w-full h-auto rounded-xl shadow-lg p-10 gap-10 lg:flex-row lg:w-[1200px] mx-10 ${darkTheme ? `${secondaryDarkTheme} border-none` : null}`}>  
        <div className='text-center'>
          <img src={item.img} alt={item.name} className='rounded-xl shadow-lg object-cover hover:scale-105 transition duration-500 cursor-pointer'/>
        </div>

        <div className='flex flex-col gap-5 justify-center items-center lg:justify-evenly lg:text-center'>
          <h1 className='font-bold text-md lg:text-2xl text-center'>{item.name}</h1>
          <p className={`text-sm text-center text-gray-500 ${darkTheme ? 'text-gray-400':null}`}>{item.description}</p>
          <div className='flex h-42 lg:h-auto w-92 flex-wrap items-center justify-center gap-2 lg:gap-5'>
            {item.stack.map((item,index)=>{
              return  <p className={`h-8 p-2 text-sm lg:text-base flex items-center rounded-full bg-gray-300 ${darkTheme ? 'bg-gray-700':null}`} key={index}>{item}</p>
            })}
          </div>
        </div>
      </section>
      </Link>
        )
    })
      
  return (
    <main className={`font-montserrat flex flex-col justify-center items-center gap-10 mb-10 w-screen py-10`}>
      <h1 className='text-center font-bold text-4xl mt-5'>Projects</h1>
      <Skills/>
      {projectCard}
      <ButtonLink path='/resume' text='Consider my resume'/> 
    </main>
  )
}

export default ProjectSection