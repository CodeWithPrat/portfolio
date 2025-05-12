import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Skills = () => {
    // For glow animation effect
    const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
    const [activeCard, setActiveCard] = useState(null);

    // Handle subtle glow effect movement
    useEffect(() => {
        const interval = setInterval(() => {
            setGlowPosition({
                x: Math.random() * 100,
                y: Math.random() * 100
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Skill categories and data
    const skillsData = {
        frontend: [
            { name: 'React JS', icon: '⚛️' },
            { name: 'Redux', icon: '🔄' },
            { name: 'Next JS', icon: 'N' },
            { name: 'HTML', icon: '🌐' },
            { name: 'CSS', icon: '🎨' },
            { name: 'TailwindCSS', icon: '💨' },
            { name: 'JavaScript', icon: 'JS' },
            { name: 'Bootstrap', icon: 'B' }
        ],
        backend: [
            { name: 'Java', icon: '☕' },
            { name: 'Spring Boot', icon: '🍃' },
            { name: 'Node JS', icon: 'N' },
            { name: 'Express JS', icon: 'Ex' },
            { name: 'MySQL', icon: '🐬' },
            { name: 'MongoDB', icon: '🍃' },
            { name: 'Hibernate', icon: 'H' },
            { name: 'Spring', icon: '🌱' }
        ],
        others: [
            { name: 'Git', icon: '📂' },
            { name: 'GitHub', icon: '🐙' },
            { name: 'Netlify', icon: '🚀' },
            { name: 'VS Code', icon: '📝' },
            { name: 'Postman', icon: '📮' },
            { name: 'Docker', icon: '🐳' },
            { name: 'AWS', icon: '☁️' }
        ],
        softSkills: [
            { name: 'Communication', icon: '💬' },
            { name: 'Teamwork', icon: '👥' },
            { name: 'Problem Solving', icon: '🧩' },
            { name: 'Time Management', icon: '⏰' },
            { name: 'Adaptability', icon: '🔁' },
            { name: 'Creativity', icon: '💡' },
            { name: 'Leadership', icon: '🚩' }
        ]
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.15,
                duration: 0.8
            }
        }
    };

    const titleVariants = {
        hidden: { y: -30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.8
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 15,
                duration: 0.6
            }
        },
        hover: {
            y: -10,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 10
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 8
            }
        },
        hover: {
            scale: 1.1,
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    // Category theme settings
    const categoryThemes = {
        frontend: {
            border: "border-purple-500",
            glow: "from-purple-500/20 to-fuchsia-500/20",
            textGradient: "from-purple-400 to-fuchsia-400",
            icon: "bg-purple-500/10 text-purple-400"
        },
        backend: {
            border: "border-green-500",
            glow: "from-green-500/20 to-emerald-500/20",
            textGradient: "from-green-400 to-emerald-400",
            icon: "bg-green-500/10 text-green-400"
        },
        others: {
            border: "border-blue-500",
            glow: "from-blue-500/20 to-cyan-500/20",
            textGradient: "from-blue-400 to-cyan-400",
            icon: "bg-blue-500/10 text-blue-400"
        },
        softSkills: {
            border: "border-pink-500",
            glow: "from-pink-500/20 to-rose-500/20",
            textGradient: "from-pink-400 to-rose-400",
            icon: "bg-pink-500/10 text-pink-400"
        }
    };

    return (
        <section id="skills" className="min-h-screen py-20 bg-black text-white overflow-hidden relative">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <motion.div
                    className="absolute w-96 h-96 rounded-full bg-purple-700/10 blur-3xl"
                    animate={{
                        x: [0, 30, -30, 0],
                        y: [0, -30, 30, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    style={{ top: '10%', left: '5%' }}
                />
                <motion.div
                    className="absolute w-96 h-96 rounded-full bg-blue-700/10 blur-3xl"
                    animate={{
                        x: [0, -40, 40, 0],
                        y: [0, 40, -40, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    style={{ bottom: '10%', right: '5%' }}
                />
                <motion.div
                    className="absolute w-64 h-64 rounded-full bg-green-700/10 blur-3xl"
                    animate={{
                        x: [0, 50, -20, 0],
                        y: [0, -20, 50, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    style={{ top: '50%', left: '50%' }}
                />
            </div>

            <motion.div
                className="container mx-auto px-4 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16 relative"
                    variants={titleVariants}
                >
                    <motion.h2
                        className="text-6xl font-bold mb-6 relative inline-block"
                        animate={{
                            textShadow: [
                                "0 0 8px rgba(255,255,255,0.1)",
                                "0 0 16px rgba(255,255,255,0.2)",
                                "0 0 8px rgba(255,255,255,0.1)"
                            ],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        Skills
                        <motion.div
                            className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        />
                    </motion.h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto relative">
                        Here are some of my skills on which I have been working on for the
                        past 2 years.
                    </p>
                </motion.div>

                {/* Top row - 2 columns layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
                    {/* Frontend Card */}
                    <motion.div
                        className={`p-8 rounded-xl border ${categoryThemes.frontend.border} border-opacity-50 bg-gray-900/30 backdrop-blur-sm relative overflow-hidden`}
                        variants={cardVariants}
                        whileHover="hover"
                        onHoverStart={() => setActiveCard('frontend')}
                        onHoverEnd={() => setActiveCard(null)}
                    >
                        {/* Background gradient effect */}
                        <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${categoryThemes.frontend.glow} opacity-0`}
                            animate={{ opacity: activeCard === 'frontend' ? 0.8 : 0 }}
                            transition={{ duration: 0.6 }}
                        />

                        <div className="relative z-10">
                            <motion.h3
                                className={`text-3xl font-bold text-center mb-8 bg-gradient-to-r ${categoryThemes.frontend.textGradient} bg-clip-text text-transparent`}
                                animate={{
                                    y: activeCard === 'frontend' ? [0, -5, 0] : 0
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                Frontend
                            </motion.h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {skillsData.frontend.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        className="bg-gray-900/80 px-4 py-2 rounded-full flex items-center space-x-2 border border-gray-800"
                                        variants={itemVariants}
                                        whileHover="hover"
                                        custom={index}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <motion.span
                                            className={`text-lg w-14 h-10 flex items-center justify-center rounded-full ${categoryThemes.frontend.icon}`}
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {skill.icon}
                                        </motion.span>
                                        <span className="text-lg text-gray-200">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Corner decorative elements */}
                        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                            <div className="absolute transform rotate-45 bg-purple-500/20 w-24 h-2 -top-4 -right-8" />
                        </div>
                    </motion.div>

                    {/* Backend Card */}
                    <motion.div
                        className={`p-8 rounded-xl border ${categoryThemes.backend.border} border-opacity-50 bg-gray-900/30 backdrop-blur-sm relative overflow-hidden`}
                        variants={cardVariants}
                        whileHover="hover"
                        onHoverStart={() => setActiveCard('backend')}
                        onHoverEnd={() => setActiveCard(null)}
                    >
                        {/* Background gradient effect */}
                        <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${categoryThemes.backend.glow} opacity-0`}
                            animate={{ opacity: activeCard === 'backend' ? 0.8 : 0 }}
                            transition={{ duration: 0.6 }}
                        />

                        <div className="relative z-10">
                            <motion.h3
                                className={`text-3xl font-bold text-center mb-8 bg-gradient-to-r ${categoryThemes.backend.textGradient} bg-clip-text text-transparent`}
                                animate={{
                                    y: activeCard === 'backend' ? [0, -5, 0] : 0
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                Backend
                            </motion.h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {skillsData.backend.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        className="bg-gray-900/80 px-4 py-2 rounded-full flex items-center space-x-2 border border-gray-800"
                                        variants={itemVariants}
                                        whileHover="hover"
                                        custom={index}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <motion.span
                                            className={`text-lg w-14 h-10 flex items-center justify-center rounded-full ${categoryThemes.backend.icon}`}
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {skill.icon}
                                        </motion.span>
                                        <span className="text-lg text-gray-200">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Corner decorative elements */}
                        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                            <div className="absolute transform rotate-45 bg-green-500/20 w-24 h-2 -top-4 -right-8" />
                        </div>
                    </motion.div>
                </div>

                {/* Bottom row - 2 columns layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Others Card */}
                    <motion.div
                        className={`p-8 rounded-xl border ${categoryThemes.others.border} border-opacity-50 bg-gray-900/30 backdrop-blur-sm relative overflow-hidden`}
                        variants={cardVariants}
                        whileHover="hover"
                        onHoverStart={() => setActiveCard('others')}
                        onHoverEnd={() => setActiveCard(null)}
                    >
                        {/* Background gradient effect */}
                        <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${categoryThemes.others.glow} opacity-0`}
                            animate={{ opacity: activeCard === 'others' ? 0.8 : 0 }}
                            transition={{ duration: 0.6 }}
                        />

                        <div className="relative z-10">
                            <motion.h3
                                className={`text-3xl font-bold text-center mb-8 bg-gradient-to-r ${categoryThemes.others.textGradient} bg-clip-text text-transparent`}
                                animate={{
                                    y: activeCard === 'others' ? [0, -5, 0] : 0
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                Others
                            </motion.h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {skillsData.others.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        className="bg-gray-900/80 px-4 py-2 rounded-full flex items-center space-x-2 border border-gray-800"
                                        variants={itemVariants}
                                        whileHover="hover"
                                        custom={index}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <motion.span
                                            className={`text-lg w-14 h-10 flex items-center justify-center rounded-full ${categoryThemes.others.icon}`}
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {skill.icon}
                                        </motion.span>
                                        <span className="text-lg text-gray-200">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Corner decorative elements */}
                        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                            <div className="absolute transform rotate-45 bg-blue-500/20 w-24 h-2 -top-4 -right-8" />
                        </div>
                    </motion.div>

                    {/* Soft Skills Card */}
                    <motion.div
                        className={`p-8 rounded-xl border ${categoryThemes.softSkills.border} border-opacity-50 bg-gray-900/30 backdrop-blur-sm relative overflow-hidden`}
                        variants={cardVariants}
                        whileHover="hover"
                        onHoverStart={() => setActiveCard('softSkills')}
                        onHoverEnd={() => setActiveCard(null)}
                    >
                        {/* Background gradient effect */}
                        <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${categoryThemes.softSkills.glow} opacity-0`}
                            animate={{ opacity: activeCard === 'softSkills' ? 0.8 : 0 }}
                            transition={{ duration: 0.6 }}
                        />

                        <div className="relative z-10">
                            <motion.h3
                                className={`text-3xl font-bold text-center mb-8 bg-gradient-to-r ${categoryThemes.softSkills.textGradient} bg-clip-text text-transparent`}
                                animate={{
                                    y: activeCard === 'softSkills' ? [0, -5, 0] : 0
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                Soft Skills
                            </motion.h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {skillsData.softSkills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        className="bg-gray-900/80 px-4 py-2 rounded-full flex items-center space-x-2 border border-gray-800"
                                        variants={itemVariants}
                                        whileHover="hover"
                                        custom={index}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <motion.span
                                            className={`text-lg w-14 h-10 flex items-center justify-center rounded-full ${categoryThemes.softSkills.icon}`}
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {skill.icon}
                                        </motion.span>
                                        <span className="text-lg text-gray-200">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Corner decorative elements */}
                        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                            <div className="absolute transform rotate-45 bg-pink-500/20 w-24 h-2 -top-4 -right-8" />
                        </div>
                    </motion.div>
                </div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-white/20"
                            initial={{
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
                                scale: Math.random() * 0.5 + 0.5,
                                opacity: Math.random() * 0.4 + 0.1
                            }}
                            animate={{
                                y: [null, `-${Math.random() * 100 + 50}px`],
                                opacity: [null, 0]
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "linear"
                            }}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;