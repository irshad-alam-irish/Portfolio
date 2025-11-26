import { Heart, Code2, Github, Linkedin, Mail, Users, Eye } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import {useVisitorTracking} from '../hooks/useVisitorTracking';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { totalVisits, activeUsers } = useVisitorTracking();

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { icon: Github, href: personalInfo.github, label: 'GitHub' },
        { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
        { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
    ];

    return (
        <footer className="bg-dark-900 border-t border-white/10 py-6 md:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
                    {/* Brand */}
                    <div className="text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start gap-2 mb-3 md:mb-4">
                            <img src="/logo.svg" alt="IA Logo" className="w-8 h-8 md:w-10 md:h-10" />
                            <span className="text-lg md:text-xl font-bold gradient-text">Irshad Alam</span>
                        </div>
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-3 md:mb-0">
                            Full Stack Developer crafting exceptional digital experiences with modern technologies.
                        </p>
                        {/* Social Links - Mobile */}
                        <div className="flex justify-center sm:justify-start gap-4 mt-3 sm:hidden">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-accent-purple transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="hidden sm:block text-center sm:text-left">
                        <h4 className="text-white font-semibold mb-4 text-sm md:text-base">Quick Links</h4>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {quickLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-400 hover:text-accent-purple transition-colors text-xs md:text-sm"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-white font-semibold mb-4 text-sm md:text-base">Get In Touch</h4>
                        <div className="space-y-2 text-xs md:text-sm">
                            <p className="text-gray-400 break-words">{personalInfo.email}</p>
                            <p className="text-gray-400">{personalInfo.location}</p>
                        </div>
                        {/* Social Links - Desktop */}
                        <div className="hidden sm:flex gap-4 mt-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-accent-purple transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Live Stats */}
                <div className="border-t border-white/10 py-4 mb-4">
                    <div className="flex flex-wrap justify-center sm:justify-between gap-4 text-xs md:text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <div className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </div>
                            <span className="flex items-center gap-1.5">
                                <Users size={14} className="text-accent-cyan" />
                                <span className="font-medium text-white">{activeUsers}</span> Online Now
                            </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Eye size={14} className="text-accent-purple" />
                            <span className="font-medium text-white">{totalVisits}</span> Total Visits
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-4 md:pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
                        <p className="text-gray-400 text-xs md:text-sm flex flex-wrap items-center justify-center gap-1 md:gap-2">
                            <span>© {currentYear} {personalInfo.name}.</span>
                            <span className="flex items-center gap-1 md:gap-2">
                                Made with <Heart size={14} className="text-accent-pink fill-accent-pink" /> and <Code2 size={14} className="text-accent-cyan" />
                            </span>
                        </p>
                        <div className="flex gap-4 md:gap-6">
                            <a href="#" className="text-gray-400 hover:text-accent-purple transition-colors text-xs md:text-sm">
                                Privacy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-accent-purple transition-colors text-xs md:text-sm">
                                Terms
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
