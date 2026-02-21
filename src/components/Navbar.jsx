import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="fixed w-full z-50 bg-gray-900 text-white fade-in">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <div className="text-white font-bold text-lg">
                    ⛰ TOURIST PAKISTAN
                </div>

                {/* Links */}
                <ul className="hidden md:flex gap-8 text-white text-sm">
                    <Link to="/hunza" className="hover:text-gray-200 transition">
                        Home
                    </Link>

                    <Link to="/destinations">Destinations</Link>
                    <Link to="/experiences" className="hover:text-gray-200 transition">
                        Our Story
                    </Link>

                    <Link to="/travel-guides">Travel Guides</Link>
                    <li>
                    <Link to="/about" className="hover:text-gray-200 transition">
                        About Us
                    </Link>
                    </li>

                </ul>

                {/* Button */}
                <button className="bg-white text-secondary px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition">
                    Plan a Trip
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
