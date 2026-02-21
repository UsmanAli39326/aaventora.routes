import React from "react";

const TravelGuides = () => {
  const guides = [
    {
      title: "Best Time to Visit Northern Pakistan",
      desc: "Discover the ideal seasons to explore mountains, lakes and valleys.",
      img: "/images/swat.jpeg",
    },
    {
      title: "Essential Packing Checklist",
      desc: "Everything you need for a safe and comfortable mountain journey.",
      img: "/images/experience1.jpeg",
    },
    {
      title: "Cultural Etiquette & Local Tips",
      desc: "Understand traditions and connect respectfully with locals.",
      img: "/images/story1.jpeg",
    },
    {
      title: "Top Adventure Activities",
      desc: "From trekking to jeep safaris — explore thrilling experiences.",
      img: "/images/skardu.jpeg",
    },
    {
      title: "Safety & Travel Guidelines",
      desc: "Important safety recommendations for a smooth journey.",
      img: "/images/experience6.jpeg",
    },
    {
      title: "Budget vs Premium Travel",
      desc: "Compare travel styles and choose what suits you best.",
      img: "/images/story2.jpeg",
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
            Travel Guides
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            Expert insights, preparation tips and essential advice for your journey.
          </p>
        </div>
      </div>

      {/* GUIDES GRID */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          Explore Our Travel Resources
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {guides.map((guide, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={guide.img}
                alt={guide.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {guide.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {guide.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default TravelGuides;
