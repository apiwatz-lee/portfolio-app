import React,{ useRef} from 'react'
import Input from './Input'
import Textarea from './Textarea'
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import ContactLoading from './ContactLoading';
import ContactAlertDialog from './ContactAlertDialog';
import { useDisclosure } from "@chakra-ui/react";
import ReCAPTCHA from "react-google-recaptcha"
import { useContext } from 'react';
import { AppContext } from '../App';


  const ContactForm = () => {
    
    const {
      contact,
      setContact,
      errorMessage,
      setErrorMessage,
      isLoading,
      setIsLoading,
      isSubmit,
      setIsSubmit,
      setIsSuccess,
      capVal,
      setCapVal,
      darkTheme,
      primaryDarkTheme,
      secondaryDarkTheme,
      tertiaryDarkTheme
    } = useContext(AppContext)
 
      const { onClose } = useDisclosure()

      const form = useRef();
      const navigate = useNavigate(); 
    
      const handleValidate = (e) =>  {
      e.preventDefault();
      if(!contact.firstname){
        setErrorMessage({firstname:'Please fill in your first name'})
      } else if(!contact.lastname){
        setErrorMessage({lastname:'Please fill in your last name'})
      }else if(!contact.subject){
        setErrorMessage({subject:'Please fill in your subject'})
      }else if(!contact.email){
        setErrorMessage({email:'Please fill in your email'})
      }else if(!(/\S+@\S+\.\S+/.test(contact.email))){
        setErrorMessage({email:'Your email is invalid'})
      }else if(!contact.message){
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
            setIsSuccess(true)
            setContact({
              firstname:'',
              lastname:'',
              email:'',
              subject:'',
              message:'',
            })
            setCapVal(false)
            setIsSubmit(false)
                    
        }, (error) => {
            console.log(error.text);
        });      
      
      }

      const handleCancel = () => {
        onClose()
        setIsSubmit(false)
      }

   
  return (

    <main className={`font-montserrat flex flex-col justify-center items-center gap-5 2xl:h-[700px] py-5`}>
        <h1 className='text-center font-bold text-4xl mt-5'>Contact</h1>
        
        <ReCAPTCHA
          sitekey='6LfAEiYpAAAAAO1uTWUxu-ztUevzXuhDMNqfWU1U'
          onChange={()=>setCapVal(true)}  
          />

        <form className={`border w-5/6 flex flex-col justify-center items-center gap-5 rounded-xl p-10 bg-[#fcfbfb83] lg:w-[800px] lg:flex-row lg:flex-wrap ${darkTheme ? secondaryDarkTheme : null}`} 
        id='contactForm'
        ref={form}
        >
           
            <Input name='Firstname' id='firstname' type='text' placeholder='Will'
            disabled={!capVal} 
            value={contact.firstname} 
            onChange={(e)=>{setContact({...contact,firstname:e.target.value})}}
            errorMessage={errorMessage}
            />

            <Input name='Lastname' id='lastname' type='text' placeholder='Smith'
            disabled={!capVal} 
            value={contact.lastname} 
            onChange={(e)=>{setContact({...contact,lastname:e.target.value})}}
            errorMessage={errorMessage}
            />
            <Input name='Subject' id='subject' type='text'  placeholder='Job opportunity'
            disabled={!capVal} 
            value={contact.subject} 
            onChange={(e)=>{setContact({...contact,subject:e.target.value})}}
            errorMessage={errorMessage}
            />

            <Input name='Email' id='email' type='email' placeholder='willsmith@gmail.com'
            disabled={!capVal} 
            value={contact.email} 
            onChange={(e)=>{setContact({...contact,email:e.target.value})}}
            errorMessage={errorMessage}
            />

            <Textarea title='Message' name='message' id='message' 
            disabled={!capVal} 
            value={contact.message} 
            onChange={(e)=>{setContact({...contact,message:e.target.value})}}
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
           
            <ContactLoading 
            isLoading={isLoading}
            />       

        </form>                 
    </main>
     
  )
}

export default ContactForm