import React from 'react'
import { projectData } from '../assets/assets'
import { FaGithub, FaDownload, FaLink } from 'react-icons/fa'
import { downloadFile } from '../utils/downloadHelper'

const ProjectGrid = ({ projects }) => (
  <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-16'>
    {projects.map((project, index) => (
      <div
        key={index}
        className='group rounded overflow-hidden hover:shadow-lg transition cursor-pointer border border-gray-200 hover:-translate-y-1 duration-300'
      >
        <img src={project.image} alt={project.title} />

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

          <div className='flex flex-wrap gap-2 mt-6'>
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className='px-4 py-1 bg-gray-100 text-xs font-semibold rounded-full'
              >
                {tech}
              </span>
            ))}
          </div>

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
              <button
                onClick={() => downloadFile(`/Portfolio/${project.demo}`, project.demo.split('/').pop())}
                className='flex items-center gap-2 px-4 py-2 border border-teal-600 rounded-full text-teal-600 hover:bg-teal-600 hover:text-white transition'
              >
                <FaDownload /> Demo
              </button>
            )}

            {project.live_link && (
              <a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className='flex items-center gap-2 px-4 py-2 border border-teal-600 rounded-full text-teal-600 hover:bg-teal-600 hover:text-white transition'
              >
                <FaLink /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
)

const Work = () => {
  const featured = projectData.filter(p => p.category === 'featured')
  const university = projectData.filter(p => p.category === 'university')
  const additional = projectData.filter(p => p.category === 'additional')

  return (
    <div id='Work' className='py-20'>
      <div className='max-w-7xl mx-auto px-6'>

        <h2 className='text-4xl sm:text-5xl font-bold text-slate-700 mb-6'>
          Featured <span className='text-teal-600'>Projects</span>
        </h2>
        <ProjectGrid projects={featured} />

        <h2 className='text-3xl font-bold text-slate-700 mb-6'>
          University Projects
        </h2>
        <ProjectGrid projects={university} />

        <h2 className='text-3xl font-bold text-slate-700 mb-6'>
          Additional Projects
        </h2>
        <ProjectGrid projects={additional} />

      </div>
    </div>
  )
}

export default Work
