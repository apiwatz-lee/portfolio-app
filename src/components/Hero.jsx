import React from 'react'
import Me from "../assets/mountain.avif"
import Navbar from './Navbar'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  
  const motto = {
                  first:'A man who never give up for his dream',
                  second:'A man who is brave to change his career path',
                  third:'A man who has a faith that one day ...',
                  fourth:'He will become a good Software Developer'
                }
 
  return (
    <div className='relative'>
        <img src={Me} alt="the man looking at the mountain" className='absolute w-[900px] h-screen h-max-auto object-cover shadow-2xl md:w-[2000px] md:object-cover'/>
          <p className='hidden lg:top-48 lg:block lg:absolute lg:left-[30%] text-[10px] font-extrabold lg:text-3xl animate-typing'>
            <span className='text-3xl'>"</span>
              <TypeAnimation
                  sequence={[
                    motto.first,
                    500, 
                    motto.second,
                    500,
                    motto.third,
                    500,
                    motto.fourth,
                    500
                  ]}
                  wrapper="span"
                  speed={60}
                  style={{ fontSize: '1em', display: 'inline-block',color:'#3E3F42' }}
                  repeat={Infinity}
                />
            <span className='text-3xl'>"</span>
          </p>
        <Navbar/>
    </div>
  )
}

export default Hero