import React from 'react'
import { FaBars,FaTimes } from "react-icons/fa";
import { useState } from 'react';

const Navbar = () => {

    const links = [{name:"ABOUT ME",path:"/"},{name:"RESUME",path:"/"},{name:"PROJECTS",path:"/"},{name:"CONTACT",path:"/"}]

    const [isOpen,setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (

    <nav className='p-14 relative flex justify-between items-center h-36'>

        <a href='/' className='flex flex-col justify-start items-center gap-2'>
            <h1 className='text-3xl font-bold'>Apiwat Lee</h1>
            <p className='text-sm text-slate-400'>Software Developer</p>
        </a>

        {/* desktop menu */}
        <ul className='hidden lg:flex mt-5 items-center justify-between w-[400px]'>
            {links.map((link,index)=>{
                return ( 
                <li key={index} className='flex justify-center border rounded-md hover:bg-orange-800 hover:text-white'>
                    <a href={link.path} className='p-2'>{link.name}</a>
                </li>)
            })}
        </ul>

        {/* hamburger */}
        <div className='absolute right-20'>
            <button onClick={toggleMenu}> 
                {isOpen ? <FaTimes className='text-3xl lg:hidden hover:text-orange-800'/> : <FaBars className='text-3xl lg:hidden hover:text-orange-800'/>}
            </button>
        </div>

        {/* mobile menu */}
        {isOpen && 
        <div className='absolute top-[142px] left-0 w-full lg:hidden bg-orange-100 '>
            <ul className=''>
                {links.map((link,index)=>{
                    return ( 
                    <li key={index} className='pl-12 py-2 hover:bg-orange-800 hover:text-white'>
                        <a href={link.path} className='p-2'>{link.name}</a>
                    </li>)
                })}
            </ul>
        </div>}
        

    </nav>

  )
}

export default Navbar