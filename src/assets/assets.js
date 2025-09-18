import { FaCode, FaMicrochip, FaReact, FaSchool } from 'react-icons/fa'
import profileImg from '../assets/profile.png'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'
import project7 from '../assets/project7.png'
import { FaProjectDiagram } from 'react-icons/fa'

export const assets = {
    profileImg,
}

export const navMenu = ['Home', 'Work', 'Skills', 'About', 'Contact']

export const skillsData = [
    {
        icon: FaMicrochip,
        title: 'Backend',
        technologies: ['Python', 'Node.js', 'SQL', 'Postgres', 'RDMBS', 'Flask', 'Express', 'APIs', 'HTTP']
    },
    {
        icon: FaReact, 
        title: 'Frontend',
        technologies: ['React', 'HTML', 'CSS', 'Bootstrap', 'TailwindCSS', 'JavaScript', 'Jinja', 'AJAX', 'HTTP']
    },
    {
        icon: FaCode,
        title: 'DevOps',
        technologies: ['Linux', 'Git', 'Github', 'CI/CD']
    }
]

export const projectData = [
    {
      title: "Experimental Platform - Multimodal LLM in Road Safety",
      description: "This project aimed to implement red teaming techniques on large language models (LLMs) to evaluate their response accuracy and decision-making capabilities in road safety-related scenarios. The focus was to process both images and videos, apply filters and overlays, and assess LLM performance.",
      image: project1,
      tech: ["Python", "Computer Vision", "Image Processing", "Prompt Engineering", "API Integration", "Data Analysis", "Git/GitHub"],
      demo: "Red_Teaming_CITS3200_Project.pdf",
      github: "https://github.com/23348918/CITS3200-Group37",
      university: true,
    },
    {
      title: "Intelligent Agent for The Resistance Game",
      description: "Developed an AI agent for the social deduction game *The Resistance*. The agent incorporated Bayesian reasoning, trust evaluation, and dynamic decision-making strategies to maximize performance in adversarial and cooperative scenarios. It analyzed voting patterns, mission outcomes, and player interactions to infer hidden roles and optimize gameplay.",
      image: project2,
      tech: ["Python", "AI Development", "Bayesian Reasoning", "Reinforcement Learning", "Game Theory", "Git/GitHub"],
      university: true,
    },
    {
        title: "UWA GeoGuessr-Style Web Application",
        description:
        "A UWA-themed GeoGuessr-style game where users identify campus locations based on images and hints. Includes user authentication, real-time gameplay, leaderboards, personal statistics, and a friend system with notifications. Admins can manage location data and content. Built as a group project in a Web Development unit.",
        image: project3,
        tech: [
        "Python",
        "Flask",
        "Jinja Templates",
        "SQL",
        "HTML",
        "CSS",
        "JavaScript",
        "Socket Events",
        "Authentication",
        "Unit Testing",
        "Selenium",
        "Git/GitHub"
        ],
        github: "https://github.com/Joel-Cornfield/Group_gc_70",
        university: true,
    },
    {
        title: "Social Media Application",
        description: "A full-stack social media app built as part of The Odin Project. Includes user authentication, profile management, posting, likes, comments, following/unfollowing, and chat functionality. Structured into a backend API and frontend client.",
        image: project4,
        tech: [
            "Node.js",
            "Express",
            "MongoDB",
            "React",
            "JavaScript",
            "REST API",
            "Prisma",
            "JWT Authentication",
            "Socket.io",
            "Git/GitHub"
        ],
        github: "https://github.com/Joel-Cornfield/SocialMediaApp",
        odin: true,
    },
    {
        title: "Marvel Photo Tagging Game",
        description: "A Where's Waldo-inspired photo tagging game featuring Marvel characters as part of The Odin Project. Players must identify hidden characters within an image, with backend validation, scoring, and leaderboards. Includes JWT authentication and a PostgreSQL database for secure and persistent gameplay data.",
        image: project5,
        tech: [
            "React", 
            "Styled Components", 
            "Framer Motion", 
            "Express.js", 
            "Prisma", 
            "PostgreSQL", 
            "JWT Authentication"
        ],
        github: "https://github.com/Joel-Cornfield/PhotoTaggingApp", 
        demo: "project5.mp4",
        odin: true, 
    },
    {
        title: "Weather App",
        description: "A responsive weather application that fetches real-time data from the OpenWeather API. Features include city-based search, and a clean, responsive UI. Built as part of The Odin Project curriculum.",
        image: project6,
        tech: ["HTML5", "CSS3", "JavaScript", "API Integration", "Responsive Design", "Webpack"],
        github: "https://github.com/Joel-Cornfield/Weather-App/tree/main",
        demo: "project6.mp4",
        odin: true,
    },
    {
        title: "Etch-a-Sketch",
        description: "A simple interactive drawing app built for The Odin Project. Users can sketch on a customizable grid with options for color selection, rainbow mode, and reset. Great for experimenting with DOM manipulation and user interaction.",
        image: project7,
        tech: [
            "HTML5",
            "CSS3",
            "JavaScript"
        ],
        github: "https://github.com/Joel-Cornfield/etch-a-sketch",
        odin: true,
    },
]

export const profileData = [
    {
        icon: FaCode,
        title: 'Languages',
        technologies: ['Java', 'Python', 'C', 'JavaScript']
    },
    {
        icon: FaSchool,
        title: 'Education',
        technologies: ['Bachelor of Science in Computer Science'],
        university: ['University of Western Australia']
    },
    {
        icon: FaProjectDiagram,
        title: 'Projects',
        technologies: ['University projects', 'Individual projects', 'TheOdinProject']
    }
]

