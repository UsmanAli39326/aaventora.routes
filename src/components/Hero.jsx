import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { slideUp, staggerContainer, fadeIn } from "../utils/animation-variants";
import { Search, MapPin, Calendar, DollarSign } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="h-screen bg-cover bg-center relative bg-background overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-text-main/60 via-text-main/40 to-text-main/60 backdrop-brightness-75"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-container pt-20"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-white mb-6 drop-shadow-2xl"
          variants={slideUp}
        >
          Explore <span className="italic">Pakistan</span>
        </motion.h1>

        <motion.p
          className="max-w-2xl text-body-lg mb-12 text-gray-200 font-light"
          variants={slideUp}
        >
          Find peace in the peaks and adventure in the valleys.
          Discover the majesty of the Karakoram range with our
          premium curated experiences.
        </motion.p>

        <motion.div
          className="flex gap-10 flex-wrap justify-center mb-20"
          variants={staggerContainer}
        >
          {/* Start Journey */}
          <button
            onClick={() => navigate("/hunza")}
            className="bg-accent text-white px-12 py-5 rounded-full font-bold 
                       hover:bg-accent-dark hover:scale-105 active:scale-95 
                       transition duration-300 shadow-2xl uppercase tracking-[0.2em] text-xs"
          >
            Start Your Journey
          </button>

          {/* View Destinations */}
          <button
            onClick={() => navigate("/destinations")}
            className="bg-white/10 backdrop-blur-lg border border-white/30 px-12 py-5 rounded-full font-bold 
                       hover:bg-white hover:text-text-main hover:scale-105 active:scale-95 
                       transition duration-300 uppercase tracking-[0.2em] text-xs"
          >
            View Destinations
          </button>
        </motion.div>

        {/* FLOATING SEARCH BAR */}
        <motion.div
          className="w-full max-w-5xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-4 shadow-2xl hidden md:flex items-center gap-4"
          variants={fadeIn}
        >
          <div className="flex-1 flex items-center gap-4 px-6 border-r border-white/10">
            <MapPin className="text-accent" size={20} />
            <div className="text-left py-2">
              <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-gray-300 mb-2">Location</p>
              <select className="bg-transparent border-none outline-none text-[15px] font-bold w-full cursor-pointer appearance-none tracking-wide text-white px-5">
                <option className="bg-text-main px-5">Where to?</option>
                <option className="bg-text-main px-5">Hunza Valley</option>
                <option className="bg-text-main px-5">Skardu</option>
                <option className="bg-text-main px-5">Swat</option>
              </select>
            </div>
          </div>

          <div className="flex-1 flex items-center gap-4 px-6 border-r border-white/10">
            <Calendar className="text-accent" size={20} />
            <div className="text-left py-2">
              <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-gray-300 mb-2">Date</p>
              <input type="date" placeholder="When?" className="bg-transparent border-none outline-none text-[15px] font-bold w-full placeholder:text-white tracking-wide px-5" />
            </div>
          </div>

          <div className="flex-1 flex items-center gap-4 px-6">
            <DollarSign className="text-accent" size={20} />
            <div className="text-left py-2">
              <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-gray-300 mb-2">Budget</p>
              <select className="bg-transparent border-none outline-none text-[15px] font-bold w-full cursor-pointer appearance-none tracking-wide text-white px-5">
                <option className="bg-text-main px-5">How much?</option>
                <option className="bg-text-main px-5">$50 - $100</option>
                <option className="bg-text-main px-5">$100 - $500</option>
                <option className="bg-text-main px-5">$500+</option>
              </select>
            </div>
          </div>

          <button
            onClick={() => navigate("/destinations")}
            className="bg-accent hover:bg-accent-dark p-6 rounded-[2rem] transition-all duration-300 shadow-xl group"
          >
            <Search size={24} className="group-hover:scale-125 transition-transform" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
