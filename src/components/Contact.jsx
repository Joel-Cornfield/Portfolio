import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Contact = () => {
  return (
    <div id='Contact' className='py-20'> 
        <div className='max-w-7xl mx-auto px-6'>
            <div className='text-center mb-16'> 
                <h1 className='text-4xl lg:text-5xl font-bold mb-6'>Get in <span className='text-teal-800'>Touch</span></h1>
                
            </div>

            <div className='max-w-3xl mx-auto'>
                <form className='space-y-6'>
                    <div className='grid grid-cols-1 gap-6'>
                        <div>
                            <input
                            className='px-4 py-3 w-full border border-zinc-500 rounded outline-none'
                            placeholder='Enter Name'
                            type="text" />
                        </div>
                        <div>
                            <input
                            className='px-4 py-3 w-full border border-zinc-500 rounded outline-none'
                            placeholder='Enter Email'
                            type="email" />
                        </div>
                        <div>
                            <input
                            className='px-4 py-3 w-full border border-zinc-500 rounded outline-none'
                            placeholder='Enter Subject'
                            type="text" />
                        </div>
                        <div>
                            <textarea
                            className='px-4 py-3 w-full h-40 border border-zinc-500 rounded outline-none'
                            placeholder='Enter Message'
                            type="textarea" />
                        </div>
                        <div className='flex items-center justify-center'>
                            <a href='mailto:cornfieldjoel@gmail.com' className='flex items-center gap-2 px-8 py-4 bg-zinc-800 text-white text-center cursor-pointer hover:bg-zinc-900 transition rounded-full'>
                                Send Message 
                                <FaArrowRight className='text-sm'/>
                            </a>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
  )
}

export default Contact