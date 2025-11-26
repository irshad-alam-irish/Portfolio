import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { fadeIn, slideUp, staggerContainer, staggerItem } from '../utils/animations';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const ref = useRef(null);
    const formRef = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const contactMethods = [
        {
            icon: Mail,
            label: 'Email',
            value: personalInfo.email,
            href: `mailto:${personalInfo.email}`,
            gradient: 'from-accent-purple to-accent-pink'
        },
        {
            icon: Phone,
            label: 'Phone',
            value: personalInfo.phone,
            href: `tel:${personalInfo.phone}`,
            gradient: 'from-accent-cyan to-accent-blue'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: personalInfo.location,
            href: '#',
            gradient: 'from-accent-pink to-accent-purple'
        }
    ];

    const socialLinks = [
        {
            icon: Github,
            label: 'GitHub',
            href: personalInfo.github,
            color: 'hover:text-accent-purple'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            href: personalInfo.linkedin,
            color: 'hover:text-accent-cyan'
        },
        {
            icon: Mail,
            label: 'Email',
            href: `mailto:${personalInfo.email}`,
            color: 'hover:text-accent-pink'
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // Send with template parameters including recipient email
        const templateParams = {
            name: formRef.current.user_name.value,
            email: formRef.current.user_email.value,
            subject: formRef.current.subject.value,
            message: formRef.current.message.value,
        };


        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((result) => {
                setLoading(false);
                setStatus('success');
                formRef.current.reset();
                setTimeout(() => setStatus(null), 5000);
            }, (error) => {
                setLoading(false);
                setStatus('error');
                console.error(error.text);
                setTimeout(() => setStatus(null), 5000);
            });
    };

    return (
        <section id="contact" className="py-20 bg-dark-800/50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"></div>

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
                        Get In <span className="gradient-text">Touch</span>
                    </motion.h2>
                    <motion.div
                        variants={slideUp}
                        className="w-20 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto rounded-full mb-4"
                    ></motion.div>
                    <motion.p
                        variants={slideUp}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={staggerContainer}
                        className="space-y-6"
                    >
                        <motion.div variants={slideUp}>
                            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                            <p className="text-gray-300 mb-8">
                                Whether you have a question, want to collaborate, or just want to say hi,
                                I'll try my best to get back to you!
                            </p>
                        </motion.div>

                        {/* Contact Methods */}
                        <div className="space-y-4">
                            {contactMethods.map((method, index) => {
                                const Icon = method.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        variants={staggerItem}
                                        whileHover={{ scale: 1.02, x: 10 }}
                                        href={method.href}
                                        className="flex items-center gap-4 glass-strong rounded-xl p-4 border border-white/10 hover:border-accent-purple/50 transition-all group"
                                    >
                                        <div className={`w-12 h-12 bg-gradient-to-br ${method.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                            <Icon size={24} className="text-white" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-400">{method.label}</div>
                                            <div className="text-white font-semibold">{method.value}</div>
                                        </div>
                                    </motion.a>
                                );
                            })}
                        </div>

                        {/* Social Links */}
                        <motion.div variants={slideUp} className="pt-6">
                            <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            whileHover={{ scale: 1.1, y: -5 }}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-12 h-12 glass rounded-full flex items-center justify-center ${social.color} transition-all`}
                                        >
                                            <Icon size={20} />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={fadeIn}
                        className="glass-strong rounded-2xl p-8 border border-white/10 relative"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 bg-dark-700 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-accent-purple focus:outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    placeholder="your.email@example.com"
                                    className="w-full px-4 py-3 bg-dark-700 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-accent-purple focus:outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    placeholder="What's this about?"
                                    className="w-full px-4 py-3 bg-dark-700 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-accent-purple focus:outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    placeholder="Your message..."
                                    className="w-full px-4 py-3 bg-dark-700 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-accent-purple focus:outline-none transition-all resize-none"
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={loading}
                                className={`w-full py-3 rounded-lg text-white font-semibold shadow-lg transition-all flex items-center justify-center gap-2 ${status === 'success'
                                    ? 'bg-green-500'
                                    : status === 'error'
                                        ? 'bg-red-500'
                                        : 'bg-gradient-to-r from-accent-purple to-accent-pink hover:shadow-accent-purple/50'
                                    }`}
                            >
                                {loading ? (
                                    <Loader2 className="animate-spin" size={20} />
                                ) : status === 'success' ? (
                                    <>
                                        <CheckCircle size={20} /> Message Sent!
                                    </>
                                ) : status === 'error' ? (
                                    <>
                                        <AlertCircle size={20} /> Failed to Send
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} /> Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>

                        {/* Info Note about EmailJS */}
                        {/* <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-200">
                            <p><strong>Note for Developer:</strong> To make this form work, you need to sign up at <a href="https://www.emailjs.com/" target="_blank" className="underline hover:text-white">EmailJS</a>, create a service & template, and replace the placeholders in the code with your keys.</p>
                        </div> */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
