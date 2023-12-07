import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

const ToggleTheme = () => {

    const {darkTheme,setDarkTheme} = useContext(AppContext)

    const handleToggle = () => {
        setDarkTheme(!darkTheme)
    }
  
  return (

    <button onClick={handleToggle}>
        {darkTheme? <MdSunny className='text-2xl' /> :<FaMoon className='text-xl'/>}
    </button>
  )
}

export default ToggleTheme