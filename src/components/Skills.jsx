import React from 'react'
import {logo} from "../data/HomePage"

const Skills = () => {

    const skillLogo = logo.map((item)=>{
        return (<img key={item.id} src={item.img} alt={item.name} className='w-10'/>)
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