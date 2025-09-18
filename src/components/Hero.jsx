import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { assets } from '../assets/assets'


const Hero = () => {
  return (
    <div id='Home' className='min-h-screen flex items-center pt-16'>
        <div className='max-w-7xl mx-auto px-6 py-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                <div className='text-center lg:text-left'>
                    <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold mb-10'>
                        <span className='text-cyan-700'>Computer Science</span>
                        <br></br>
                        <span className='text-zinc-700'>Graduate</span>
                    </h1>
                    <p className='text-xl text-zinc-900 mb-6'> 
                    Computer Science graduate passionate about building efficient and user-focused software. Skilled in Java, Python, and C, with experience in web development using React, Node.js, and Prisma. Always eager to learn and solve real-world challenges through technology.
                    </p>
                    <div className='flex flex-col md:flex-row items-center gap-4'>
                        <button className='flex gap-2 items-center px-10 py-4 bg-black rounded-full text-slate-200 hover:text-white cursor-pointer'
                            onClick={() => document.getElementById('Work')?.scrollIntoView({behavior: 'smooth'})}
                        >
                            View My Work
                            <FaArrowRight />
                        </button>
                        <button className='flex gap-2 items-center border border-slate-400 rounded-full px-10 py-4 hover:border-slate-800 transition duration-300 cursor-pointer'
                            onClick={() => window.location.href = 'mailto:cornfieldjoel@gmail.com'}
                        >
                            Contact Me
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
                {/* image section right side */}
                <div className='flex justify-center'>
                    <div className='relative w-72 h-72 sm:w-80 sm:h-80 floating'>
                        <div className='absolute inset-0 rounded-2xl overflow-hidden border-4 border-slate-600/30 glow'>
                            <img className='w-full h-full object-cover' src={assets.profileImg} alt="Profile"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero