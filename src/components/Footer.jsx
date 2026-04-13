import React from "react";
import Logo from "./Logo";
import { Instagram, Facebook, Twitter, Mail, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-text-main text-white pt-24 pb-12 relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-16 mb-20">

          {/* Left Column - Branding */}
          <div className="space-y-8">
            <Logo scrolled={false} />

            <p className="text-gray-400 text-body-reg font-light max-w-xs">
              Discover the untamed beauty of the Karakoram
              and Hindu Kush ranges. We provide curated, 
              safe and premium experiences for the discerning traveler.
            </p>

            <div className="flex gap-4 pt-4">
               {[
                 { icon: <Instagram size={18} />, link: "#" },
                 { icon: <Facebook size={18} />, link: "#" },
                 { icon: <Twitter size={18} />, link: "#" },
                 { icon: <Mail size={18} />, link: "#" },
               ].map((social, i) => (
                 <a key={i} href={social.link} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-all duration-300">
                    {social.icon}
                 </a>
               ))}
            </div>
          </div>

          {/* Middle Column - Destinations */}
          <div>
            <h3 className="text-tiny-label text-accent mb-10">
              Explore
            </h3>

            <ul className="space-y-6 text-[12px] font-medium text-gray-400 tracking-[0.2em] uppercase">
              <li className="hover:text-primary cursor-pointer transition-colors duration-300">
                Hunza Valley
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors duration-300">
                Skardu & Baltistan
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors duration-300">
                Swat Valley
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors duration-300">
                Fairy Meadows
              </li>
            </ul>
          </div>

          {/* Right Column - Support */}
          <div>
            <h3 className="text-tiny-label text-accent mb-10">
              Support
            </h3>

            <ul className="space-y-6 text-[12px] font-medium text-gray-400 tracking-[0.2em] uppercase">
              <li className="hover:text-primary cursor-pointer transition-colors duration-300">
                Travel Insurance
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors duration-300">
                Visa Guide
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors duration-300">
                Contact Us
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors duration-300">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-8">
            <h3 className="text-tiny-label text-accent">
              Newsletter
            </h3>
            
            <p className="text-gray-400 text-body-reg font-light">
               Subscribe to receive travel tips and exclusive luxury offers.
            </p>

            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
               <input 
                 type="email" 
                 placeholder="Your email address" 
                 className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-16 text-sm outline-none focus:border-accent transition-all duration-300"
               />
               <button className="absolute right-2 top-2 bottom-2 bg-accent hover:bg-accent-dark px-4 rounded-xl transition-colors group-hover:scale-105 transition-all">
                  <Send size={18} />
               </button>
            </form>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] uppercase font-bold text-gray-500">

          <p>© 2026 Tourist Pakistan. Powered by <a href="http://www.devtechnoz.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors duration-300">devtechnoz</a></p>

          <div className="flex gap-10 mt-6 md:mt-0">
            <span className="hover:text-white cursor-pointer transition">Terms</span>
            <span className="hover:text-white cursor-pointer transition">Cookies</span>
            <span className="hover:text-white cursor-pointer transition">Sitemap</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
