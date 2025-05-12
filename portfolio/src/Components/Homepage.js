import { useState, useEffect } from 'react';
import { ArrowDownToLine, ExternalLink, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants
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

export default function Homepage() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Add scroll-triggered animations if needed
    const handleScroll = () => {
      // You can add scroll-based animations here
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Portfolio
          </motion.h1>
          
          <motion.div 
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a href="#about" className="hover:text-purple-400 transition-colors duration-300">About</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors duration-300">Projects</a>
            <a href="#skills" className="hover:text-purple-400 transition-colors duration-300">Skills</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors duration-300">Contact</a>
          </motion.div>
          
          <button className="md:hidden text-white">
            <ChevronDown size={24} />
          </button>
        </div>
      </nav>
      
      {/* Hero Section with About Component */}
      <section id="about" className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
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
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Your Name</span>
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
                Full Stack Developer & UI/UX Designer
              </motion.h3>
              
              <motion.p 
                className="text-gray-400 mb-8 text-lg leading-relaxed"
                variants={fadeIn}
              >
                I specialize in creating beautiful, high-performance web applications with modern technologies. 
                With over 5 years of experience in full-stack development and UI/UX design, I've helped 
                numerous clients transform their ideas into visually stunning, functional products.
                My passion lies in crafting seamless user experiences backed by clean, efficient code.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeIn}
              >
                <motion.button
                  className="px-6 py-3 flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-600/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={18} /> View Resume
                </motion.button>
                
                <motion.button
                  className="px-6 py-3 flex items-center gap-2 bg-transparent border border-purple-500 rounded-lg font-medium hover:bg-purple-900/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
                    src="/api/placeholder/400/400" 
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
                <motion.div 
                  className="absolute -top-4 -right-4 bg-gray-900 p-2 rounded-full shadow-lg"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="font-bold">JS</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-2 -left-4 bg-gray-900 p-2 rounded-full shadow-lg"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <div className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center">
                    <span className="font-bold">UI</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Scroll indicator */}
      <motion.div 
        className="flex justify-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div 
          className="w-8 h-12 border-2 border-purple-500 rounded-full flex justify-center pt-2"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div 
            className="w-2 h-2 bg-purple-500 rounded-full"
            animate={{ 
              y: [0, 16, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
      
      {/* Additional sections would go here */}
      
      {/* Footer with subtle animation */}
      <motion.footer 
        className="bg-gray-900 py-8 px-6 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Your Name - All Rights Reserved</p>
          <div className="flex justify-center space-x-6 mt-4">
            {/* Social media icons would go here */}
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"></div>
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"></div>
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"></div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}