import React,{ useState,useRef } from 'react'
import Input from './Input'
import Textarea from './Textarea'
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import ContactLoading from './ContactLoading';
import ContactAlertDialog from './ContactAlertDialog';
import { useDisclosure } from "@chakra-ui/react";
import ReCAPTCHA from "react-google-recaptcha"

  const ContactForm = () => {  

    const { onClose } = useDisclosure()

    const form = useRef();
    const navigate = useNavigate();

    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [subject,setSubject] = useState('')
    const [message,setMessage] = useState('')
    const [errorMessage,setErrorMessage] = useState({})
    const [isLoading,setIsLoading] = useState(false)
    const [isSubmit,setIsSubmit] = useState(false)
    const [capVal,setCapVal] = useState(false)
      
    
    const handleValidate = (e) =>  {
      e.preventDefault();
      if(!firstname){
        setErrorMessage({firstname:'Please fill in your first name'})
      } else if(!lastname){
        setErrorMessage({lastname:'Please fill in your last name'})
      }else if(!subject){
        setErrorMessage({subject:'Please fill in your subject'})
      }else if(!email){
        setErrorMessage({email:'Please fill in your email'})
      }else if(!message){
        setErrorMessage({message:'Please fill in your message'})
      }else{
        setErrorMessage(null)
        setIsSubmit(true)
      }
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      onClose()     
      setIsLoading(true)
      emailjs
      .sendForm('service_mwr3m97', 'template_u0c80az', form.current, 'nXyMDY5ObVhIKjeKs')
      .then((result) => {
          console.log(result.text);
          console.log('message sent')
          setIsLoading(false)
          navigate("/")         
      }, (error) => {
          console.log(error.text);
      });      
     
    }

    const handleCancel = () => {
      onClose()
      setIsSubmit(false)
    }
   
  return (

    <main className='font-montserrat flex flex-col justify-center items-center gap-5 2xl:h-[700px]'>
        <h1 className='text-center font-bold text-4xl mt-5'>Contact</h1>
        
        <ReCAPTCHA
          sitekey='6LfAEiYpAAAAAO1uTWUxu-ztUevzXuhDMNqfWU1U'
          onChange={()=>setCapVal(true)}  
          />

        <form className='border w-5/6 flex flex-col justify-center items-center gap-5 rounded-xl p-10 bg-[#fcfbfb83] lg:w-[800px] lg:flex-row lg:flex-wrap' id='contactForm'
        ref={form}
        >
            <Input name='Firstname' id='firstname' type='text'
            disabled={!capVal} 
            value={firstname} 
            onChange={(e)=>{setFirstname(e.target.value)}}
            errorMessage={errorMessage}
            />

            <Input name='Lastname' id='lastname' type='text' 
            disabled={!capVal} 
            value={lastname} 
            onChange={(e)=>{setLastname(e.target.value)}}
            errorMessage={errorMessage}
            />
            <Input name='Subject' id='subject' type='text' 
            disabled={!capVal} 
            value={subject} 
            onChange={(e)=>{setSubject(e.target.value)}}
            errorMessage={errorMessage}
            />

            <Input name='Email' id='email' type='email' 
            disabled={!capVal} 
            value={email} 
            onChange={(e)=>{setEmail(e.target.value)}}
            errorMessage={errorMessage}
            />

            <Textarea title='Message' name='message' id='message' 
            disabled={!capVal} 
            value={message} 
            onChange={(e)=>{setMessage(e.target.value)}}
            errorMessage={errorMessage}
            />                  
     
            <button 
            disabled={!capVal}
            className='border px-5 py-2 rounded-full duration-300 font-medium text-sm lg:text-base hover:bg-[#3E3F42] hover:text-white'
            onClick={handleValidate} 
            >
              Send to Apiwat Lee
            </button>

            <ContactAlertDialog 
            handleSubmit={handleSubmit} 
            isSubmit={isSubmit}
            handleCancel={handleCancel}
            />
           
            <ContactLoading isLoading={isLoading}/>       

        </form>                 
    </main>
     
  )
}

export default ContactForm