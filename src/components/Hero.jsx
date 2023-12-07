import React, { useContext } from 'react'
import { TypeAnimation } from 'react-type-animation';
import {motto} from "../data/HomePage"
import { AppContext } from '../App';
import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import Skills from './Skills';
import { Button } from '@chakra-ui/react';


const Hero = () => {

  const {isSuccess,setIsSuccess} = useContext(AppContext)
  const toast = useToast()

  useEffect(()=>{
    if(isSuccess)
      {toast({
        title: 'Message sent.',
        description: "We've sent your message to Apiwat Lee.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    }
    setIsSuccess(false)
  },[])

  return (
    <>
      <main className='bg-mountain bg-cover bg-bottom flex flex-col h-[530px] pb-64 justify-center items-center gap-10'>
          <section className='text-[12px] w-[250px] lg:w-[650px] font-extrabold lg:text-3xl font-montserrat text-center mt-5'>
            <span className='text-[20px] text-black lg:text-3xl'>"</span>
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
            <span className='text-[20px] text-black lg:text-3xl'>"</span> 
          </section>
        
          <Skills/>
          
      </main>
    </>

  )
}

export default Hero