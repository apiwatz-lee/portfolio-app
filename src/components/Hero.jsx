import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import html from "../assets/logo/html.png"
import css from "../assets/logo/css.png"
import js from "../assets/logo/js.png"
import react from "../assets/logo/react.png"
import typescript from "../assets/logo/typescript.png"
import tailwind from "../assets/logo/tailwind.png"
import node from "../assets/logo/nodejs.png"
import express from "../assets/logo/express.svg"
import postgreSQL from "../assets/logo/postgresql.png"
import monogodb from "../assets/logo/mongodb.svg"


const Hero = () => {
  
  const motto = {
                  first:'A man who never stops Learning',
                  second:'A man who never stops Praticing',
                  third:'A man who never stops Focusing',
                }

  const logo = [
    {id:1,name:"html",img:html},
    {id:2,name:"css",img:css},
    {id:3,name:"js",img:js},
    {id:4,name:"react",img:react},
    {id:5,name:"typescript",img:typescript},
    {id:6,name:"tailwind",img:tailwind},
    {id:7,name:"node",img:node},
    {id:8,name:"express",img:express},
    {id:9,name:"postgreSQL",img:postgreSQL},
    {id:10,name:"mongoDB",img:monogodb},
  ]

  const skillLogo = logo.map((item)=>{
    return (<img key={item.id} src={item.img} alt={item.name} className='w-10'/>)
  })
 
  return (

    <div className='flex flex-col h-[70%] justify-start items-center'>

        <div className='text-[20px] font-extrabold lg:text-3xl font-montserrat text-center mt-5'>
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
        </div>

        <div className='mt-5 grid grid-cols-5 grid-rows-2 gap-x-10 gap-y-5 w-[350px] lg:w-[500px] lg:gap-x-10 lg:gap-y-10 items-center'>
            {skillLogo}
        </div>
        
     
    </div>

  )
}

export default Hero