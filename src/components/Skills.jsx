import React from 'react'
import {logo} from "../data/HomePage"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Skills = () => {

    const downAnimate = {
      offscreen:{opacity:0,translateY:-100,rotate:-180},
      onscreen:{opacity:1,translateY:0,rotate:0}
    }

    const skillLogo = logo.map((item,index)=>{
        return (
        <Link to={item.url} target='_blank' key={item.id}>
          <motion.img 
          initial={'offscreen'}
          whileInView={'onscreen'}
          transition={{duration:0.5,delay:index*0.3}}
          viewport={{once:true,amount:0.5}}
          variants={downAnimate}
          src={item.img} 
          alt={item.name} 
          className='w-10'/>
        </Link>)
    })

  return (
    <>
      <section className='grid grid-cols-5 grid-rows-2 gap-x-10 gap-y-5 w-[250px] lg:w-[500px] lg:gap-x-10 lg:gap-y-10 items-center'>
        {skillLogo}
      </section>
    </>
  )
}

export default Skills