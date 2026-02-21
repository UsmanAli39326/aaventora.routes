import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Left Column */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Tourist Pakistan
            </h2>

            <p className="text-sm leading-relaxed">
              Discover the untamed beauty of the Karakoram
              and Hindu Kush ranges. We provide curated
              experiences for the discerning traveler.
            </p>
          </div>

          {/* Middle Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Destinations
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer transition">
                Hunza Valley
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Skardu
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Swat Valley
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Fairy Meadows
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Support
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="hover:text-primary cursor-pointer transition">
                Travel Insurance
              </li>
              <li className="hover:text-primary cursor-pointer transition">
                Visa Guide
              </li>
              <li className="hover:text-primary cursor-pointer transition">
                Contact Us
              </li>
              <li className="hover:text-primary cursor-pointer transition">
                Privacy Policy
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/30 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">

          <p>© 2026 Tourist Pakistan. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-primary cursor-pointer transition">
              Instagram
            </span>
            <span className="hover:text-primary cursor-pointer transition">
              Facebook
            </span>
            <span className="hover:text-primary cursor-pointer transition">
              Twitter
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
