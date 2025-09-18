import React from 'react'
import { profileData, assets } from '../assets/assets'
import { FaCode } from 'react-icons/fa'

const About = () => {
  return (
    <div id='About' className='py-20'>
        <div className='max-w-7x; mx-auto px-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='order-1'>
                    <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                        <span className='text-teal-800'>About</span>
                        <span>Me</span>
                    </h2>
                    <p class="text-lg text-slate-800 mb-4">
                        I’m a <strong>Computer Science graduate</strong> from The University of Western Australia with a strong foundation in both software development 
                        and problem-solving. Over the course of my studies and personal projects, I’ve developed proficiency 
                        in <strong>Java, Python, and C</strong>, and built practical experience in  <strong>web development</strong> with React, Node.js, Prisma, and MongoDB.
                    </p>
                    <p class="text-lg text-slate-800 mb-4">
                        Beyond coding, I enjoy designing applications that prioritize <strong>usability and efficiency</strong>, from building AI agents and real-time applications at university 
                        to full-stack web apps through self-directed learning like <em>The Odin Project</em>.
                    </p>
                    <p class="text-lg text-slate-800 mb-4">
                        I’m passionate about <strong>continuous learning</strong> and thrive when tackling real-world challenges—whether 
                        it’s applying algorithms, optimizing systems, or building intuitive user interfaces. 
                    </p>
                    <div className='flex flex-col sm:flex-row items-center justify-between gap-6 mb-6'>
                        {
                            profileData.map((data, index)=>(
                                <div key={index} className='w-full h-65 sm:w-50 p-6 border border-zinc-400 rounded hover:border-zinc-600 cursor-pointer hover:border-b-4 hover:border-r-4 hover:border-b-zinc-800 hover:border-r-zinc-800 transition duration-300 hover:-translate-y-1'>
                                    <FaCode className='text-3xl mb-4'/>
                                    <h1 className='text-xl font-bold mb-4'>{data.title}</h1>
                                    <p>{data.technologies.join(', ')}</p>
                                    {data.university && (
                                        <p className='mt-2 italic text-sm'>({data.university.join(', ')})</p>
                                    )}
                                </div>
                            ))
                        }
                    </div>
                    <a 
                        href="/Resume_JoelCornfield.pdf"
                        download="Joel-Cornfield-Resume.pdf"
                        className='px-8 py-4 bg-zinc-700 text-white rounded-full cursor-pointer transition duration-300 hover:bg-zinc-900'
                    >
                        Download Resume
                    </a>

                </div>
                <div className='order-1 lg:order-2 flex justify-center'>
                    <div className='relative w-full max-w-md'>
                        <div className='rounded overflow-hidden'>
                            <img className='w-full h-full object-cover' src={assets.profileImg} alt="Profile" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About