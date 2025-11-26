import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Code, Sparkles, Rocket } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { fadeIn, slideUp } from '../utils/animations';

const Hero = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-dark-900">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent-purple/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent-cyan/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-accent-pink/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '4s' }}></div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Content - Text */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="text-center lg:text-left order-2 lg:order-1"
                >
                    <motion.div variants={slideUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
                        <Sparkles size={16} className="text-accent-cyan" />
                        <span className="text-sm font-medium text-gray-300">Available for freelance & hire</span>
                    </motion.div>

                    <motion.h1 variants={slideUp} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Hi, I'm <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan animate-gradient-x">
                            {personalInfo.name}
                        </span>
                    </motion.h1>

                    <motion.h2 variants={slideUp} className="text-2xl md:text-3xl font-light text-gray-300 mb-6">
                        {personalInfo.title}
                    </motion.h2>

                    <motion.p variants={slideUp} className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        {personalInfo.bio.substring(0, 150)}... Transforming ideas into exceptional digital experiences.
                    </motion.p>

                    <motion.div variants={slideUp} className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-pink rounded-xl text-white font-bold shadow-lg shadow-accent-purple/25 hover:shadow-accent-purple/40 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                            <Rocket size={20} /> View Work
                        </a>
                        <a href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 hover:border-accent-cyan/50 transition-all duration-300 flex items-center gap-2 backdrop-blur-md">
                            <Mail size={20} /> Contact Me
                        </a>
                    </motion.div>

                    <motion.div variants={slideUp} className="mt-10 flex gap-6 justify-center lg:justify-start">
                        {[
                            { icon: Github, href: personalInfo.github, color: "hover:text-white" },
                            { icon: Linkedin, href: personalInfo.linkedin, color: "hover:text-blue-400" },
                            { icon: Mail, href: `mailto:${personalInfo.email}`, color: "hover:text-red-400" }
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-gray-400 ${social.color} transition-colors transform hover:scale-110`}
                            >
                                <social.icon size={28} />
                            </a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Content - 3D Tilt Card */}
                <div className="relative order-1 lg:order-2 flex justify-center perspective-1000">
                    <motion.div
                        style={{ x, y, rotateX, rotateY, z: 100 }}
                        drag
                        dragElastic={0.16}
                        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                        whileHover={{ cursor: "grab" }}
                        whileTap={{ cursor: "grabbing" }}
                        className="relative w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl shadow-accent-purple/20 p-4 flex items-center justify-center group"
                    >
                        {/* Inner Image Container */}
                        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10">
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/40 to-transparent opacity-60 mix-blend-overlay z-10"></div>
                            <img
                                src="/images/profile.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 bg-dark-800/90 backdrop-blur-xl p-3 rounded-2xl border border-accent-cyan/30 shadow-lg shadow-accent-cyan/20 flex items-center gap-2"
                        >
                            <Code size={20} className="text-accent-cyan" />
                            <span className="text-xs font-bold text-white">Developer</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-6 -left-6 bg-dark-800/90 backdrop-blur-xl p-3 rounded-2xl border border-accent-purple/30 shadow-lg shadow-accent-purple/20 flex items-center gap-2"
                        >
                            <Sparkles size={20} className="text-accent-purple" />
                            <span className="text-xs font-bold text-white">Full Stack</span>
                        </motion.div>
                    </motion.div>

                    {/* Background Glow behind card */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-cyan blur-[80px] opacity-30 -z-10 transform scale-90"></div>
                </div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
                <ArrowDown className="text-gray-400 hover:text-white transition-colors" size={24} />
            </motion.div>
        </section>
    );
};

export default Hero;
