import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();


    // Reset mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);


    const menuVariants = {
        closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
        open: { opacity: 1, height: "auto", transition: { duration: 0.3 } }
    };

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Destinations", path: "/destinations" },
        { name: "Our Story", path: "/experiences" },
        { name: "Travel Guides", path: "/travel-guides" },
        { name: "About Us", path: "/about" },
    ];

    return (
        <nav 
            className="fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-white/80 backdrop-blur-md py-3 shadow-sm border-b border-gray-100"
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* Logo */}
                <Link to="/">
                    <Logo scrolled={true} />
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-8 text-[13px] font-medium items-center transition-colors duration-500 text-text-main tracking-widest uppercase">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link 
                                to={link.path} 
                                className="hover:text-primary transition-colors relative group"
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full`}></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-text-main"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className="md:hidden bg-white px-6 py-6 space-y-4 text-base font-medium shadow-xl overflow-hidden"
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        {navLinks.map((link) => (
                            <Link 
                                key={link.path}
                                to={link.path} 
                                onClick={() => setIsOpen(false)} 
                                className="block text-text-main hover:text-primary transition-colors tracking-widest uppercase text-sm"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
