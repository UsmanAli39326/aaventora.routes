import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="h-screen bg-cover bg-center relative bg-backcolor fade-in"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary/20 backdrop-brightness-75"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 fade-in">

        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Explore Pakistan
        </h1>

        <p className="max-w-2xl text-base md:text-lg mb-8 text-gray-100">
          Find peace in the peaks and adventure in the valleys.
          Discover the majesty of the Karakoram range with our
          premium curated experiences.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          
          {/* Start Journey */}
          <button
            onClick={() => navigate("/hunza")}
            className="bg-white text-secondary px-6 py-3 rounded-md font-medium 
                       hover:bg-gray-200 hover:scale-105 
                       transition duration-300 shadow-md"
          >
            Start Your Journey
          </button>

          {/* View Destinations */}
          <button
            onClick={() => navigate("/destinations")}
            className="border border-white px-6 py-3 rounded-md font-medium 
                       hover:bg-white hover:text-primary hover:scale-105 
                       transition duration-300"
          >
            View Destinations
          </button>

        </div>

      </div>
    </section>
  );
};

export default Hero;
