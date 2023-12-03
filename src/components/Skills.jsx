import React from 'react'
import {logo} from "../data/HomePage"
import { Link } from 'react-router-dom'

const Skills = () => {

    const skillLogo = logo.map((item)=>{
        return (
        <Link to={item.url} target='_blank' key={item.id}>
          <img src={item.img} alt={item.name} className='w-10'/>
        </Link>)
    })

  return (
    <>
      <section className='mt-5 grid grid-cols-5 grid-rows-2 gap-x-10 gap-y-5 w-[350px] lg:w-[500px] lg:gap-x-10 lg:gap-y-10 items-center'>
        {skillLogo}
      </section>
    </>
  )
}

export default Skills