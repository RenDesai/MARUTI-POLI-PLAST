import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Cpu, Hexagon, ShieldCheck } from 'lucide-react';
import factoryImg from '../assets/factory.jpeg';
import useSEO from '../hooks/useSEO';

export default function About() {
    useSEO({
        title: 'About Us | Decades of Polymer Excellence',
        description: 'Learn about Maruti Poliplast\'s history, mission, quality standards, and our commitment to sustainable and high-density plastic polymer production.'
    });

    return (
        <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-5xl font-bold mb-6">About Maruti Poliplast</h1>
                <div className="h-1 w-24 bg-gold-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="prose prose-invert"
                >
                    <h2 className="text-3xl font-semibold mb-4 text-white">Our Story</h2>
                    <p className="text-steel-400 leading-relaxed mb-6 gap-4">
                        Established in the industrial hub of Rajkot, Maruti Poliplast has grown into a leading force in plastic manufacturing. We started with a simple vision: to deliver uncompromising quality in plastic lumps and granules.
                    </p>
                    <p className="text-steel-400 leading-relaxed mb-6">
                        Today, our factory in Upleta operates with the most advanced, automated machinery to guarantee perfection in every batch of plastic we produce.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl border border-gold-500/30 shadow-[0_0_30px_rgba(234,179,8,0.15)] group h-[350px] overflow-hidden bg-navy-900"
                >
                    <img
                        src={factoryImg}
                        alt="Factory"
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[400ms] ease-out"
                    />
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-10"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
                    <p className="text-steel-400">To revolutionize industrial plastic supply by maintaining the highest environmental and quality standards, driving innovation at every step of manufacturing.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="glass-card p-10"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
                    <p className="text-steel-400">To be the universally preferred partner in plastic raw materials, expanding our high-tech industrial footprint continually.</p>
                </motion.div>
            </div>
            <div className="mt-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-white">Manufacturing Process</h2>
                    <p className="text-steel-400 max-w-2xl mx-auto">From raw materials to premium products, our process is optimized for perfection.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { title: "Raw Plastic Material", desc: "Sourcing high-quality polymers.", icon: <Droplet size={32} /> },
                        { title: "Processing Machines", desc: "Advanced extrusion technology.", icon: <Cpu size={32} /> },
                        { title: "Granule Production", desc: "Precision cutting & shaping.", icon: <Hexagon size={32} /> },
                        { title: "Quality Testing", desc: "Rigorous standards applied.", icon: <ShieldCheck size={32} /> },
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="group glass-card p-8 border border-white/5 hover:border-gold-500/40 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] transition-all duration-300 text-center hover:-translate-y-2 rounded-2xl bg-navy-900"
                        >
                            <div className="text-gold-500 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-[400ms]">
                                {step.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-steel-400 text-sm">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
