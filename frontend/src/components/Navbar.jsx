import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed w-full z-50 glass-card rounded-none border-t-0 border-l-0 border-r-0 px-6 py-4 flex justify-between items-center"
        >
            <Link to="/" className="text-2xl font-bold tracking-[0.2em] text-white flex items-center uppercase z-50">
                <img src={logo} alt="Maruti Poliplast Logo" className="h-10 md:h-12 w-auto mr-4 object-contain" />
                <span className="text-gold-500 mr-2">MARUTI</span> POLIPLAST
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide">
                <Link to="/" className="hover:text-gold-500 transition-colors">HOME</Link>
                <Link to="/about" className="hover:text-gold-500 transition-colors">ABOUT</Link>
                <Link to="/products" className="hover:text-gold-500 transition-colors">PRODUCTS</Link>
                <Link to="/gallery" className="hover:text-gold-500 transition-colors">GALLERY</Link>
                <Link to="/contact" className="hover:text-gold-500 transition-colors">CONTACT</Link>
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-16 left-0 w-full glass-card flex flex-col items-center py-6 gap-6 md:hidden"
                >
                    <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-gold-500">HOME</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-gold-500">ABOUT</Link>
                    <Link to="/products" onClick={() => setIsOpen(false)} className="hover:text-gold-500">PRODUCTS</Link>
                    <Link to="/gallery" onClick={() => setIsOpen(false)} className="hover:text-gold-500">GALLERY</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-gold-500">CONTACT</Link>
                </motion.div>
            )}
        </motion.nav>
    );
}
