import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Footer() {
    return (
        <footer className="bg-navy-900 border-t border-white/10 text-white/70 py-12 px-6 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div>
                    <h2 className="text-3xl font-black tracking-widest text-white mb-4"><span className="text-gold-500 mr-2">MARUTI</span> POLIPLAST</h2>
                    <p className="text-sm leading-relaxed max-w-sm">
                        High Quality Plastic Manufacturing.
                        We specialize in providing premium plastic lumps and granules with state-of-the-art facilities.
                    </p>
                </div>
                <div className="flex flex-col gap-2 text-sm">
                    <h3 className="text-white font-semibold text-lg mb-4">QUICK LINKS</h3>
                    <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
                    <Link to="/products" className="hover:text-white transition-colors">Our Products</Link>
                    <Link to="/gallery" className="hover:text-white transition-colors">Factory Gallery</Link>
                    <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
                </div>
                <div className="flex flex-col text-sm">
                    <h3 className="text-white font-semibold text-lg mb-4">LOCATION</h3>
                    <div className="mb-4">
                        <p className="text-steel-400">Porbandar Road, Isra Pathya</p>
                        <p className="text-steel-400">ISRA – 360490, Taluka: Upleta</p>
                        <p className="text-steel-400">District: Rajkot, Gujarat, India</p>
                    </div>
                </div>
                <div className="flex flex-col text-sm">
                    <h3 className="text-white font-semibold text-lg mb-4">CONTACT INFO</h3>
                    <div className="mb-4 text-gold-500">
                        <p>+91 9898614977</p>
                        <p>+91 9998475613</p>
                    </div>

                    <div className="text-white">
                        <a href="mailto:jd20101983@gmail.com" className="hover:text-gold-500 transition-colors block">jd20101983@gmail.com</a>
                        <a href="mailto:rendesai1405@gmail.com" className="hover:text-gold-500 transition-colors block mt-1">rendesai1405@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm font-medium tracking-wide text-steel-500">
                &copy; 2026 Maruti Poliplast (RenDesai)
            </div>
        </footer >
    );
}
