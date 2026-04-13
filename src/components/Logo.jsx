import React from "react";

const Logo = ({ scrolled }) => {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Abstract Mountain Shape */}
        <svg
          viewBox="0 0 100 100"
          className={`w-full h-full transition-all duration-700 transform group-hover:scale-110 ${
            scrolled ? "fill-primary" : "fill-white"
          }`}
        >
          {/* Main Peak */}
          <path d="M50 20 L85 80 L15 80 Z" />
          {/* Secondary Overlapping Peak */}
          <path d="M30 80 L55 35 L80 80 Z" fillOpacity="0.3" fill="currentColor" />
          {/* Accent Line/Horizon */}
          <rect x="35" y="85" width="40" height="2" className="fill-accent" />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <span
          className={`text-xl font-serif font-bold tracking-tight transition-colors duration-500 ${
            scrolled ? "text-text-main" : "text-white"
          }`}
        >
          TOURIST <span className="text-accent italic">PAKISTAN</span>
        </span>
        <span
          className={`text-[8px] tracking-[0.4em] uppercase font-bold mt-1 transition-colors duration-500 ${
            scrolled ? "text-text-muted" : "text-gray-300"
          }`}
        >
          Premium Journeys
        </span>
      </div>
    </div>
  );
};

export default Logo;
