import { useState, useEffect } from "react";
import { ChevronRight, BookOpen, GraduationCap, School } from "lucide-react";

export default function Education() {
  const [visibleItems, setVisibleItems] = useState([]);
  
  const educationData = [
    {
        id: 1,
        institution: "Acharya Institute of Technology, Bengaluru",
        degree: "Bachelor of Technology - B.E., Computer Science and Engineering",
        duration: "Aug 2019 - June 2023",
        grade: "7.58 CGPA",
        description: "I have successfully attained a Bachelor's degree in Computer Science and Engineering from Acharya Institute of Technology, Bengaluru, showcasing four years of dedicated academic pursuit. My academic journey has been marked by a commendable CGPA of 7.58. Throughout this enriching experience, I delved into various domains of computer science, including algorithms, data structures, and software development. I actively participated in technical seminars, hackathons, and project-based learning which honed my problem-solving and collaboration skills. This period also shaped my passion for full-stack development and instilled a strong foundation for my career as a software developer.",
        logo: "https://i.ibb.co/k8qxfGP/acharya-logo.png",
        color: "from-blue-400 to-blue-600"
      },
      {
        id: 2,
        institution: "Sarvagna PU College of Science, Kalaburagi, Karnataka - 585105",
        degree: "PU, Science - PCMB",
        duration: "April 2017 - Feb 2019",
        grade: "84%",
        description: "During this academic journey, I immersed myself in a comprehensive curriculum that included subjects like Physics, Chemistry, Mathematics, and Biology. The enriching learning environment and challenging coursework at Sarvagna PU College have significantly contributed to my academic foundation and overall development. I learned the importance of discipline, time management, and conceptual clarity. This phase laid the groundwork for my logical reasoning abilities and prepared me for rigorous engineering studies ahead.",
        logo: "https://i.ibb.co/k8qxfGP/sarvagna-logo.png",
        color: "from-yellow-400 to-amber-600"
      },
      {
        id: 3,
        institution: "Vishwabharati Primary And High School, Humnabad, Dist. Bidar, Karnataka - 585330",
        degree: "SSLC, Kannada",
        duration: "Apr 2017",
        grade: "91.04%",
        description: "I successfully completed my SSLC education at the esteemed Vishwabharati Primary and High School in Humnabad (Bidar). My time there not only equipped me with a strong academic foundation but also instilled in me essential life skills and a passion for learning. The supportive environment and dedicated educators played a pivotal role in shaping my approach to education. I actively participated in extracurricular activities such as quizzes, science exhibitions, and sports, which helped me develop confidence, communication, and leadership qualities from an early age.",
        logo: "https://i.ibb.co/k8qxfGP/vishwabharati-logo.png",
        color: "from-red-400 to-red-600"
      }
      
  ];

  useEffect(() => {
    // Animation to gradually reveal education items
    const timer = setTimeout(() => {
      const revealItems = [];
      educationData.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, index]);
        }, index * 500);
        revealItems.push(index);
      });
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const getIcon = (id) => {
    switch (id) {
      case 1:
        return <GraduationCap className="w-10 h-10 text-blue-400" />;
      case 2:
        return <BookOpen className="w-10 h-10 text-yellow-400" />;
      case 3:
        return <School className="w-10 h-10 text-red-400" />;
      default:
        return <BookOpen className="w-10 h-10 text-purple-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-pulse">
            Educational Journey
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            My academic background and qualifications that have shaped my knowledge and skills
          </p>
          <div className="flex justify-center mt-6">
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
          </div>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:-translate-x-1/2 before:bg-gradient-to-b before:from-purple-500 before:via-blue-500 before:to-green-500 before:h-full sm:before:ml-[9.4rem]">
          {educationData.map((edu, index) => (
            <div 
              key={edu.id}
              className={`relative flex flex-col sm:flex-row items-start transition-all duration-700 ease-in-out ${
                visibleItems.includes(index) 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black border-4 border-purple-500 shadow z-10 mx-auto sm:mx-0">
                  <ChevronRight className="w-4 h-4 text-purple-500" />
                </div>
                <div className="hidden sm:flex w-24 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
              </div>
              
              <div className="flex-1 ml-0 sm:ml-2 mt-4 sm:mt-0">
                <div className="bg-gray-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800 hover:border-purple-500/50 group">
                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="w-16 h-16 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      {getIcon(edu.id)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors duration-300">{edu.institution}</h3>
                        <span className="px-3 py-1 mt-2 md:mt-0 text-sm bg-gray-800 rounded-full text-purple-400 inline-flex items-center">
                          {edu.duration}
                        </span>
                      </div>
                      
                      <div className="text-sm mb-2 text-gray-400">{edu.degree}</div>
                      
                      <div className="mb-4">
                        <div className="flex items-center mb-1">
                          <span className="text-sm font-medium text-gray-400">Grade:</span>
                          <span className={`ml-2 text-sm font-bold bg-gradient-to-r ${edu.color} text-transparent bg-clip-text`}>{edu.grade}</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-1.5">
                          <div 
                            className={`h-1.5 rounded-full bg-gradient-to-r ${edu.color} group-hover:animate-pulse`}
                            style={{ width: edu.grade.includes('%') 
                              ? edu.grade 
                              : `${parseFloat(edu.grade) * 10}%` 
                            }}
                          ></div>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                      
                      <div className="mt-4 flex justify-end">
                        <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Learn more <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-24 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500 bg-opacity-20 text-purple-400 font-medium text-sm hover:bg-opacity-30 transition-all duration-300 cursor-pointer group">
          <span className="group-hover:translate-x-1 transition-transform">Explore Skills</span>
          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
}