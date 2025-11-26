import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { experience } from '../data/portfolio';
import { fadeIn, slideUp, staggerContainer, staggerItem } from '../utils/animations';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section id="experience" className="py-20 bg-dark-800/50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"></div>

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
                        Work <span className="gradient-text">Experience</span>
                    </motion.h2>
                    <motion.div
                        variants={slideUp}
                        className="w-20 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto rounded-full mb-4"
                    ></motion.div>
                    <motion.p
                        variants={slideUp}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        My professional journey from startup innovation to enterprise excellence
                    </motion.p>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                    className="relative"
                >
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-purple via-accent-pink to-accent-cyan"></div>

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experience.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                variants={staggerItem}
                                className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-accent-purple to-accent-cyan rounded-full border-4 border-dark-800 z-10"></div>

                                {/* Content Card */}
                                <motion.div
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    className={`w-full md:w-[calc(50%-3rem)] ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                                        }`}
                                >
                                    <div className="glass-strong rounded-xl p-6 border border-white/10 hover:border-accent-purple/50 transition-all">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Briefcase size={20} className="text-accent-purple" />
                                                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                                    {exp.current && (
                                                        <span className="px-3 py-1 bg-accent-purple/20 border border-accent-purple/30 rounded-full text-accent-purple text-xs font-semibold">
                                                            Current
                                                        </span>
                                                    )}
                                                </div>
                                                <h4 className="text-lg text-accent-cyan font-semibold mb-2">{exp.company}</h4>
                                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                                    <Calendar size={16} />
                                                    <span>{exp.period}</span>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => toggleExpand(exp.id)}
                                                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                            >
                                                {expandedId === exp.id ? (
                                                    <ChevronUp size={20} className="text-gray-400" />
                                                ) : (
                                                    <ChevronDown size={20} className="text-gray-400" />
                                                )}
                                            </button>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-300 mb-4">{exp.description}</p>

                                        {/* Responsibilities - Expandable */}
                                        {expandedId === exp.id && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="space-y-2 pt-4 border-t border-white/10"
                                            >
                                                <h5 className="text-white font-semibold mb-3">Key Responsibilities:</h5>
                                                <ul className="space-y-2">
                                                    {exp.responsibilities.map((resp, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                                                            <span className="text-accent-purple mt-1">▸</span>
                                                            <span>{resp}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        )}

                                        {/* Type Badge */}
                                        <div className="mt-4">
                                            <span className="inline-block px-3 py-1 glass rounded-full text-xs border border-accent-cyan/30 text-accent-cyan">
                                                {exp.type}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Summary Stats */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeIn}
                    className="mt-16 grid md:grid-cols-2 gap-6"
                >
                    <div className="glass-strong rounded-xl p-6 border border-accent-purple/20">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-accent-purple to-accent-pink rounded-lg flex items-center justify-center text-2xl">
                                🏢
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white">TCS</h4>
                                <p className="text-gray-400">Enterprise Development</p>
                                <p className="text-sm text-accent-purple">Nov 2024 - Present</p>
                            </div>
                        </div>
                    </div>
                    <div className="glass-strong rounded-xl p-6 border border-accent-cyan/20">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan to-accent-blue rounded-lg flex items-center justify-center text-2xl">
                                🚀
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white">CareerSuite.ai</h4>
                                <p className="text-gray-400">Startup Innovation</p>
                                <p className="text-sm text-accent-cyan">Feb 2024 - Oct 2024</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
