import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed w-full z-50 glass-card rounded-none border-t-0 border-l-0 border-r-0 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center"
        >
            <Link to="/" className="text-base md:text-2xl font-bold tracking-[0.1em] md:tracking-[0.2em] text-white flex items-center uppercase z-50" onClick={() => setIsOpen(false)}>
                <img src={logo} alt="Maruti Poliplast Logo" className="h-8 md:h-12 w-auto mr-2 md:mr-4 object-contain" />
                <span className="text-gold-500 mr-1 md:mr-2">MARUTI</span> POLIPLAST
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide">
                <Link to="/" className="hover:text-gold-500 transition-colors text-white">HOME</Link>
                <Link to="/about" className="hover:text-gold-500 transition-colors text-white">ABOUT</Link>
                <Link to="/products" className="hover:text-gold-500 transition-colors text-white">PRODUCTS</Link>
                <Link to="/gallery" className="hover:text-gold-500 transition-colors text-white">GALLERY</Link>
                <Link to="/contact" className="hover:text-gold-500 transition-colors text-white">CONTACT</Link>
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden text-white p-2 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 w-full bg-navy-900/98 backdrop-blur-xl border-b border-white/10 flex flex-col items-center py-8 gap-6 md:hidden text-white font-medium text-lg tracking-widest shadow-2xl"
                    >
                        <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-gold-500 transition-colors w-full text-center py-2">HOME</Link>
                        <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-gold-500 transition-colors w-full text-center py-2">ABOUT</Link>
                        <Link to="/products" onClick={() => setIsOpen(false)} className="hover:text-gold-500 transition-colors w-full text-center py-2">PRODUCTS</Link>
                        <Link to="/gallery" onClick={() => setIsOpen(false)} className="hover:text-gold-500 transition-colors w-full text-center py-2">GALLERY</Link>
                        <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-gold-500 transition-colors w-full text-center py-2">CONTACT</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
