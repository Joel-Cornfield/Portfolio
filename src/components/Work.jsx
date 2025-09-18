import React from 'react'
import { projectData } from '../assets/assets'
import { FaGithub, FaDownload } from 'react-icons/fa'

const Work = () => {
  return (
    <div id='Work' className='py-20'>
      <div className='max-w-7xl mx-auto px-6 py-6'>
        <div className='mb-16 text-center'>
          <h2 className='text-4xl sm:text-5xl font-bold text-slate-700 mb-6'>
            Featured <span className='text-teal-600'>Projects</span>
          </h2>
          <p className='text-xl max-w-3xl mx-auto'>University and individual projects</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-12'>
          {projectData.map((project, index) => (
            <div
              key={index}
              className='group rounded overflow-hidden hover:shadow-lg transition cursor-pointer border border-gray-200 hover:-translate-y-1 duration-300'
            >
              {/* Project Image */}
              <div className='relative flex items-center justify-center'>
                <img className='group-hover:opacity-100' src={project.image} alt={project.title} />
              </div>

              {/* Project Content */}
              <div className='p-6'>
                <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                {project.university && (
                  <span className='inline-block bg-blue-100 text-blue-800 text-xs font-semibold mb-2 px-2 py-1 rounded-full'>
                    University Project 🎓
                  </span>
                )}
                {project.odin && (
                  <span className='inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold mb-2 px-2 py-1 rounded-full'>
                    The Odin Project 
                  </span>
                )}
                <p className='text-slate-900 text-sm'>{project.description}</p>

                {/* Tech Stack */}
                <div className='flex flex-wrap gap-2 mt-6'>
                  {project.tech.map((language, i) => (
                    <span
                      key={i}
                      className='px-4 py-1 bg-gray-100 text-xs font-semibold rounded-full'
                    >
                      {language}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className='flex flex-wrap gap-4 mt-6'>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='flex items-center gap-2 px-4 py-2 border border-slate-700 rounded-full text-slate-700 hover:bg-slate-700 hover:text-white transition'
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={`/${project.demo}`}
                      download={project.demo}
                      className='flex items-center gap-2 px-4 py-2 border border-teal-600 rounded-full text-teal-600 hover:bg-teal-600 hover:text-white transition'
                    >
                      <FaDownload /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
