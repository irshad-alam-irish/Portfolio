import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { projects } from '../data/portfolio';
import { fadeIn, slideUp, staggerContainer, staggerItem } from '../utils/animations';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedProject, setSelectedProject] = useState(null);
    const [filter, setFilter] = useState('All');

    const allTechs = ['All', 'React', 'Node.js', 'MongoDB', 'Express.js', 'Next.js', 'Spring Boot'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.tech.includes(filter));

    return (
        <section id="projects" className="py-20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"></div>

            <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeIn}
                    className="text-center mb-12"
                >
                    <motion.h2
                        variants={slideUp}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Featured <span className="gradient-text">Projects</span>
                    </motion.h2>
                    <motion.div
                        variants={slideUp}
                        className="w-20 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto rounded-full mb-4"
                    ></motion.div>
                    <motion.p
                        variants={slideUp}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        A showcase of my best work across full-stack development, from enterprise systems to AI-powered platforms
                    </motion.p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeIn}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {allTechs.map((tech) => (
                        <motion.button
                            key={tech}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setFilter(tech)}
                            className={`px-6 py-2 rounded-lg font-semibold transition-all ${filter === tech
                                ? 'bg-gradient-to-r from-accent-purple to-accent-pink text-white shadow-lg'
                                : 'glass border border-white/10 text-gray-300 hover:border-accent-purple/50'
                                }`}
                        >
                            {tech}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={staggerItem}
                            whileHover={{ y: -10 }}
                            className="glass-strong rounded-xl overflow-hidden border border-white/10 hover:border-accent-purple/50 transition-all cursor-pointer group"
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                {/* Background Image */}
                                <img
                                    src={project.image || `https://images.unsplash.com/photo-${['1461749280684-6dad5870f05d', '1485827404704-89e22f7a8db6', '1589829545856-d19f4e3f2fb4', '1516116216624-53e697fedbea', '1551288049-1640b6d82f49', '1558655146-364adaf1fcc9', '1504639725590-34d0984388bd'][index % 7]}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent"></div>
                                {/* Title */}
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.slice(0, 3).map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-accent-purple/20 border border-accent-purple/30 rounded-full text-accent-purple text-xs font-semibold"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="px-3 py-1 bg-accent-cyan/20 border border-accent-cyan/30 rounded-full text-accent-cyan text-xs font-semibold">
                                            +{project.tech.length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* View Details Button */}
                                <button className="w-full py-2 glass border border-accent-purple/30 rounded-lg text-white font-semibold hover:bg-accent-purple/20 transition-all group-hover:border-accent-purple">
                                    View Details →
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Project Modal */}
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="glass-strong rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-accent-purple/30"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="sticky top-0 glass-strong border-b border-white/10 p-6 flex items-start justify-between">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                                    <p className="text-gray-400">{selectedProject.description}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                >
                                    <X size={24} className="text-gray-400" />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6">
                                {/* Tech Stack */}
                                <div className="mb-6">
                                    <h4 className="text-xl font-semibold text-white mb-3">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-4 py-2 bg-gradient-to-r from-accent-purple/20 to-accent-pink/20 border border-accent-purple/30 rounded-lg text-white font-semibold"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mb-6">
                                    <h4 className="text-xl font-semibold text-white mb-3">Key Features</h4>
                                    <ul className="space-y-2">
                                        {selectedProject.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-300">
                                                <span className="text-accent-purple mt-1">✓</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;