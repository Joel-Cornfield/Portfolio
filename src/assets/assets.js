import { FaCode, FaMicrochip, FaReact, FaSchool } from 'react-icons/fa'
import profileImg from '../assets/profile.png'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'
import project7 from '../assets/project7.png'
import project8 from '../assets/project8.png'
import project9 from '../assets/project9.png'
import { FaProjectDiagram } from 'react-icons/fa'

export const assets = {
    profileImg,
}

export const navMenu = ['Home', 'Work', 'Skills', 'About', 'Contact']

export const skillsData = [
  {
    icon: FaMicrochip,
    title: 'Backend',
    technologies: [
      'Node.js',
      'Express',
      'Python',
      '.NET (C#)',
      'REST APIs',
      'JWT Authentication',
      'Role-Based Access Control',
      'Prisma',
      'Entity Framework Core'
    ]
  },
  {
    icon: FaReact,
    title: 'Frontend',
    technologies: [
      'React',
      'Vite',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Styled Components',
      'Framer Motion',
      'React Router'
    ]
  },
  {
    icon: FaCode,
    title: 'Databases & DevOps',
    technologies: [
      'PostgreSQL',
      'MongoDB',
      'Mongoose',
      'SQL',
      'Git & GitHub',
      'Linux',
      'CI/CD',
      'Cloudinary',
      'Stripe'
    ]
  }
]

export const projectData = [
  // =====================
  // FEATURED PROJECTS
  // =====================
  {
    title: "Booking System Web Application",
    description:
      "Full-stack booking platform for fitness classes and personal training. Designed REST APIs with JWT authentication and role-based access control for Members, Trainers, and Admins. Implemented real-time availability checks, relational data modelling with PostgreSQL, and a responsive React frontend.",
    image: project9,
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      ".NET 10",
      "C#",
      "PostgreSQL",
      "Entity Framework Core",
      "JWT",
      "RBAC",
      "REST API"
    ],
    live_link: "https://bookingsystemfrontend.onrender.com",
    github: "https://github.com/Joel-Cornfield/BookingSystem",
    category: "featured",
  },
  {
    title: "GreenCart — Online Supermarket Ordering App",
    description:
      "Production-style full-stack e-commerce application with user, seller, and admin roles. Implemented authentication, product management, cart and checkout flow (Stripe + COD), cloud image storage, and server-side validation. Focused on UX, scalability, and clean API design.",
    image: project8,
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "Cloudinary",
      "JWT",
      "REST API"
    ],
    live_link: "https://greencart-one-sigma.vercel.app/",
    github: "https://github.com/Joel-Cornfield/greencart",
    category: "featured",
  },
  {
    title: "Experimental Platform — Multimodal LLM in Road Safety",
    description: "Collaborative research project applying red teaming techniques to evaluate multimodal large language models in road safety scenarios. My contributions included image and video preprocessing, overlay and filter pipelines, LLM API integration, and analysing model responses for decision-making accuracy.",
    image: project1,
    tech: [
      "Python",
      "Computer Vision",
      "Image Processing",
      "LLMs",
      "API Integration",
      "Data Analysis"
    ],
    demo: "Red_Teaming_CITS3200_Project.pdf",
    github: "https://github.com/23348918/CITS3200-Group37",
    university: true,
    category: "featured",
  },

  // =====================
  // UNIVERSITY PROJECTS
  // =====================
  {
    title: "Intelligent Agent for The Resistance Game",
    description:
      "Developed an AI agent for a social deduction game using Bayesian reasoning and trust modelling. Analysed voting behaviour and mission outcomes to infer hidden roles and optimise decisions in adversarial and cooperative environments.",
    image: project2,
    tech: [
      "Python",
      "Bayesian Reasoning",
      "Game Theory",
      "AI Agents"
    ],
    university: true,
    category: "university",
  },
  {
    title: "UWA GeoGuessr-Style Web Application",
    description:
      "Collaborative web application featuring real-time gameplay, authentication, leaderboards, and admin content management. Emphasised teamwork, testing, and full-stack integration.",
    image: project3,
    tech: [
      "Python",
      "Flask",
      "SQL",
      "JavaScript",
      "WebSockets",
      "Authentication",
      "Testing"
    ],
    github: "https://github.com/Joel-Cornfield/Group_gc_70",
    university: true,
    category: "university",
  },

  // =====================
  // ADDITIONAL PROJECTS
  // =====================
  {
    title: "Social Media Application",
    description:
      "Full-stack social platform featuring posts, comments, likes, following, and real-time chat. Built as part of The Odin Project with a decoupled frontend and backend architecture.",
    image: project4,
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "JWT",
      "Socket.io"
    ],
    github: "https://github.com/Joel-Cornfield/SocialMediaApp",
    odin: true,
    category: "additional",
  },
  {
    title: "Marvel Photo Tagging Game",
    description:
      "Where’s Waldo-style image tagging game with backend validation, scoring, and leaderboards.",
    image: project5,
    tech: [
      "React",
      "PostgreSQL",
      "JWT",
      "Prisma"
    ],
    github: "https://github.com/Joel-Cornfield/PhotoTaggingApp",
    demo: "project5.mp4",
    odin: true,
    category: "additional",
  },
  {
    title: "Weather App",
    description:
      "Responsive weather application consuming a third-party API with clean UI and modular JavaScript.",
    image: project6,
    tech: ["JavaScript", "HTML", "CSS", "APIs"],
    github: "https://github.com/Joel-Cornfield/Weather-App/tree/main",
    demo: "project6.mp4",
    odin: true,
    category: "additional",
  },
  {
    title: "Etch-a-Sketch",
    description:
      "Interactive drawing application demonstrating DOM manipulation and event handling.",
    image: project7,
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Joel-Cornfield/etch-a-sketch",
    odin: true,
    category: "additional",
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

