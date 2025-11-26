import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Briefcase, Code2, Users,Github } from 'lucide-react';
import { personalInfo, stats } from '../data/portfolio';
import { fadeIn, slideUp, staggerContainer, staggerItem } from '../utils/animations';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const iconMap = {
        Calendar,
        Briefcase,
        Code2,
        Users,
        Github
    };

    return (
        <section id="about" className="py-20 bg-dark-800/50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"></div>

            <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <motion.h2
                        variants={slideUp}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        About <span className="gradient-text">Me</span>
                    </motion.h2>
                    <motion.div
                        variants={slideUp}
                        className="w-20 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto rounded-full"
                    ></motion.div>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    {stats.map((stat, index) => {
                        const Icon = iconMap[stat.icon];
                        return (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="glass-strong rounded-xl p-6 text-center border border-accent-purple/20 hover:border-accent-purple/50 transition-all"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-accent-purple to-accent-pink rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <Icon size={24} className="text-white" />
                                </div>
                                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* About Content */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeIn}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Left - Image/Visual */}
                    <motion.div
                        variants={slideUp}
                        className="relative"
                    >
                        <div className="glass-strong rounded-2xl p-8 border border-accent-cyan/20">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-accent-purple to-accent-cyan rounded-lg flex items-center justify-center text-2xl">
                                        🎯
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">Mission</h3>
                                        <p className="text-gray-400 text-sm">Building scalable solutions</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-accent-pink to-accent-purple rounded-lg flex items-center justify-center text-2xl">
                                        💡
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">Innovation</h3>
                                        <p className="text-gray-400 text-sm">Modern tech stack</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan to-accent-blue rounded-lg flex items-center justify-center text-2xl">
                                        ⚡
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">Performance</h3>
                                        <p className="text-gray-400 text-sm">Optimized & efficient</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Text Content */}
                    <motion.div
                        variants={slideUp}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Full Stack Developer with Enterprise Experience
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            {personalInfo.bio}
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Having worked in <span className="text-accent-cyan font-semibold">CareerSuite.ai</span> and{' '}
                            <span className="text-accent-purple font-semibold">Tata Consultancy Services</span>,
                            I bring experience from both agile startup environments and structured enterprise-level development.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            I specialize in building <span className="text-accent-pink font-semibold">clean, efficient, user-focused applications</span> that deliver meaningful results.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-4">
                            <span className="px-4 py-2 glass rounded-full text-sm border border-accent-purple/30">
                                🚀 Fast Learner
                            </span>
                            <span className="px-4 py-2 glass rounded-full text-sm border border-accent-cyan/30">
                                🎨 UI/UX Focused
                            </span>
                            <span className="px-4 py-2 glass rounded-full text-sm border border-accent-pink/30">
                                🔧 Problem Solver
                            </span>
                            <span className="px-4 py-2 glass rounded-full text-sm border border-accent-blue/30">
                                📚 Continuous Learner
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
