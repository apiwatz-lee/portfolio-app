import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {motto} from "../data/HomePage"
import {logo} from "../data/HomePage"
import Skills from './Skills';
import AboutMeCard from './AboutMeCard';


const Hero = () => {
  
  return (

    <main className='flex flex-col h-[70%] justify-center items-center gap-10'>
        <section className='text-[15px] font-extrabold lg:text-3xl font-montserrat text-center mt-5'>
          <span className='text-[20px] lg:text-3xl'>"</span>
            <TypeAnimation
                sequence={[
                  motto.first,
                  1000, 
                  motto.second,
                  1000,
                  motto.third,
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', display: 'inline-block',color:'#3E3F42' }}
                repeat={Infinity}
              />
          <span className='text-[20px] lg:text-3xl'>"</span> 
        </section>
       
        <Skills/>
    </main>

  )
}

export default Hero