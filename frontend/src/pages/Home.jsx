import React from 'react';
import { motion } from 'framer-motion';
import ThreeBackground from '../components/ThreeBackground';
import { ChevronDown, ArrowRight, Settings, Maximize, Target, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
    { label: 'Years Experience', value: '25+' },
    { label: 'Tons Produced Annually', value: '10k+' },
    { label: 'Happy Clients', value: '500+' },
    { label: 'Quality Certifications', value: 'ISO 9001' },
];

const processes = [
    { title: "Raw Material Sourcing", desc: "Selecting only the highest grade polymers.", icon: <Settings size={32} /> },
    { title: "Melting & Extrusion", desc: "State-of-the-art machinery process material.", icon: <Activity size={32} /> },
    { title: "Granule Production", desc: "Precision cutting into uniform shapes.", icon: <Target size={32} /> },
    { title: "Quality Assurance", desc: "Rigorous testing for durability.", icon: <Maximize size={32} /> },
];

export default function Home() {
    return (
        <div className="relative w-full overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
                <ThreeBackground />

                <div className="z-10 text-center px-4 max-w-5xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-widest mb-6 text-center w-full"
                    >
                        <span className="text-gold-500 drop-shadow-lg">MARUTI</span>{' '}
                        <span className="text-white drop-shadow-lg">POLIPLAST</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-xl md:text-2xl text-steel-400 mb-10 font-light tracking-wide"
                    >
                        High Quality Plastic Manufacturing
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="flex gap-6 justify-center"
                    >
                        <Link to="/products" className="luxury-button inline-flex items-center gap-2 group">
                            Explore Products <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50"
                >
                    <ChevronDown size={32} />
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-navy-800 relative z-10 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-6xl font-black text-gold-500 mb-2">{stat.value}</div>
                            <div className="text-sm tracking-widest text-steel-400 uppercase">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Manufacturing Process */}
            <section className="py-32 bg-navy-900 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Precision Manufacturing</h2>
                        <p className="text-steel-400 max-w-2xl mx-auto">Our state-of-the-art facility transforms raw materials into premium industrial-grade plastics.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {processes.map((process, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2, duration: 0.5 }}
                                className="glass-card p-8 text-center group hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-navy-800 border border-white/10 flex items-center justify-center text-gold-500 group-hover:scale-110 transition-transform">
                                    {process.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">{process.title}</h3>
                                <p className="text-steel-400 text-sm">{process.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* High Quality Image Break */}
            <section className="h-[60vh] relative z-10 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}>
                <div className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built for the Future of Industry</h2>
                        <Link to="/contact" className="luxury-button inline-block mt-4">Partner With Us</Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
