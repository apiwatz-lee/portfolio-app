import React from 'react'

const Textarea = ({title,name,id}) => {
  return (
    <div className='w-full flex flex-row justify-between items-center gap-10 lg:w-[680px] lg:flex-col lg:gap-3'>
        <h2 className='font-medium'>{title}</h2>
        <textarea name={name} id={id} cols="45" rows="5" className='border w-64 p-2 text-center outline-none lg:w-5/6 rounded-lg' />
    </div>
  )
}

export default Textarea