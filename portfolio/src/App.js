import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, Menu, X, ChevronRight, ArrowUp, ArrowDownToLine, ExternalLink, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

import react from "./Images/icons/atom.png"
import java from "./Images/icons/java.png"
import spring from "./Images/icons/leaf.png"
import css from "./Images/icons/css-3.png"
import database from "./Images/icons/database.png"
import docker from "./Images/icons/docker.png"
import html from "./Images/icons/html.png"
import js from "./Images/icons/js.png"
import postman from "./Images/icons/postman.png"
import aws from "./Images/icons/cloud.png"
import github from "./Images/icons/social.png"
import sql from "./Images/icons/sql-server.png"

import Hero from "./Images/HeroImages/Pratik.jpeg"


// Import your components here
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Education from './Components/Education';
import ScrollToTop from './Components/ScrollToTop';
import FloatingMobileNav from './Components/FloatingNav';

// import Contact from './components/Contact';
// import GithubProfile from './components/GithubProfile';

// Placeholder components for demonstration
// const About = () => (
//   <div className="min-h-screen flex flex-col items-center justify-center">
//     <h1 className="text-4xl font-bold mb-6 text-gradient">About Me</h1>
//     <p className="text-gray-300 max-w-3xl text-center">Full content about me section</p>
//   </div>
// );

// const Skills = () => (
//   <div className="min-h-screen flex flex-col items-center justify-center">
//     <h1 className="text-4xl font-bold mb-6 text-gradient">My Skills</h1>
//     <p className="text-gray-300 max-w-3xl text-center">Full content about skills section</p>
//   </div>
// );

// const Experience = () => (
//   <div className="min-h-screen flex flex-col items-center justify-center">
//     <h1 className="text-4xl font-bold mb-6 text-gradient">My Experience</h1>
//     <p className="text-gray-300 max-w-3xl text-center">Full content about experience section</p>
//   </div>
// );

// const Projects = () => (
//   <div className="min-h-screen flex flex-col items-center justify-center">
//     <h1 className="text-4xl font-bold mb-6 text-gradient">My Projects</h1>
//     <p className="text-gray-300 max-w-3xl text-center">Full content about projects section</p>
//   </div>
// );

// const Education = () => (
//   <div className="min-h-screen flex flex-col items-center justify-center">
//     <h1 className="text-4xl font-bold mb-6 text-gradient">My Education</h1>
//     <p className="text-gray-300 max-w-3xl text-center">Full content about education section</p>
//   </div>
// );

const Contact = () => (
  <div className="min-h-screen flex flex-col items-center justify-center">
    <h1 className="text-4xl font-bold mb-6 text-gradient">Contact Me</h1>
    <p className="text-gray-300 max-w-3xl text-center">Full content about contact section</p>
  </div>
);

const GithubProfile = () => (
  <div className="min-h-screen flex flex-col items-center justify-center">
    <h1 className="text-4xl font-bold mb-6 text-gradient">GitHub Profile</h1>
    <p className="text-gray-300 max-w-3xl text-center">Full content about GitHub profile section</p>
  </div>
);

// Section Card Component for Home page
const SectionCard = ({ title, description, icon, to, isExternal }) => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20 border border-gray-800 group">
      <div className="mb-4 text-purple-500 text-2xl">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      {isExternal ? (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium"
        >
          Learn more <ChevronRight className="ml-1 w-4 h-4" />
        </a>
      ) : (
        <Link
          to={to}
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium"
        >
          Learn more <ChevronRight className="ml-1 w-4 h-4" />
        </Link>
      )}
    </div>
  );
};
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const slideIn = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: 0.2 }
  }
};

const pulse = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity }
  }
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const resumeUrl = "https://drive.google.com/file/d/1enOac1exWN4To4QOKLLB3CKhxWvzAbky/view?usp=sharing";

  const handleViewResume = () => {
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDownloadResume = () => {
    // Convert Google Drive view URL to direct download URL
    const fileId = resumeUrl.split('/d/')[1].split('/view')[0];
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // Create a temporary anchor element to trigger the download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', 'My_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    setIsVisible(true);

    // Add scroll-triggered animations if needed
    const handleScroll = () => {
      // You can add scroll-based animations here
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="py-20 bg-gradient-to-b from-black to-gray-900 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Hero Section with About Component */}
          <section id="about" className="pt-2 pb-16 px-6 md:px-12 lg:px-24">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left Side - About Text */}
                <motion.div
                  className="w-full lg:w-1/2"
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={slideIn}
                >
                  <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-2"
                    variants={fadeIn}
                  >
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Pratik</span>
                  </motion.h2>

                  <motion.div
                    className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-600 mb-6"
                    initial={{ width: 0 }}
                    animate={{ width: 96 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  />

                  <motion.h3
                    className="text-xl md:text-2xl font-semibold mb-6 text-gray-300"
                    variants={fadeIn}
                  >
                   Java Full Stack Developer & UI/UX Designer
                  </motion.h3>

                  <motion.p
                    className="text-gray-400 mb-8 text-lg leading-relaxed"
                    variants={fadeIn}
                  >
                    I specialize in building high-performance, scalable web applications using Java and modern frontend technologies.
                    With 1.10 years of experience in full-stack development, I've architected and implemented solutions that enhance system efficiency
                    and user engagement. My expertise spans Spring Boot, React.js, and database optimization, delivering clean, efficient code
                    while meeting business requirements and tight deadlines.
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-4"
                    variants={fadeIn}
                  >
                    <motion.button
                      className="px-6 py-3 flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-600/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleViewResume}
                      aria-label="View Resume"
                    >
                      <ExternalLink size={18} /> View Resume
                    </motion.button>

                    <motion.button
                      className="px-6 py-3 flex items-center gap-2 bg-transparent border border-purple-500 rounded-lg font-medium hover:bg-purple-900/20 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleDownloadResume}
                      aria-label="Download Resume"
                    >
                      <ArrowDownToLine size={18} /> Download Resume
                    </motion.button>
                  </motion.div>
                </motion.div>

                {/* Right Side - Image */}
                <motion.div
                  className="w-full lg:w-1/2 flex justify-center"
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.8, delay: 0.4 }
                    }
                  }}
                >
                  <motion.div
                    className="relative"
                    variants={pulse}
                    initial="initial"
                    animate="animate"
                  >
                    {/* Main profile image with glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-xl" />
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500/20">
                      <img
                        src={Hero}
                        alt="Your Profile"
                        className="w-full h-full object-cover"
                      />

                      {/* Animated border effect */}
                      <motion.div
                        className="absolute inset-0 border-4 border-transparent rounded-full"
                        initial={{ borderColor: 'rgba(168, 85, 247, 0.4)' }}
                        animate={{
                          borderColor: ['rgba(168, 85, 247, 0.4)', 'rgba(219, 39, 119, 0.4)', 'rgba(168, 85, 247, 0.4)']
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </div>

                    {/* Floating tech badges */}
                    {/* Floating tech badges */}
                    <motion.div
                      className="absolute -top-4 -right-4 p-2 rounded-full"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <img src={js} alt="JavaScript" className="w-6 h-6 object-contain" />
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute -top-6 -right-6 p-2 rounded-full z-10"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <img src={java} alt="Java" className="w-6 h-6 object-contain" />
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute top-0 right-12 p-2 rounded-full z-10"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2.3, repeat: Infinity }}
                    >
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <img src={react} alt="React" className="w-6 h-6 object-contain" />
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute top-12 right-0 p-2 rounded-full z-10"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                    >
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <img src={spring} alt="Spring" className="w-6 h-6 object-contain" />
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute top-32 -right-8 p-2 rounded-full z-10"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <img src={js} alt="JavaScript" className="w-6 h-6 object-contain" />
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute top-32 -left-8 p-2 rounded-full z-10"
                      animate={{ x: [0, -5, 0] }}
                      transition={{ duration: 2.2, repeat: Infinity }}
                    >
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <img src={html} alt="HTML" className="w-6 h-6 object-contain" />
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute -bottom-6 -left-6 p-2 rounded-full z-10"
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 2.4, repeat: Infinity }}
                    >
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <img src={css} alt="CSS" className="w-6 h-6 object-contain" />
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute bottom-0 left-12 p-2 rounded-full z-10"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2.1, repeat: Infinity }}
                    >
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <img src={sql} alt="MySQL" className="w-6 h-6 object-contain" />
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute bottom-12 left-0 p-2 rounded-full z-10"
                      animate={{ y: [0, 6, 0] }}
                      transition={{ duration: 1.9, repeat: Infinity }}
                    >
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <img src={database} alt="MongoDB" className="w-6 h-6 object-contain" />
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute top-12 -left-10 p-2 rounded-full z-10"
                      animate={{ y: [0, -7, 0] }}
                      transition={{ duration: 2.6, repeat: Infinity }}
                    >
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <img src={github} alt="GitHub" className="w-6 h-6 object-contain" />
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute bottom-12 -right-10 p-2 rounded-full z-10"
                      animate={{ y: [0, 7, 0] }}
                      transition={{ duration: 2.7, repeat: Infinity }}
                    >
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <img src={postman} alt="Postman" className="w-6 h-6 object-contain" />
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute -bottom-10 right-20 p-2 rounded-full z-10"
                      animate={{ y: [0, 9, 0] }}
                      transition={{ duration: 2.2, repeat: Infinity }}
                    >
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <img src={docker} alt="Docker" className="w-6 h-6 object-contain" />
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute -top-10 left-20 p-2 rounded-full z-10"
                      animate={{ y: [0, -9, 0] }}
                      transition={{ duration: 2.3, repeat: Infinity }}
                    >
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <img src={aws} alt="AWS" className="w-6 h-6 object-contain" />
                      </div>
                    </motion.div>

                    {/* Animated particles/sparkles around the profile */}
                    <motion.div
                      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      {Array.from({ length: 20 }).map((_, index) => (
                        <motion.div
                          key={index}
                          className={`absolute w-2 h-2 rounded-full ${index % 2 === 0 ? 'bg-purple-400' : 'bg-pink-400'}`}
                          style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                          }}
                          initial={{ 
                            scale: 0, 
                            opacity: 0 
                          }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                          }}
                        />
                      ))}
                    </motion.div>


                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Sections Preview */}
          <div className="py-10">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Explore <span className="text-purple-500">My Portfolio</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">
              <SectionCard
                title="Skills"
                description="Discover the technologies and tools I'm proficient with."
                icon="🛠️"
                to="/skills"
              />
              <SectionCard
                title="Experience"
                description="My professional journey and the companies I've worked with."
                icon="📈"
                to="/experience"
              />
              <SectionCard
                title="Projects"
                description="Explore the various projects I've built throughout my career."
                icon="🚀"
                to="/projects"
              />
              <SectionCard
                title="Education"
                description="My academic background and continuous learning journey."
                icon="🎓"
                to="/education"
              />
              <SectionCard
                title="GitHub"
                description="Check out my code repositories and open-source contributions."
                icon="💻"
                to="https://github.com/CodeWithPrat"
                isExternal={true}
              />

            </div>
          </div>

          {/* Contact Preview */}
          <div className="py-16 mt-10 bg-gray-900 rounded-xl p-8 border border-gray-800 animate-fadeIn">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-white">Let's <span className="text-purple-500">Connect</span></h2>
              <p className="text-gray-300 mb-8">Interested in working together or have a question? Reach out to me!</p>
              <Link to="/contact" className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-purple-600 p-3 rounded-full shadow-lg transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>
    </>
  );
};

// Layout component with navbar and footer
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-gradient">
              Portfolio<span className="text-purple-500">.</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/skills">Skills</NavLink>
              <NavLink to="/experience">Experience</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/education">Education</NavLink>
              <button
                onClick={() => window.open("https://github.com/CodeWithPrat", "_blank")}
                className=""
              >
                GitHub
              </button>

              <NavLink to="/contact">Contact</NavLink>
            </nav>
          </div>
        </div>

        {/* Mobile Navigation */}
        <FloatingMobileNav />
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="text-2xl font-bold text-gradient">
                Portfolio<span className="text-purple-500">.</span>
              </Link>
              <p className="text-gray-400 mt-2">Crafting digital experiences with passion</p>
            </div>

            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// NavLink component with active styles
const NavLink = ({ to, children, className = '' }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`text-gray-300 hover:text-purple-400 transition-colors relative ${isActive ? 'text-purple-500 font-medium' : ''} ${className}`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 rounded-full transform -translate-y-1"></span>
      )}
    </Link>
  );
};

// App Component
const App = () => {
  useEffect(() => {
    // Add global styles
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-fadeIn {
        animation: fadeIn 1s ease-out;
      }
      
      .animate-fadeInUp {
        animation: fadeInUp 0.8s ease-out;
      }
      
      .text-gradient {
        background: linear-gradient(to right, #c084fc, #8b5cf6);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/github" element={<GithubProfile />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;