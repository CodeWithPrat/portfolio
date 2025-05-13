import React, { useState, useEffect } from 'react';
import { ChevronRight, Calendar, Briefcase, Code} from 'lucide-react';

// Company logos (in real implementation, you would import actual logo files)
const LogoPlaceholder = ({ company }) => {
  const colors = {
    "CMTI": "bg-blue-600",
    "KodNest": "bg-purple-600"
  };
  
  return (
    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl ${colors[company] || "bg-gray-700"}`}>
      {company?.charAt(0)}
    </div>
  );
};

// Experience data based on your resume
const experienceData = [
  {
    id: 1,
    logo: "CMTI",
    company: "Central Manufacturing Technology Institute",
    companyShort: "Central Manufacturing Technology Institute",
    role: "Project Associate - 1 (Java Full Stack Developer)",
    startDate: "March 2024",
    endDate: "Present",
    location: "Bengaluru",
    description: [
      "Architected and implemented high-performance software solutions that enhanced system efficiency by 27% through optimized code and database query refinement.",
      "Led the development of 3 complex client-facing applications using microservices architecture, meeting all business requirements while reducing deployment time by 30%.",
      "Engineered responsive user interfaces using React, Tailwind CSS, and animation libraries that increased user engagement metrics by 25% and reduced bounce rates.",
      "Established secure authentication systems using JWT and Spring Security that reduced unauthorized access attempts by 98%, protecting sensitive data for 1,500+ active users."
    ],
    skills: ["Java", "Spring Boot", "React.js", "Microservices", "JWT", "Tailwind CSS", "MongoDB"]
  },
  {
    id: 2,
    logo: "KodNest",
    company: "KodNest",
    companyShort: "KodNest",
    role: "Java Full-stack Development Intern",
    startDate: "July 2023",
    endDate: "March 2024",
    location: "Bengaluru",
    description: [
      "Intrigued high-performance web applications using Java Spring Boot, Hibernate ORM, and React.js, resulting in 40% faster page load times and 25% increased user engagement metrics.",
      "Optimized database performance by redesigning SQL queries and implementing MongoDB aggregation pipelines, reducing query response time by 50% and improving overall system efficiency.",
      "Developed and Combined 12+ RESTful APIs with 99.8% uptime, decreasing frontend-backend communication overhead by 35% while following industry best practices for API design and security.",
      "Cooperated within an Agile team of 8 engineers through full development lifecycle, reducing sprint planning time by 20% through boosted requirement documentation."
    ],
    skills: ["Java", "Spring Boot", "Hibernate", "React.js", "MongoDB", "RESTful APIs", "SQL"]
  }
];

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);
  const [animated, setAnimated] = useState([]);

  useEffect(() => {
    // Set first experience as selected on initial load
    if (experienceData.length > 0 && selectedExp === null) {
      setSelectedExp(experienceData[0].id);
    }
    
    // Initialize animation for first item
    setTimeout(() => {
      setAnimated([experienceData[0]?.id]);
    }, 100);
  }, []);

  const handleSelectExp = (id) => {
    setSelectedExp(id);
    
    // Add animation class if not already added
    if (!animated.includes(id)) {
      setAnimated([...animated, id]);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-gray-100 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Side Navigation */}
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0 bg-gray-900 bg-opacity-50 rounded-lg p-4 backdrop-blur-sm border border-gray-800">
            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Work Experience
            </h2>
            
            <ul className="space-y-3">
              {experienceData.map((exp) => (
                <li 
                  key={exp.id} 
                  onClick={() => handleSelectExp(exp.id)}
                  className={`cursor-pointer transition-all duration-300 p-3 rounded-md flex items-center gap-3 hover:bg-gray-800 ${
                    selectedExp === exp.id ? "bg-gray-800 border-l-4 border-blue-500" : ""
                  }`}
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <LogoPlaceholder company={exp.logo} />
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${selectedExp === exp.id ? "text-blue-400" : "text-gray-300"}`}>
                      {exp.companyShort}
                    </p>
                    <p className="text-sm text-gray-400">{exp.role.split(' ')[0]}</p>
                  </div>
                  <ChevronRight 
                    size={18} 
                    className={`transition-transform ${selectedExp === exp.id ? "rotate-90 text-blue-400" : "text-gray-500"}`} 
                  />
                </li>
              ))}
            </ul>
          </div>
          
          {/* Main Content */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            {experienceData.map((exp) => (
              <div 
                key={exp.id}
                className={`transition-all duration-500 ease-in-out ${
                  selectedExp === exp.id
                    ? "opacity-100 translate-y-0 block"
                    : "opacity-0 translate-y-8 hidden"
                } ${animated.includes(exp.id) ? "animate-fade-in" : ""}`}
              >
                <div className="bg-gray-900 rounded-xl p-6 md:p-8 border border-gray-800 shadow-xl relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500 bg-opacity-10 rounded-full blur-3xl"></div>
                  <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-purple-500 bg-opacity-10 rounded-full blur-3xl"></div>
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
                      <div className="w-16 h-16 relative group">
                        <LogoPlaceholder company={exp.logo} />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                          {exp.company}
                        </h3>
                        <p className="text-xl font-semibold text-blue-400 mb-2">{exp.role}</p>
                        
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} className="text-gray-500" />
                            <span>{exp.startDate} - {exp.endDate}</span>
                          </div>
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
                          <div className="flex items-center gap-1">
                            <Briefcase size={14} className="text-gray-500" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div className="mb-8 space-y-4">
                      <h4 className="font-semibold text-lg text-gray-300 flex items-center gap-2 mb-3">
                        <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
                        Responsibilities & Achievements
                      </h4>
                      
                      <ul className="space-y-3">
                        {exp.description.map((item, idx) => (
                          <li 
                            key={idx} 
                            className="flex items-start gap-3 group"
                          >
                            <div className="mt-1 w-5 h-5 rounded-full flex items-center justify-center bg-blue-900 bg-opacity-30 border border-blue-800 group-hover:bg-blue-700 transition-colors duration-300">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                            </div>
                            <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold text-lg text-gray-300 flex items-center gap-2 mb-4">
                        <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
                        Technologies & Skills
                      </h4>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1.5 text-sm rounded-full bg-gradient-to-r from-blue-900 to-purple-900 border border-blue-800 hover:from-blue-800 hover:to-purple-800 transition-all duration-300 flex items-center gap-1.5"
                          >
                            <Code size={12} />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Add global CSS for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Experience;