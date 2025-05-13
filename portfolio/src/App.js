import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, Menu, X, ChevronRight, ArrowUp, ArrowDownToLine, ExternalLink, ChevronDown, MapPin } from 'lucide-react';
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
import Contact from './Components/Contact';

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

// const Contact = () => (
//   <div className="min-h-screen flex flex-col items-center justify-center">
//     <h1 className="text-4xl font-bold mb-6 text-gradient">Contact Me</h1>
//     <p className="text-gray-300 max-w-3xl text-center">Full content about contact section</p>
//   </div>
// );

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
  const resumeUrl = "https://drive.google.com/file/d/1IrgQZ-90eidaBg6JXGc-PY99x4BhNCUN/view?usp=sharing";

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
              Pratik<span className="text-purple-500">.</span>
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
                Pratik<span className="text-purple-500">.</span>
              </Link>
              <p className="text-gray-400 mt-2">Crafting digital experiences with passion</p>

              {/* Added Contact Information */}
              <div className="mt-4">
                <div className="flex items-center text-gray-400 mb-2">
                  <Mail size={16} className="mr-2" />
                  <a href="mailto:pratiktillekar57@gmail.com" className="hover:text-purple-500 transition-colors">
                    pratiktillekar57@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin size={16} className="mr-2" />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
              </div>
            </div>

            {/* Social Media Icons from uploaded file */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1An8JVgTaB/" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://raw.githubusercontent.com/CodeWithPrat/portfolioImages/refs/heads/main/notAVailable.jpg" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://x.com/Pratik03508759?t=_hgaCG7BHvP3u6nTyfGxkQ&s=09" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.25 3h3.373l4.004 5.433L15.946 3H20L13.63 10.27 20.615 21h-3.42l-4.406-6.024L7.24 21H3l6.864-7.645L4.25 3Zm3.435 1.5H6.124l5.104 7.003L6.124 19.5h1.633l5.34-6.069L17.648 19.5h1.228l-5.8-8.23L19.522 4.5H17.77l-5.205 5.927L7.685 4.5Z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/pratik-sde/" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://github.com/CodeWithPrat" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 pt-8 border-t border-gray-800">
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-purple-500 transition-colors">Home</Link></li>
                <li><Link to="/experience" className="text-gray-400 hover:text-purple-500 transition-colors">Experience</Link></li>
                <li><Link to="/projects" className="text-gray-400 hover:text-purple-500 transition-colors">Projects</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-purple-500 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Consulting</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <div className="text-gray-400">
                <p>Feel free to reach out for collaborations or just a friendly hello!</p>
                <a href="mailto:pratiktillekar57@gmail.com" className="block mt-2 text-purple-500 hover:text-purple-400">
                  pratiktillekar57@gmail.com
                </a>
                <p className="mt-2">Bengaluru, Karnataka, India</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Pratik. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">Designed & Built with ❤️</p>
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