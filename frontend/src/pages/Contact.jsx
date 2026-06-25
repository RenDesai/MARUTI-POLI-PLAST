import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import axios from 'axios';
import useSEO from '../hooks/useSEO';

const API_URL = import.meta.env.VITE_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:8000' : '/_/backend');

export default function Contact() {
    useSEO({
        title: 'Contact Us | Request a Quote',
        description: 'Get in touch with Maruti Poliplast. Reach out to our sales team, view our factory address in Rajkot, Gujarat, or send us a message for business inquiries.'
    });

    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_URL}/api/contact/`, formData);
            setStatus('Success! Message sent.');
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (err) {
            console.error(err);
            setStatus('Error sending message. Please try again.');
        }
    };

    return (
        <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-20"
            >
                <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
                <p className="text-steel-400 max-w-2xl mx-auto">Get in touch with our team for business inquiries, quotes, or support.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="glass-card p-10 h-full">
                        <h2 className="text-3xl font-bold mb-8 text-white">Contact Information</h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-navy-800 rounded-full text-gold-500 border border-white/10">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-2 text-lg">Factory Address</h3>
                                    <p className="text-steel-400 leading-relaxed">
                                        Porbandar Road, Isra Pathya<br />
                                        ISRA – 360490, Taluka: Upleta<br />
                                        District: Rajkot, Gujarat, India
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-navy-800 rounded-full text-gold-500 border border-white/10">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-2 text-lg">Phone</h3>
                                    <p className="text-steel-400">+91 9898614977</p>
                                    <p className="text-steel-400">+91 9998475613</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-navy-800 rounded-full text-gold-500 border border-white/10">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-2 text-lg">Email</h3>
                                    <a href="mailto:jd20101983@gmail.com" className="block text-steel-400 hover:text-gold-500 transition-colors">jd20101983@gmail.com</a>
                                    <a href="mailto:rendesai1405@gmail.com" className="block text-steel-400 hover:text-gold-500 transition-colors mt-1">rendesai1405@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <form onSubmit={handleSubmit} className="glass-card p-10">
                        <h2 className="text-3xl font-bold mb-8 text-white">Send a Message</h2>

                        {status && (
                            <div className={`p-4 mb-6 rounded-lg ${status.includes('Success') ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
                                {status}
                            </div>
                        )}

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-steel-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-navy-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-steel-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-navy-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-steel-400 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full bg-navy-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-steel-400 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-navy-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full luxury-button flex items-center justify-center gap-2"
                            >
                                Send Message <Send size={18} />
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
