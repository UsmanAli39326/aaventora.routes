import React from "react";
import { useNavigate } from "react-router-dom";

const Destinations = () => {
  const navigate = useNavigate();

  const destinations = [
    {
      name: "Hunza Valley",
      desc: "Snow-capped peaks, turquoise lakes and rich culture.",
      img: "/images/hunza-valley.jpeg",
      link: "/checkout-hunza",
    },
    {
      name: "Skardu",
      desc: "Gateway to K2 and breathtaking alpine scenery.",
      img: "/images/skardu.jpeg",
      link: "/checkout-skardu",
    },
    {
      name: "Swat Valley",
      desc: "The Switzerland of Pakistan with lush valleys.",
      img: "/images/swat.jpeg",
      link: "/checkout-swat",
    },
    {
      name: "Fairy Meadows",
      desc: "Magical basecamp view of Nanga Parbat.",
      img: "/images/medows.jpeg",
      link: "/checkout-meadow",
    },
    {
      name: "Murree",
      desc: "Historic forts, food streets and Mughal heritage.",
      img: "/images/murree.jpeg",
      link: "/checkout-murree",
    },
    {
      name: "Kashmir",
      desc: "Stunning coastal beauty and scenic highways.",
      img: "/images/kashmir.jpeg",
      link: "/checkout-kashmir",
    },
  ];

  return (
    <div className="bg-backcolor fade-in">

      {/* HERO SECTION */}
      <div
        className="h-[60vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Explore Destinations
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            Discover Pakistan’s most iconic landscapes and cultural treasures.
          </p>
        </div>
      </div>

      {/* DESTINATION GRID */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          Top Places to Visit
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {destinations.map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer"
              onClick={() => navigate(place.link)}
            >
              <img
                src={place.img}
                alt={place.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {place.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {place.desc}
                </p>

                <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition">
                  View Details
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default Destinations;
