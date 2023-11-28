import React from 'react'
import Me from "../assets/mountain.avif"
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  
  const motto = {
                  first:'A man who never stop Coding',
                  second:'A man who never stop Learning',
                  third:'A man who never stop Focusing',
                }
 
  return (
    <>

      <main className='relative font-montserrat'>
        
        <img src={Me} alt="the man looking at the mountain" className='absolute w-[900px] h-screen h-max-auto object-cover shadow-2xl md:w-[2000px] md:object-cover'/>

        <p className='absolute top-72 left-[35%] lg:top-48 lg:block lg:absolute lg:left-[37%] text-[10px] font-extrabold lg:text-3xl'>
          <span className='text-sm lg:text-3xl'>"</span>
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
          <span className='text-sm lg:text-3xl'>"</span>
        </p>

      </main>
    </>
  )
}

export default Hero