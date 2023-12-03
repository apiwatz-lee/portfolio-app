import React from 'react'

const Input = ({name,id,type}) => {
  return (
    <div className='w-full flex flex-row justify-between items-center gap-10 lg:w-72 lg:flex-col lg:gap-3'>
        <label htmlFor={id} className='font-medium lg:w-[250px]'>{name}</label>
        <input id={id} type={type} className='border h-9 w-64 rounded-xl p-5 outline-none'/>
    </div>
  )
}

export default Input