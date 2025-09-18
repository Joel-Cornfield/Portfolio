import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div id='Footer' className='py-12 border-t border-zinc-200'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          
          {/* Name / Logo */}
          <div className='mb-6 md:mb-0'>
            <span className='uppercase text-2xl font-bold'>Joel Cornfield</span>
          </div>
          
          {/* Social Links */}
          <div className='flex space-x-6 mb-6 md:mb-0'>
            <a
              href="https://github.com/Joel-Cornfield"
              target="_blank"
              rel="noopener noreferrer"
              className='text-teal-800 hover:text-teal-900 transition text-2xl'
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/joel-cornfield/"
              target="_blank"
              rel="noopener noreferrer"
              className='text-teal-800 hover:text-teal-900 transition text-2xl'
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Copyright */}
          <div className='text-zinc-900 text-sm'>
            © 2025 Joel Cornfield, All rights reserved.
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
