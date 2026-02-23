import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-gray-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <div className="font-bold text-lg">
                    ⛰ TOURIST PAKISTAN
                </div>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-8 text-sm items-center">
                    <Link to="/hunza" className="hover:text-gray-300 transition">
                        Home
                    </Link>
                    <Link to="/destinations" className="hover:text-gray-300 transition">
                        Destinations
                    </Link>
                    <Link to="/experiences" className="hover:text-gray-300 transition">
                        Our Story
                    </Link>
                    <Link to="/travel-guides" className="hover:text-gray-300 transition">
                        Travel Guides
                    </Link>
                    <Link to="/about" className="hover:text-gray-300 transition">
                        About Us
                    </Link>
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4 text-sm">
                    <Link to="/hunza" onClick={() => setIsOpen(false)} className="block">
                        Home
                    </Link>
                    <Link to="/destinations" onClick={() => setIsOpen(false)} className="block">
                        Destinations
                    </Link>
                    <Link to="/experiences" onClick={() => setIsOpen(false)} className="block">
                        Our Story
                    </Link>
                    <Link to="/travel-guides" onClick={() => setIsOpen(false)} className="block">
                        Travel Guides
                    </Link>
                    <Link to="/about" onClick={() => setIsOpen(false)} className="block">
                        About Us
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
