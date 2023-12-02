import React from 'react'
import Navbar from '../components/Navbar'

const Contact = () => {
  
  return (
    <>
        <Navbar page='Contact'/>
        <main className='font-montserrat flex flex-col justify-center items-center gap-5'>
                <h1 className='text-center font-bold text-4xl mt-5'>Contact</h1>

                <form className='border w-5/6 flex flex-col justify-center items-center gap-5 rounded-xl p-10 bg-[#fcfbfb83] lg:w-[900px] lg:flex-row lg:flex-wrap' id='contactForm'>

                    <div className='flex flex-row justify-between items-center gap-10 w-96 lg:flex-col lg:gap-3'>
                        <label htmlFor='firstname' className='font-medium lg:w-[250px]'>Firstname</label>
                        <input id='firstname' type="text" className='border h-9 w-64 rounded-xl p-5 text-center outline-none'/>
                    </div>

                    <div className='flex flex-row justify-between items-center gap-10 w-96 lg:flex-col lg:gap-3'>
                        <label htmlFor='lastname' className='font-medium lg:w-[250px]'>Lastname</label>
                        <input id='lastname' type="text" className='border h-9 w-64 rounded-xl p-5 text-center outline-none'/>
                    </div>

                    <div className='flex flex-row justify-between items-center gap-10 w-96 lg:flex-col lg:gap-3'>
                        <label htmlFor='email' className='font-medium lg:w-[250px]'>Email</label>
                        <input id='email' type="text" className='border h-9 w-64 rounded-xl p-5 text-center outline-none'/>
                    </div>

                    <div className='flex flex-row justify-between items-center gap-10 w-96 lg:flex-col lg:gap-3'>
                        <label htmlFor='subject' className='font-medium lg:w-[250px]'>Subject</label>
                        <input id='subject' type="text" className='border h-9 w-64 rounded-xl p-5 text-center outline-none'/>
                    </div>

                    <div className='flex flex-row justify-between items-center gap-10 w-96 lg:flex-col lg:gap-3'>
                      <h2 className='font-medium'>Message</h2>
                      <textarea name="message" id="contactForm" cols="45" rows="5" className='border p-2 text-center outline-none lg:w-5/6 rounded-lg' placeholder='Type your message here ...'> </textarea>
                    </div>
                                      
                </form>

                {/* <div className='border flex flex-col w-5/6 justify-center items-center text-center mb-5'>
                      <h2 className='border font-medium'>Message</h2>
                      <textarea name="message" id="contactForm" cols="45" rows="5" className='border p-2 text-center outline-none lg:w-5/6 rounded-lg' placeholder='Type your message here ...'> </textarea>
                </div> */}

            
        </main>
    </>
  )
}

export default Contact