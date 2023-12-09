import React from 'react'
import { FaBars,FaTimes } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { links } from "../data/NavBar";
import { profile } from "../data/NavBar"
import ToggleTheme from './ToggleTheme';
import { useContext } from 'react';
import { AppContext } from '../App';

const Navbar = ({page}) => {

    const {darkTheme,primaryDarkTheme} = useContext(AppContext)
    const [isOpen,setIsOpen] = useState(false)

    const desktopMenu = links.map((link)=>{
        return ( 
            <li key={link.id} className={`flex justify-center rounded-md duration-300 hover:bg-gray-700 hover:text-white ${link.name === 'CONTACT' && darkTheme ? 'border border-white':link.name === 'CONTACT' ? 'border border-slate-900':null}`}
            onClick={()=>{
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}
            >
                <Link to={link.path} className='p-2'>{link.name}</Link>
            </li>)
    })

    const mobileMenu = links.map((link)=>{
        return ( 
            <li key={link.id} className={`flex justify-center rounded-md w-full duration-300 hover:bg-gray-700 hover:text-white`} 
            onClick={()=>{
                setIsOpen(!isOpen)
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                }}>
                <Link to={link.path} className='text-sm p-2 sm:p-4'>{link.name}</Link>
            </li>)
    })

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (

    <>
        <aside className={`lg:hidden fixed z-10 duration-300  ${isOpen && darkTheme ? `right-0 ${primaryDarkTheme}`: isOpen ? 'right-0 bg-[#FEFCFF]':'right-[-100%]'} h-full w-[150px] flex flex-col justify-center items-center gap-10`}>
            <FaTimes className='text-2xl hover:text-slate-500 fixed top-12' onClick={toggleMenu}/>
            {mobileMenu}
            <ToggleTheme/>
        </aside>
        
        <nav className={`sticky top-0 p-14 h-1 flex justify-between items-center font-montserrat bg-mountain bg-top bg-cover outline-none ${page !== 'HomePage' ? `shadow-md `:null} ${darkTheme ? `bg-none ${primaryDarkTheme}`:null}`}>
            <a href='/' className='flex flex-col justify-center items-center gap-2'>
                <h1 className='text-xl lg:text-3xl font-bold'>{profile.name}</h1>
                <p className={`text-sm text-slate-500 ${darkTheme? 'text-slate-400':null}`}>{profile.role}</p>
            </a>
            {/* desktop menu */}
            <ul className='hidden lg:flex mt-5 items-center justify-between w-[600px] '>
                {desktopMenu}
                <ToggleTheme/>
            </ul>
            {/* Hamburger Icon */}
            <div className='lg:hidden duration-500'>
                    {/* {isOpen ? <FaTimes onClick={toggleMenu} className=' text-2xl hover:text-slate-500'/> : <FaBars onClick={toggleMenu} className='text-2xl hover:text-slate-500'/>} */}
                    <FaBars onClick={toggleMenu} className='text-2xl hover:text-slate-500'/>
            </div>
        </nav>         
    </>

  )
}

export default Navbar