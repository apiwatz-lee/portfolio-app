import React from 'react'

const Input = ({name,id,type,value,onChange,onBlur,errorMessage}) => {

  return (
    <div className='w-full flex flex-col justify-between items-center gap-1 lg:w-72'>
        <label htmlFor={id} className='font-medium lg:w-[250px]'>{name}</label>
        <input name={name} id={id} type={type} 
        value={value}
        onChange={onChange} 
        onBlur={onBlur} 
        className='border h-9 w-58 lg:w-64 rounded-xl p-5 outline-none'/>
        {errorMessage ? <p className={`text-xs lg:w-5/6 text-red-500`}>{errorMessage[id]}</p>:null}  
    </div>
  )
}

export default Input