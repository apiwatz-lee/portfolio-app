import './App.css'
import HomePage from './pages/HomePage'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import MyStories from './pages/MyStories'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/aboutme' element={<MyStories/>}/>
              <Route path='/resume' element={<Resume/>}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App
