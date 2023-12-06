import React from 'react'
import { Link } from 'react-router-dom'

const ButtonLink = ({path,text}) => {
  return (
    <>
         <Link to={path}>
            <button 
                onClick={()=>{window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} 
                className='border p-3 rounded-lg duration-300 hover:bg-gray-700 hover:text-white'
                >                
                {text}
            </button>
        </Link>
    </>
  )
}

export default ButtonLink