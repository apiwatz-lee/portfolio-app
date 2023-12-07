import './App.css'
import HomePage from './pages/HomePage'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import MyStories from './pages/MyStories'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { useState,createContext } from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export const AppContext = createContext(null)

function App() {

    const primaryDarkTheme = 'bg-gray-900 text-white'
    const secondaryDarkTheme = 'bg-gray-800 text-white'
    const tertiaryDarkTheme = 'bg-gray-700 text-white'

    const [contact,setContact] = useState({
      firstname:'',
      lastname:'',
      email:'',
      subject:'',
      message:'',
    })
    const [errorMessage,setErrorMessage] = useState({})
    const [isLoading,setIsLoading] = useState(false)
    const [isSubmit,setIsSubmit] = useState(false)
    const [isSuccess,setIsSuccess] = useState(false) 
    const [capVal,setCapVal] = useState(false)
    const [darkTheme,setDarkTheme] = useState(true)


  return (
    <>
      <AppContext.Provider 
      value={{
        contact,
        setContact,
        errorMessage,
        setErrorMessage,
        isLoading,
        setIsLoading,
        isSubmit,
        setIsSubmit,
        isSuccess,
        setIsSuccess,
        capVal,
        setCapVal,
        darkTheme,
        setDarkTheme,
        primaryDarkTheme,
        secondaryDarkTheme,
        tertiaryDarkTheme
        }}>

        <BrowserRouter>
          <Navbar/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/aboutme' element={<MyStories/>}/>
                <Route path='/resume' element={<Resume/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
          <Footer/>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  )
}

export default App
