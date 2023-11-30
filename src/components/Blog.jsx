import React from 'react'
import { story } from '../data/myStory'
import me2 from "../assets/me/me2.jpg"
import { motion } from 'framer-motion'


const Blog = () => {

  const leftAnimate = {
    offscreen:{opacity:0,translateX:-100},
    onscreen:{opacity:1,translateX:0},
  }
  
  const rightAnimate = {
    offscreen:{opacity:0,translateX:100},
    onscreen:{opacity:1,translateX:0},
  }
  
  const introduction = [
    {id:1,description:"I'm Apiwat Leelasawatsuk"},
    {id:2,description:"Interested in Front-end Development utilizing React.js."},
    {id:3,description:"Based in Bangkok,Thailand"},
  ]
  
  const thankYou = `Thank you for taking the time to read my story up to this point. 
  If you enjoyed my journey and would like to be a part of it, please consider taking a look at my resume. 
  Your consideration means a lot to me.`

  const myIntroduction = introduction.map((item)=>{
    return (<p className='text-center text-[14px] lg:text-2xl lg:text-start text-gray-500' key={item.id}>{item.description}</p>)
  })
  
  // const myStory = story.map((item)=>{
  
  //   return (
  //     item.id % 2 === 0 ?
  //             <section className='h-auto w-full flex flex-col justify-center items-center gap-10 my-2' key={item.id}>
  //               <h1 className='text-lg font-bold text-gray-700'>{item.title}</h1>
  //               <div className='flex flex-col-reverse gap-5 lg:flex-row lg:items-center lg:justify-center shadow-lg'>
  //                 <p className='w-[300px] p-5 text-center text-gray-600 lg:text-xl lg:w-[600px] lg:p-10'>{item.description}</p>
  //                 <img src={item.img} alt="me" className='w-[300px] lg:w-[500px] shadow-2xl rounded-lg'/>
  //               </div>
  //             </section>
  //     :       
  //             <section className='h-auto w-full flex flex-col justify-center items-center gap-10 my-2' key={item.id}>
  //                 <h1 className='text-lg font-bold text-gray-700'>{item.title}</h1>
  //                 <div className='flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-center shadow-lg'>
  //                   <img src={item.img} alt="me" className='w-[300px] lg:w-[500px] shadow-2xl rounded-lg'/>
  //                   <p className='w-[300px] p-5 text-center text-gray-600 lg:text-xl lg:w-[600px] lg:p-10'>{item.description}</p>
  //                 </div>
  //             </section>
  //   )
  
  // })
      
  const myAnimationStory = story.map((item)=>{
    return (
      item.id % 2 === 0 ?
              <motion.section 
              initial={'offscreen'}
              whileInView={'onscreen'}
              transition={{duration:1}}
              viewport={{once:true,amount:0.5}}
              variants={leftAnimate}
              className='h-auto w-full flex flex-col justify-center items-center gap-10 my-2' 
              key={item.id}>
                <h1 className='text-lg font-bold text-gray-700'>{item.title}</h1>
                <div className='flex flex-col-reverse gap-5 lg:flex-row lg:items-center lg:justify-center shadow-lg'>
                  <p className='w-[300px] p-5 text-center text-gray-600 lg:text-xl lg:w-[600px] lg:p-10'>{item.description}</p>
                  <img src={item.img} alt="me" className='w-[300px] lg:w-[500px] shadow-2xl rounded-lg'/>
                </div>
              </motion.section>
      :       
              <motion.div 
              initial={'offscreen'}
              whileInView={'onscreen'}
              transition={{duration:1}}
              viewport={{once:true,amount:0.5}}
              variants={rightAnimate}
              className='h-auto w-full flex flex-col justify-center items-center gap-10 my-2' 
              key={item.id}>
                  <h1 className='text-lg font-bold text-gray-700'>{item.title}</h1>
                  <div className='flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-center shadow-lg'>
                    <img src={item.img} alt="me" className='w-[300px] lg:w-[500px] shadow-2xl rounded-lg'/>
                    <p className='w-[300px] p-5 text-center text-gray-600 lg:text-xl lg:w-[600px] lg:p-10'>{item.description}</p>
                  </div>
              </motion.div>
    )
  
  })

  return (
    <>
        <main className='font-montserrat flex flex-col justify-center items-center gap-10 my-5'>
          <h1 className='text-center font-bold text-4xl my-5'>About Me</h1>

          <section className='flex flex-col gap-10 lg:flex-row justify-center items-center'>
            <img src={me2} alt="me" className='rounded-full w-72' />

            <div className='w-96 lg:w-[700px] text-md flex flex-col justify-center items-center lg:items-start gap-3 lg:gap-7'>
              <h2 className='w-72 text-3xl text-center font-semibold lg:w-[600px] lg:text-start lg:text-3xl text-gray-700'> Hey There ! Welcome to my Stories</h2>
              {myIntroduction}
            </div>
          </section>

          {myAnimationStory}
        
          <motion.p 
            initial={'offscreen'}
            whileInView={'onscreen'}
            viewport={{once:true,amount:0.5}}
            transition={{duration:1}}
            variants={leftAnimate}
            className='text-base text-center font-md w-72 text-gray-600 p-10 lg:text-xl lg:w-[1100px]'>
            {thankYou}
          </motion.p>

        </main>   
    </>
  )
}

export default Blog