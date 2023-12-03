import React from 'react'

const Textarea = ({title,name,id,value,onChange}) => {
  
  return (
    <div className='w-full flex flex-col justify-between items-center gap-3 lg:w-[680px] lg:gap-3'>
        <h2 className='font-medium'>{title}</h2>
        <textarea name={name} id={id} cols="45" rows="5" className='border w-52 p-2 text-center outline-none lg:w-5/6 rounded-lg'
        value={value}
        onChange={onChange} />
    </div>
  )
}

export default Textarea