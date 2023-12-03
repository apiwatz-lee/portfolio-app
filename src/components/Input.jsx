import React from 'react'

const Input = ({name,id,type}) => {
  return (
    <div className='w-full flex flex-col justify-between items-center gap-3 lg:w-72'>
        <label htmlFor={id} className='font-medium lg:w-[250px]'>{name}</label>
        <input id={id} type={type} className='border h-9 w-58 lg:w-64 rounded-xl p-5 outline-none'/>
    </div>
  )
}

export default Input