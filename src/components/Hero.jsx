import React from 'react'
import Mountain from "../assets/mountain.avif"
import { TypeAnimation } from 'react-type-animation';
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import typescript from "../assets/typescript.png"
import tailwind from "../assets/tailwind.png"
import node from "../assets/nodejs.png"
import express from "../assets/express.svg"
import postgreSQL from "../assets/postgresql.png"
import monogodb from "../assets/mongodb.svg"


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
    return (<img key={item.id} src={item.img} alt={item.name} className='w-5 lg:w-8'/>)
  })
 
  return (
    <>
        <img src={Mountain} alt="the man are looking for the future" className='absolute w-[900px] h-screen object-cover shadow-2xl md:w-[2000px] md:object-cover'/>

        <div className='absolute top-72 left-[35%] lg:top-48 lg:block lg:absolute lg:left-[32%] text-[10px] font-extrabold lg:text-3xl font-montserrat'>
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
        </div>

        <div className='absolute grid grid-cols-5 grid-rows-2 top-[140px] left-[15%] gap-3 lg:gap-10 lg:top-[270px] lg:left-[40%]'>
            {skillLogo}
        </div>

     
    </>
  )
}

export default Hero