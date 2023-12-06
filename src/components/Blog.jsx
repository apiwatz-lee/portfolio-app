import React from 'react'
import { story } from '../data/MyStory'
import { motion } from 'framer-motion'
import { statement } from "../data/Statement"

const Blog = () => {

  const topAnimate = {
    offscreen:{opacity:0,translateY:100},
    onscreen:{opacity:1,translateY:0},
  } 

      
  const myAnimationStory = story.map((item)=>{
    return (
      item.id === 1 ?
    
      <section className='h-auto flex flex-col justify-center items-center gap-10 my-2' key={item.id}>
        <h1 className='text-lg font-bold text-gray-700'>{item.title}</h1>
        <div className='flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-center shadow-lg'>
          <img src={item.img} alt="me" className='w-[300px] lg:w-[500px] shadow-2xl rounded-lg'/>
          <p className='w-[300px] p-5 text-center text-gray-600 lg:text-md lg:w-[600px] lg:p-10'>{item.description}</p>
        </div>
      </section>
      :
      item.id % 2 === 0 ?
              <motion.section 
              initial={'offscreen'}
              whileInView={'onscreen'}
              transition={{duration:1}}
              viewport={{once:true,amount:0.5}}
              variants={topAnimate}
              className='h-auto flex flex-col justify-center items-center gap-10 my-2' 
              key={item.id}>
                <h1 className='text-lg font-bold text-gray-700'>{item.title}</h1>
                <div className='flex flex-col-reverse gap-5 lg:flex-row lg:items-center lg:justify-center shadow-lg'>
                  <p className='w-[300px] p-5 text-center text-gray-600 lg:text-md lg:w-[600px] lg:p-10'>{item.description}</p>
                  <img src={item.img} alt="me" className='w-[300px] lg:w-[500px] shadow-2xl rounded-lg'/>
                </div>
              </motion.section>
      :
              <motion.div 
              initial={'offscreen'}
              whileInView={'onscreen'}
              transition={{duration:1}}
              viewport={{once:true,amount:0.5}}
              variants={topAnimate}
              className='h-auto flex flex-col justify-center items-center gap-10 my-2 border' 
              key={item.id}>
                  <h1 className='text-lg font-bold text-gray-700'>{item.title}</h1>
                  <div className='flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-center shadow-lg'>
                    <img src={item.img} alt="me" className='w-[300px] lg:w-[500px] shadow-2xl rounded-lg'/>
                    <p className='w-[300px] p-5 text-center text-gray-600 lg:text-md lg:w-[600px] lg:p-10'>{item.description}</p>
                  </div>
              </motion.div>
     
    )
  
  })

  return (
    <>
        <main className='font-montserrat flex flex-col justify-center items-center gap-10 my-5'>
          <h1 className='text-center font-bold text-4xl my-5'>My Stories</h1>

          {myAnimationStory}
        
          <motion.p 
            initial={'offscreen'}
            whileInView={'onscreen'}
            viewport={{once:true,amount:0.5}}
            transition={{duration:1}}
            variants={topAnimate}
            className='text-base text-center font-md w-72 text-gray-600 p-10 lg:text-xl lg:w-[1100px]'>
            {statement.thanks}
          </motion.p>

        </main>   
    </>
  )
}

export default Blog