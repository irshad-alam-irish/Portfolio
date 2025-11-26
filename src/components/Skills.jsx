import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import * as Icons from 'lucide-react';
import { skills } from '../data/portfolio';
import { fadeIn, slideUp, staggerContainer, staggerItem } from '../utils/animations';

const HexagonSkill = ({ skill, index, color }) => {
    const Icon = Icons[skill.icon] || Icons.Code2;

    return (
        <motion.div
            variants={staggerItem}
            whileHover={{ scale: 1.1, zIndex: 10 }}
            className="relative w-32 h-36 md:w-40 md:h-44 group cursor-pointer"
            style={{
                marginTop: index % 2 === 1 ? '2rem' : '0',
                marginLeft: '-1rem',
                marginRight: '-1rem',
            }}
        >
            <div className="absolute inset-0 bg-dark-800/80 backdrop-blur-md clip-path-hexagon border-0 group-hover:bg-dark-700/90 transition-colors duration-300">
                <div className={`absolute inset-[2px] clip-path-hexagon bg-dark-900 flex flex-col items-center justify-center p-4 border-2 ${color.replace('text-', 'border-')}/30 group-hover:${color.replace('text-', 'border-')} transition-colors duration-300`}>

                    <div className={`mb-2 transform group-hover:scale-110 transition-transform duration-300 ${color}`}>
                        <Icon size={32} />
                    </div>

                    <h4 className="text-white text-xs md:text-sm font-bold text-center leading-tight">
                        {skill.name}
                    </h4>

                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-t ${color.replace('text-', 'from-')} to-transparent transition-opacity duration-300`}></div>
                </div>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const categories = [
        { title: 'Frontend Core', data: skills.frontend, color: 'text-accent-purple' },
        { title: 'Backend & API', data: skills.backend, color: 'text-accent-cyan' },
        { title: 'Data & Cloud', data: skills.database, color: 'text-accent-pink' },
        { title: 'DevOps & Tools', data: skills.tools, color: 'text-accent-blue' },
    ];

    return (
        <section id="skills" className="py-20 relative overflow-hidden bg-dark-900">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none"></div>

            <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeIn}
                    className="text-center mb-20"
                >
                    <motion.h2 variants={slideUp} className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">
                        Skill <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan">Matrix</span>
                    </motion.h2>
                    <motion.p variants={slideUp} className="text-gray-400 max-w-2xl mx-auto text-lg font-mono">
            // EXPLORE MY technical EXPERTISE...<br />
            // ACROSS FRONTEND, BACKEND & DATABASES
                    </motion.p>
                </motion.div>

                <div className="space-y-24">
                    {categories.map((category, catIndex) => (
                        <div key={category.title} className="relative">
                            {/* Category Title with Cyber Line */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 mb-12"
                            >
                                <div className={`h-8 w-1 ${category.color.replace('text-', 'bg-')} shadow-[0_0_10px_currentColor]`}></div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-widest">{category.title}</h3>
                                <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
                            </motion.div>

                            {/* Hexagon Grid */}
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex flex-wrap justify-center gap-y-4 md:gap-y-0 pl-4"
                            >
                                {category.data.map((skill, index) => (
                                    <HexagonSkill
                                        key={skill.name}
                                        skill={skill}
                                        index={index}
                                        color={category.color}
                                    />
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Global Styles for Hexagon Clip Path */}
            <style>{`
        .clip-path-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
        </section>
    );
};

export default Skills;
