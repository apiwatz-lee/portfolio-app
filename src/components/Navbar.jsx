import React from 'react'
import { FaBars,FaTimes } from "react-icons/fa";
import { useState } from 'react';
import Me from "../assets/me.jpg"

const Navbar = () => {
    const links = [{name:"ABOUT ME",path:"/"},{name:"RESUME",path:"/"},{name:"PROJECTS",path:"/"},{name:"CONTACT",path:"/"}]
    const profile = {name:"Apiwat Lee",role:"Software Engineer"}

    const mobileMenu = links.map((link,index)=>{
        return ( 
        <li key={index} className='pl-12 py-2 text-[15px] rounded-md hover:text-white hover:bg-[#3E3F42]'>
            <a href={link.path} className='p-2'>{link.name}</a>
        </li>)
    })

    const desktopMenu = links.map((link,index)=>{
        return ( 
        <li key={index} className='flex justify-center rounded-md hover:bg-[#3E3F42] hover:text-white'>
            <a href={link.path} className='p-2'>{link.name}</a>
        </li>)
    })

    const [isOpen,setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (

    <nav className='p-14 relative flex justify-between items-center h-36'>

        <a href='/' className='flex flex-col justify-start items-center gap-2'>
            <h1 className='text-3xl font-bold'>{profile.name}</h1>
            <p className='text-sm text-slate-500 lg:text-slate-900'>{profile.role}</p>
        </a>

        <ul className='hidden lg:flex mt-5 items-center justify-between w-[400px] '>
            {desktopMenu}
        </ul>

        {/* hamburger */}
        <div className='absolute right-10'>
            <button onClick={toggleMenu}> 
                {isOpen ? <FaTimes className='text-2xl lg:hidden hover:text-slate-600'/> : <FaBars className='text-2xl lg:hidden hover:text-slate-600'/>}
            </button>
        </div>

       
        {isOpen && 
        <div className='fixed right-10 top-24 text-center lg:hidden'>
            <ul>
                {mobileMenu}
            </ul>
        </div>}
        

    </nav>

  )
}

export default Navbar