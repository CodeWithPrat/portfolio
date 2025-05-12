import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Eye, X, ChevronRight } from 'lucide-react';

import FMM from "../Images/ProjectImages/FMM.png"
import CE from "../Images/ProjectImages/CE.png"

import AIIG from "../Images/ProjectImages/PersonalProjects/AIIG.jpg"
import Blogging from "../Images/ProjectImages/PersonalProjects/Blogging.jpg"
import collegepredictor from "../Images/ProjectImages/PersonalProjects/collegepredic.png"
import Ecomm from "../Images/ProjectImages/PersonalProjects/Ecomm.png"
import jobappimg from "../Images/ProjectImages/PersonalProjects/Jobappimg.jpeg"
import ntask from "../Images/ProjectImages/PersonalProjects/nTask.png"
import sales from "../Images/ProjectImages/PersonalProjects/sales.png"
import SCM from "../Images/ProjectImages/PersonalProjects/SCM.png"
import smddcprofile from "../Images/ProjectImages/PersonalProjects/Smddcprofile.png"
import Stock from "../Images/ProjectImages/PersonalProjects/stocks.jpg"
import WFA from "../Images/ProjectImages/PersonalProjects/WFA.png"
import PFD from "../Images/ProjectImages/PersonalProjects/PFD.jpg"

import digitaltwin from "../Images/ProjectImages/digitalTwin.png"
import foundry from "../Images/ProjectImages/foundry.png"
import intellipod from "../Images/ProjectImages/intelipod.jpg"
import mtcm from "../Images/ProjectImages/mtcm.jpg"
import waxmachine from "../Images/ProjectImages/waxinjection.jpg"
import m2cedge from "../Images/ProjectImages/M2CedgeLink.png"
import smartspindle from "../Images/ProjectImages/smartSpindle.png"



// Project data - replace with your actual projects
const projectData = {
  freelancing: [
    {
      id: 1,
      name: "Fresh Mango Matrix",
      image: FMM,
      overview: "An e-commerce platform dedicated to selling premium mangoes, offering users a seamless shopping experience.",
      keyFeatures: [
        "Product catalog with high-quality images",
        "Shopping cart functionality",
        "Secure payment gateway integration",
        "Responsive design for mobile and desktop",
        "Contact and support features"
      ],
      technicalImplementation: "Developed using modern web technologies to ensure a responsive and user-friendly interface, with secure payment integration and optimized performance.",
      techStack: ["JavaScript", "ReactJs", "Tailwind CSS", "Spring Boot", "MySQL", "Spring Data JPA"],
      liveLink: "https://www.freshmangomatrix.com/",
      codeLink: "https://github.com/yourusername/freshmangomatrix"
    },
    {
      id: 2,
      name: "Cult Events India",
      image: CE,
      overview: "A wedding planning website that showcases services, portfolios, and contact information for clients seeking event management solutions.",
      keyFeatures: [
        "Service listings with detailed descriptions",
        "Image galleries of past events",
        "Client testimonials",
        "Contact forms for inquiries",
        "Responsive design for various devices"
      ],
      technicalImplementation: "Built with a focus on aesthetics and user experience, employing modern frontend frameworks and ensuring compatibility across devices.",
      techStack: ["HTML5", "CSS3", "JavaScript", "ReactJs", "Tailwind CSS", "Spring Boot", "MySQL", "Spring Data JPA"],
      liveLink: "https://culteventsindia.com/",
      codeLinK: "https://github.com/yourusername/culteventsindia"
    }
  ],
  personal: [
    {
      id: 3,
      name: "AI Image Generator",
      image: AIIG,
      overview: "A creative tool that generates unique images based on text prompts using machine learning models.",
      keyFeatures: ["Text-to-image generation", "Style transfer", "Image editing", "Gallery showcase", "Export options"],
      technicalImplementation: "Built with React for the frontend and integrated with Hugging Face's Stable Diffusion API. Implemented Canvas API for image manipulation features.",
      techStack: ["React", "Hugging Face API", "Canvas API", "TensorFlow.js", "Express"],
      liveLink: "https://example.com/ai-image",
      codeLink: "https://github.com/example/ai-image"
    },
    {
      id: 4,
      name: "Personal Finance Dashboard",
      image: PFD,
      overview: "A comprehensive financial management tool that helps users track expenses, set budgets, and visualize spending patterns.",
      keyFeatures: ["Expense tracking", "Budget planning", "Interactive charts", "Financial insights", "Bill reminders"],
      technicalImplementation: "Developed with React and Redux for state management. Used Chart.js for data visualization and Firebase for backend services.",
      techStack: ["React", "Redux", "Chart.js", "Firebase", "Material-UI"],
      liveLink: "https://example.com/finance",
      codeLink: "https://github.com/example/finance"
    },
    {
      id: 5,
      name: "Weather Forecast App",
      image: WFA,
      overview: "A weather application providing accurate forecasts, severe weather alerts, and location-based recommendations.",
      keyFeatures: ["7-day forecasts", "Real-time alerts", "Location tracking", "Weather maps", "Clothing recommendations"],
      technicalImplementation: "Built using React with geolocation services and OpenWeatherMap API integration. Implemented local storage for saving user preferences.",
      techStack: ["React", "OpenWeatherMap API", "Geolocation API", "LocalStorage", "CSS animations"],
      liveLink: "https://example.com/weather",
      codeLink: "https://github.com/example/weather"
    },
    {
      id: 6,
      name: "Job App - Java MVC Microservice Project",
      image: jobappimg,
      overview: "A job portal system built with Java MVC and microservices architecture for managing job postings, applications, and user profiles.",
      keyFeatures: ["Microservice architecture", "Job search and apply", "Admin dashboard", "User registration and login", "Role-based access"],
      technicalImplementation: "Developed using Spring Boot, Spring MVC, and RESTful services. Includes user authentication and service decoupling.",
      techStack: ["Java", "Spring Boot", "Spring MVC", "MySQL", "REST APIs"]
    },
    {
      id: 7,
      name: "Department Profile UI",
      image: smddcprofile,
      overview: "A modern and responsive department profile web page built with animations, styling effects, and clean layout.",
      keyFeatures: ["Responsive layout", "Animations and transitions", "UI components", "Interactive sections", "Clean code structure"],
      technicalImplementation: "Built using React.js, Tailwind CSS, and Bootstrap for fast, responsive, and stylish UI.",
      techStack: ["React", "Tailwind CSS", "Bootstrap", "CSS3", "JavaScript"]
    },
    {
      id: 8,
      name: "E-Commerce Java Fullstack Project with CI/CD",
      image: Ecomm,
      overview: "An enterprise-level e-commerce project with full CI/CD integration, shopping cart, product management, and admin panel.",
      keyFeatures: ["Product catalog", "User authentication", "Admin panel", "CI/CD deployment", "Order management"],
      technicalImplementation: "Spring Boot backend, React frontend, Docker for containerization, and Jenkins for CI/CD pipeline.",
      techStack: ["Java", "Spring Boot", "React", "MySQL", "Jenkins", "Docker"]
    },
    {
      id: 9,
      name: "Task Manager App - Java Fullstack Microservices",
      image: ntask,
      overview: "A task manager app for assigning, updating, and tracking tasks using microservices architecture.",
      keyFeatures: ["Task creation and update", "Microservice based modules", "User roles and permissions", "Deadline management", "Dashboard view"],
      technicalImplementation: "Backend developed with Spring Boot microservices, frontend with React, and secure API integration.",
      techStack: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"]
    },
    {
      id: 10,
      name: "Smart Contact Manager Web App",
      image: SCM,
      overview: "A secure contact manager with features like login, adding, editing, deleting, and categorizing contacts.",
      keyFeatures: ["User registration/login", "CRUD operations", "Search and filter", "Responsive UI", "Secure storage"],
      technicalImplementation: "Java Spring Boot backend with Thymeleaf templates, form validation, and secure login handling.",
      techStack: ["Java", "Spring Boot", "Thymeleaf", "Hibernate", "MySQL"]
    },
    {
      id: 11,
      name: "Blog Application - Java Fullstack",
      image: Blogging,
      overview: "A fully functional blog platform with user authentication, post creation, commenting, and category management.",
      keyFeatures: ["Post creation", "User roles", "JWT authentication", "Commenting", "Admin dashboard"],
      technicalImplementation: "Built with Spring Boot, JWT security, and React for a responsive frontend.",
      techStack: ["Java", "Spring Boot", "JWT", "React", "MySQL"]
    },
    {
      id: 12,
      name: "Stock Prediction using Neural Network",
      image: Stock,
      overview: "A deep learning model that predicts future stock prices based on historical data.",
      keyFeatures: ["Time series prediction", "Data preprocessing", "Model evaluation", "Visualization", "Neural network tuning"],
      technicalImplementation: "Implemented using LSTM neural networks with Python, Pandas, and Matplotlib for plotting.",
      techStack: ["Python", "TensorFlow", "Pandas", "Matplotlib", "NumPy"]
    },
    {
      id: 13,
      name: "Predicting College University using Logistic Regression",
      image: collegepredictor,
      overview: "A machine learning project that predicts college admission based on exam scores and other factors.",
      keyFeatures: ["Data analysis", "Model training and testing", "Prediction accuracy", "Confusion matrix", "Graphical output"],
      technicalImplementation: "Built with Python's sklearn library, including logistic regression and data visualization tools.",
      techStack: ["Python", "scikit-learn", "Seaborn", "Matplotlib", "Pandas"]
    },
    {
      id: 14,
      name: "Sales Prediction using Linear Regression",
      image: sales,
      overview: "A predictive analysis project to forecast product sales using linear regression techniques.",
      keyFeatures: ["Linear regression model", "Data preprocessing", "Visualization", "Accuracy metrics", "Trend analysis"],
      technicalImplementation: "Implemented using Python and Jupyter Notebook with detailed data exploration and regression modeling.",
      techStack: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Jupyter"]
    }
  ],
  company: [
    {
      id: 15,
      name: "MTCM edge module",
      image: mtcm,
      overview: "An edge computing module for real-time machine data acquisition and analytics at the shop floor level.",
      keyFeatures: ["Real-time data capture", "Edge analytics", "Low latency", "Remote monitoring", "Device integration"],
      technicalImplementation: "Built using industrial-grade embedded systems with Springboot services for device communication, and integrated with a cloud dashboard via MQTT.",
      techStack: ["Springboot", "MQTT", "Embedded Linux", "React", "MYsQL", "Docker"],
      liveLink: "https://mtcm-edge.online/dashboard",
      codeLink: "https://github.com/example/mtcm-edge"
    },
    {
      id: 16,
      name: "Integrated Smart Foundry 4.0",
      image: foundry,
      overview: "A smart manufacturing solution integrating casting process monitoring, quality control, and production analytics.",
      keyFeatures: ["Casting monitoring", "Sensor integration", "Dashboard reports", "Production tracking", "Alerts and notifications"],
      technicalImplementation: "Implemented using React for UI, Spring Boot for backend microservices, and IoT gateways for sensor data collection.",
      techStack: ["React", "Spring Boot", "MySQL", "IoT", "Docker"],
      liveLink: "https://ifoundry.online/home",
      codeLink: "https://github.com/example/smart-foundry"
    },
    {
      id: 17,
      name: "i Preci Spindle 18K",
      image: smartspindle,
      overview: "A high-speed spindle monitoring system with performance analytics and predictive maintenance capabilities.",
      keyFeatures: ["Speed monitoring", "Temperature control", "Predictive maintenance", "Data logging", "Remote alerts"],
      technicalImplementation: "Developed with embedded microcontroller systems integrated with React-based dashboards and cloud connectivity.",
      techStack: ["React", "Springboot", "Microcontrollers", "MySQL", "Tailwind CSS"],
      liveLink: "https://cmti-edge-tool.online/",
      codeLink: "https://github.com/example/ipreci-spindle"
    },
    {
      id: 18,
      name: "Intellipod",
      image: intellipod,
      overview: "A smart pod for real-time monitoring and analytics of CNC machines and process parameters.",
      keyFeatures: ["CNC monitoring", "Live analytics", "Data historian", "Secure communication", "Machine learning predictions"],
      technicalImplementation: "Designed using React and Flask with MQTT and WebSocket protocols to ensure real-time updates and device control.",
      techStack: ["React", "Springboot", "WebSocket", "MQTT", "Python", "Mysql", "AWS"],
      liveLink: "https://intellipod.online/",
      codeLink: "https://github.com/example/intellipod"
    },
    {
      id: 19,
      name: "M2C-EDGE-LINK",
      image: m2cedge,
      overview: "An edge-to-cloud connectivity platform for industrial machines, enabling seamless data transmission and visualization.",
      keyFeatures: ["Edge-cloud sync", "Low latency", "Plug and play", "Data visualization", "Secure protocols"],
      technicalImplementation: "Utilized edge computing hardware and developed communication services using Node.js and MQTT, with a React dashboard for users.",
      techStack: ["Springboot", "React", "MQTT", "MongoDB", "Docker", "MySQL"],
      liveLink: "https://edge-device.netlify.app/",
      codeLink: "https://github.com/example/m2c-edge-link"
    },
    {
      id: 20,
      name: "Digital Twin for CNC Feed Drive and Spindle",
      image: digitaltwin,
      overview: "A digital replica of CNC components enabling real-time simulation, diagnostics, and performance optimization.",
      keyFeatures: ["Live simulation", "Diagnostics", "Parameter tuning", "Performance tracking", "Twin analytics"],
      technicalImplementation: "Built using Python for simulation models, React for visualization, and integrated with physical devices through IoT protocols.",
      techStack: ["Python", "React", "Flask", "IoT", "WebSockets", "Mysql", "AWS"],
      liveLink: "https://example.com/digital-twin",
      codeLink: "https://github.com/example/digital-twin"
    },
    {
      id: 21,
      name: "6 Ton Wax Injection Machine",
      image: waxmachine,
      overview: "A monitoring system for wax injection machines used in precision casting, ensuring process reliability and performance.",
      keyFeatures: ["Temperature monitoring", "Pressure control", "Cycle analytics", "Real-time feedback", "Process logging"],
      technicalImplementation: "Integrated with PLCs for data acquisition, React dashboard for monitoring, and Spring Boot backend for business logic.",
      techStack: ["React", "Spring Boot", "PLCs", "MySQL", "Bootstrap"],
      liveLink: "https://waxinject-lt.online/",
      codeLink: "https://github.com/example/wax-machine"
    }
  ]
};

// Main component
export default function Projects() {
  const [activeTab, setActiveTab] = useState('freelancing');
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  // Handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Handle project click
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedProject]);

  // Project card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  // Modal animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  // Get current projects based on active tab
  const currentProjects = projectData[activeTab] || [];

  // Tab underline animation variants
  const tabUnderlineVariants = {
    inactive: { width: 0 },
    active: { width: "100%", transition: { duration: 0.3 } }
  };

  return (
    <div className="bg-black min-h-screen w-full text-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-2 text-center bg-gradient-to-r from-purple-400 via-blue-500 to-teal-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <motion.p
          className="text-xl text-gray-400 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Showcasing my work across different collaborations
        </motion.p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {['freelancing', 'personal', 'company'].map((tab) => (
            <motion.div
              key={tab}
              className="relative mx-4 mb-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                className={`text-lg md:text-xl font-medium pb-2 px-2 capitalize ${activeTab === tab ? 'text-blue-400' : 'text-gray-400'}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Projects
              </button>
              <motion.div
                className="h-1 bg-blue-500 absolute bottom-0 left-0 rounded-full"
                initial="inactive"
                animate={activeTab === tab ? "active" : "inactive"}
                variants={tabUnderlineVariants}
              />
            </motion.div>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover="hover"
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg cursor-pointer border border-gray-800 backdrop-blur-sm"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-70" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-400">{project.name}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.overview}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-800 text-xs rounded-full text-blue-300 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 bg-gray-800 text-xs rounded-full text-blue-300 border border-gray-700">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>

                <motion.div
                  className="flex items-center text-blue-400 text-sm font-semibold"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  View Details <ChevronRight className="ml-1 w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for project details */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm">
              <motion.div
                ref={modalRef}
                className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-gray-700"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="relative">
                  <div className="h-64 md:h-80 overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-90" />
                  </div>

                  <button
                    className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-all"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <div className="absolute bottom-0 left-0 p-6 md:p-8">
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.name}</h2>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-blue-400">Overview</h3>
                    <p className="text-gray-300">{selectedProject.overview}</p>
                  </section>

                  <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-blue-400">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.keyFeatures.map((feature, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="mr-2 mt-1 text-teal-400">•</div>
                          <span className="text-gray-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-blue-400">Technical Implementation</h3>
                    <p className="text-gray-300">{selectedProject.technicalImplementation}</p>
                  </section>

                  <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-blue-400">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, index) => (
                        <motion.span
                          key={index}
                          className="px-3 py-1 bg-gray-800 rounded-full text-blue-300 border border-gray-700"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </section>

                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg shadow-lg hover:from-blue-700 hover:to-teal-600 text-white font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye className="mr-2 w-5 h-5" /> View Live
                    </motion.a>

                    <motion.a
                      href={selectedProject.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 text-white font-medium border border-gray-700"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Code className="mr-2 w-5 h-5" /> View Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}