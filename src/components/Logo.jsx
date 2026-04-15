import React from "react";

const Logo = ({ scrolled }) => {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="relative w-11 h-11 flex items-center justify-center">
        {/* Mountain + Crescent Moon in Circle */}
        <svg
          viewBox="0 0 100 100"
          className={`w-full h-full transition-all duration-700 transform group-hover:scale-110`}
        >
          {/* Outer Circle */}
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            className={`transition-all duration-500 ${
              scrolled ? "stroke-primary" : "stroke-white"
            }`}
            strokeWidth="2"
          />

          {/* Mountain Peaks */}
          <g className={`transition-all duration-500 ${
            scrolled ? "fill-accent" : "fill-white/90"
          }`}>
            {/* Main Peak */}
            <path d="M50 28 L72 68 L28 68 Z" />
            {/* Secondary Peak */}
            <path d="M36 68 L55 38 L74 68 Z" fillOpacity="0.5" />
            {/* Snow caps / ridge detail */}
            <path d="M50 28 L46 36 L50 33 L54 36 Z" fillOpacity="0.7" />
          </g>

          {/* Crescent Moon */}
          <g className={`transition-all duration-500 ${
            scrolled ? "fill-accent" : "fill-white"
          }`}>
            <circle cx="66" cy="34" r="5" />
            <circle cx="68" cy="33" r="4" className={`transition-all duration-500 ${
              scrolled ? "fill-primary" : "fill-primary"
            }`} style={{ fill: 'inherit' }} />
          </g>
          {/* Simpler crescent approach */}
          <path
            d="M63 29 A5 5 0 1 0 69 39 A4 4 0 1 1 63 29"
            className={`transition-all duration-500 ${
              scrolled ? "fill-accent" : "fill-white"
            }`}
          />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <span
          className={`text-[17px] font-serif font-bold tracking-[0.08em] transition-colors duration-500 uppercase ${
            scrolled ? "text-text-main" : "text-white"
          }`}
        >
          AAVENTORA <span className="text-accent italic">ROUTES</span>
        </span>
        <span
          className={`text-[7px] tracking-[0.35em] uppercase font-semibold mt-1.5 transition-colors duration-500 ${
            scrolled ? "text-text-muted" : "text-gray-300"
          }`}
        >
          High Peak Pure Peace
        </span>
      </div>
    </div>
  );
};

export default Logo;
