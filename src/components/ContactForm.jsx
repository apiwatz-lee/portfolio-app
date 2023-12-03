import React from 'react'
import { useState,useRef } from 'react'
import Input from './Input'
import Textarea from './Textarea'
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const form = useRef();

    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [subject,setSubject] = useState('')
    const [message,setMessage] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault()
        
      emailjs
      .sendForm('service_mwr3m97', 'template_u0c80az', form.current, 'nXyMDY5ObVhIKjeKs')
      .then((result) => {
          console.log(result.text);
          console.log('message sent')
      }, (error) => {
          console.log(error.text);
      });
    }

  return (

    <main className='font-montserrat flex flex-col justify-center items-center gap-5 2xl:h-[700px]'>
        <h1 className='text-center font-bold text-4xl mt-5'>Contact</h1>
        <form className='border w-5/6 flex flex-col justify-center items-center gap-5 rounded-xl p-10 bg-[#fcfbfb83] lg:w-[800px] lg:flex-row lg:flex-wrap' id='contactForm'
        ref={form}
        onSubmit={handleSubmit}
        >
            <Input name='Firstname' id='firstname' type='text' value={firstname} onChange={(e)=>{setFirstname(e.target.value)}}/>
            <Input name='Lastname' id='lastname' type='text' value={lastname} onChange={(e)=>{setLastname(e.target.value)}}/>
            <Input name='Subject' id='subject' type='text' value={subject} onChange={(e)=>{setSubject(e.target.value)}}/>
            <Input name='Email' id='email' type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <Textarea title='Message' name='message' id='contactForm' value={message} onChange={(e)=>{setMessage(e.target.value)}}/>    
            <button className='border px-5 py-2 rounded-full duration-300 font-medium text-sm lg:text-base hover:bg-[#3E3F42] hover:text-white' type='submit'>
              Send to Apiwat Lee
            </button>
        </form>                         
    </main>
  )
}

export default ContactForm