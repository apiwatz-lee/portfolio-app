import React from 'react'
import { FaBars,FaTimes } from "react-icons/fa";
import { useState } from 'react';

const Navbar = ({page}) => {
    const links = [{name:"HOMEPAGE",path:"/"},{name:"ABOUT ME",path:"/aboutme"},{name:"RESUME",path:"/resume"},{name:"PROJECTS",path:"/projects"},{name:"CONTACT",path:"/contact"}]
    const profile = {name:"Apiwat Lee",role:"Software Engineer"}

    const [isOpen,setIsOpen] = useState(false)

    const mobileMenu = links.map((link,index)=>{
        return ( 
            <li key={index} className='flex justify-center rounded-md hover:bg-[#3E3F42] hover:text-white'>
                <a href={link.path} className='text-sm p-2 sm:p-4'>{link.name}</a>
            </li>)
    })

    const desktopMenu = links.map((link,index)=>{
        return ( 
            <li key={index} className='flex justify-center rounded-md hover:bg-[#3E3F42] hover:text-white'>
                <a href={link.path} className='p-2'>{link.name}</a>
            </li>)
    })

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    console.log(page);

    return (

    <>
        <nav className={`p-14 relative flex justify-between items-center h-36 font-montserrat ${page !== "HomePage" ? `bg-mountain shadow-md`:null}`}>

            <a href='/' className='flex flex-col justify-start items-center gap-2'>
                <h1 className='text-3xl font-bold'>{profile.name}</h1>
                <p className='text-sm text-slate-500'>{profile.role}</p>
            </a>

            {/* desktop menu */}
            <ul className='hidden lg:flex mt-5 items-center justify-between w-[600px] '>
                {desktopMenu}
            </ul>

            {/* mobile menu */}
            <section className='absolute lg:hidden' onClick={toggleMenu}>

                <div className={`fixed h-screen duration-500 ${isOpen ? 'right-0 top-0':'right-[-100%] top-0'} w-48`}>

                    {isOpen ? <FaTimes className='text-2xl hover:text-slate-600 fixed right-10 top-16'/> 
                            : <FaBars className='text-2xl fixed right-10 top-16 hover:text-slate-600'/>}
                    
                    <ul className='pt-28'>
                        {mobileMenu}
                    </ul>

                </div>

            </section>

        </nav>
    </>

  )
}

export default Navbar