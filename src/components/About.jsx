import React from 'react'
import { profileData, assets } from '../assets/assets'
import { FaCode } from 'react-icons/fa'
import { downloadFile } from '../utils/downloadHelper'

const About = () => {
  const handleResumeDownload = (e) => {
    e.preventDefault();
    downloadFile('/Portfolio/Resume_JoelCornfield.pdf', 'Joel-Cornfield-Resume.pdf');
  };
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
                        I’m a Computer Science graduate from The University of Western Australia with a strong foundation in software development and problem-solving. I’ve built full-stack applications using React, Node.js, Express, PostgreSQL, and .NET, with experience implementing authentication, REST APIs, database systems, cloud services, and AI integrations.
                    </p>
                    <p class="text-lg text-slate-800 mb-4">
                        My projects include an AI-powered meeting notes application, a collaborative task management platform, and a full-stack booking system. I’ve also worked with Python, Java, C, and modern web technologies through university and self-directed projects.
                    </p>
                    <p class="text-lg text-slate-800 mb-4">
                        enjoy building software that is both practical and user-focused, and I'm particularly interested in opportunities where I can continue developing my skills while working on real-world software.
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
                    <button 
                        onClick={handleResumeDownload}
                        className='px-8 py-4 bg-zinc-700 text-white rounded-full cursor-pointer transition duration-300 hover:bg-zinc-900'
                    >
                        Download Resume
                    </button>

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