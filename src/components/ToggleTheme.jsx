import React from 'react'
import { useContext,useState } from 'react'
import { AppContext } from '../App'
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { useEffect } from 'react';

const ToggleTheme = () => {

    const {darkTheme,setDarkTheme} = useContext(AppContext)
    const [isHovered,setIsHovered] = useState(false)
    const [isVisible, setIsVisible] = useState(true);


    const handleToggle = () => {
        setDarkTheme(!darkTheme)
    }

    const handleMouseEnter = () => {
      setIsHovered(true)
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
    }

    useEffect(() => {
      const handleVisibilityChange = () => {
        setIsVisible(!document.hidden);
      };
  
      document.addEventListener('visibilitychange', handleVisibilityChange);
  
      return () => {
        console.log('unmount code');
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }, []);
  
  return (

    <button 
      onClick={handleToggle} 
      alt='changeTheme' 
      onMouseOverCapture={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
      className={darkTheme ? 'border border-gray-500 rounded-full p-2 shadow-xl':'border rounded-full p-2 shadow-xl'}>

        {darkTheme? <MdSunny className='text-2xl' /> :<FaMoon className='text-xl'/>}
        {isHovered && isVisible && window.innerWidth > 1024 ?

            <span 
              className={`absolute rounded-full duration-500 right-10 top-[100px] w-38 p-3 ${darkTheme ? 'bg-white text-black':'bg-gray-700 text-white'}`}>
              {darkTheme ? 'light mode' : 'dark mode'}
            </span> 
            
            : null}

    </button>
  )
}

export default ToggleTheme