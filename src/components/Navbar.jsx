import React from 'react'
import { FaBars,FaTimes } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({page}) => {
    const links = [{name:'HOME',path:'/'},{name:'ABOUT ME',path:'/aboutme'},{name:'PROJECTS',path:'/projects'},{name:'RESUME',path:'/resume'},{name:'CONTACT',path:'/contact'}]
    const profile = {name:'Apiwat Lee',role:'Software Engineer'}

    const [isOpen,setIsOpen] = useState(false)

    const desktopMenu = links.map((link,index)=>{
        return ( 
            <li key={index} className={`flex justify-center rounded-md duration-300 hover:bg-[#3E3F42] hover:text-white ${link.name === 'CONTACT' ? `border border-slate-900`:null}`}>
                <Link to={link.path} className='p-2'>{link.name}</Link>
            </li>)
    })

    const mobileMenu = links.map((link,index)=>{
        return ( 
            <li key={index} className={`flex justify-center rounded-md w-full duration-300 hover:bg-[#3E3F42] hover:text-white ${link.name === 'CONTACT'?` w-28 border border-[#A8A8A1]`:null}`}>
                <Link to={link.path} className='text-sm p-2 sm:p-4'>{link.name}</Link>
            </li>)
    })

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (

    <>
        <aside className={`lg:hidden fixed bg-[#FEFCFF] duration-300  ${isOpen ? 'right-0':'right-[-100%]'} h-full w-[150px] flex flex-col justify-center items-center gap-10 z-40`}>
            <div className='w-full absolute top-20 flex justify-end px-8'>
                {/* <FaTimes className='text-2xl hover:text-white duration-300' onClick={toggleMenu}/> */}
            </div>
            {mobileMenu}
        </aside>
        
        <nav className={`sticky top-0 p-14 h-1 flex justify-between items-center font-montserrat z-50 ${page !== "HomePage" ? `bg-mountain bg-top bg-cover shadow-md`:null}`}>
            <a href='/' className='flex flex-col justify-start items-center gap-2'>
                <h1 className='text-3xl font-bold'>{profile.name}</h1>
                <p className='text-sm text-slate-500'>{profile.role}</p>
            </a>
            {/* desktop menu */}
            <ul className='hidden lg:flex mt-5 items-center justify-between w-[600px] '>
                {desktopMenu}
            </ul>
            {/* Hamburger Icon */}
            <div className='lg:hidden duration-500'>
                    {isOpen ? <FaTimes onClick={toggleMenu} className='text-2xl hover:text-slate-500'/> : <FaBars onClick={toggleMenu} className='text-2xl hover:text-slate-500'/>}
            </div>
        </nav> 
    </>

  )
}

export default Navbar