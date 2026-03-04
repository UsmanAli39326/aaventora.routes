import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-backcolor">

      {/* HERO SECTION */}
      <div
        className="h-screen bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative text-center text-white px-6 max-w-5xl fade-in">

          {/* Small Tagline */}
          <p className="uppercase tracking-[4px] text-sm md:text-base mb-4 text-gray-200">
            Discover Paradise
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Discover Pakistan <br /> Like Never Before
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg text-gray-200 mb-10">
            Premium curated journeys across mountains, culture,
            and adventure crafted for unforgettable experiences.
          </p>

          {/* Button */}
          <button
            onClick={() => navigate("/destinations")}
            className="bg-primary text-white px-10 py-4 rounded-full text-lg font-medium hover:scale-105 transition duration-300 shadow-lg"
          >
            Explore Destinations
          </button>

        </div>
      </div>

      {/* ABOUT PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src="/images/kashmir.jpeg"
            alt="Traveler"
            className="rounded-3xl shadow-xl w-full object-cover h-[450px]"
          />

          {/* Decorative Shape */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
        </div>


        {/* RIGHT CONTENT */}
        <div>

          <p className="text-sm uppercase tracking-widest text-primary mb-4">
            Our Story
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
            A Journey Into The Heart of Travel
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Tourist Pakistan was founded with a passion for exploring
            the breathtaking landscapes of the north. From the peaks of
            the Karakoram to the vibrant cultures of hidden valleys,
            we design journeys that connect travelers with authentic
            experiences.
          </p>


          {/* FEATURES */}
          <div className="space-y-6 mb-10">

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                🌍
              </div>

              <div>
                <h4 className="font-semibold text-lg text-black">
                  Safe Traveling
                </h4>
                <p className="text-gray-600 text-sm">
                  Carefully planned journeys ensuring comfort,
                  safety and memorable experiences.
                </p>
              </div>
            </div>


            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                💰
              </div>

              <div>
                <h4 className="font-semibold text-lg text-black">
                  Affordable Adventures
                </h4>
                <p className="text-gray-600 text-sm">
                  Premium travel experiences designed for explorers
                  without compromising quality.
                </p>
              </div>
            </div>

          </div>


          {/* BUTTON */}
          <button
            onClick={() => navigate("/experiences")}
            className="bg-primary text-white px-8 py-3 rounded-full hover:scale-105 transition duration-300 shadow-md"
          >
            Read More
          </button>

        </div>

      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          {/* Section Header */}
          <div className="text-center mb-16">

            <p className="uppercase tracking-widest text-sm text-primary mb-4">
              Popular Destinations
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Experience The New Adventure
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover breathtaking destinations across Pakistan —
              from the majestic mountains of Hunza to the serene
              lakes of Skardu and the lush valleys of Swat.
            </p>

          </div>


          {/* Destination Cards */}
          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                name: "Hunza Valley",
                location: "Gilgit Baltistan",
                price: "$120-$200",
                img: "/images/hunza-valley.jpeg",
              },
              {
                name: "Skardu",
                location: "Gilgit Baltistan",
                price: "$100-$180",
                img: "/images/skardu.jpeg",
              },
              {
                name: "Swat Valley",
                location: "KPK Pakistan",
                price: "$80-$150",
                img: "/images/swat.jpeg",
              },
            ].map((place, index) => (

              <div
                key={index}
                onClick={() => navigate("/destinations")}
                className="cursor-pointer group"
              >

                {/* Card */}
                <div className="bg-background rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition duration-300">

                  {/* Image */}
                  <img
                    src={place.img}
                    alt={place.name}
                    className="h-56 w-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* Content */}
                  <div className="p-6">

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-black mb-2">
                      {place.name}
                    </h3>

                    {/* Rating */}
                    <div className="text-yellow-400 mb-3">
                      ⭐⭐⭐⭐⭐
                    </div>

                    {/* Info Row */}
                    <div className="flex justify-between text-gray-600 text-sm">

                      <span>📍 {place.location}</span>

                      <span>💰 {place.price}</span>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          {/* Header (unchanged as you requested) */}
          <h2 className="text-3xl font-bold mb-16 text-center text-black">
            Why Travel With Us?
          </h2>


          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE CARDS */}

            <div className="grid md:grid-cols-2 gap-12">

              {/* Card 1 */}
              <div className="relative">

                <img
                  src="/images/experience2.jpeg"
                  alt="Explore Fuji Mountain"
                  className="rounded-2xl h-72 w-full object-cover"
                />

                <div className="bg-white rounded-2xl shadow-lg p-8 w-[85%] mx-auto -mt-20 relative z-10 text-center">

                  <h3 className="text-2xl font-semibold mb-4">
                    Explore Fuji Mountain
                  </h3>

                  <p className="text-gray-600 mb-6">
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod.
                  </p>

                  <p className="text-lg tracking-[4px] font-semibold text-primary">
                    $79 / Person
                  </p>

                </div>

              </div>


              {/* Card 2 */}
              <div className="relative">

                <img
                  src="/images/experience4.jpeg"
                  alt="Sant Angelo Beach"
                  className="rounded-2xl h-72 w-full object-cover"
                />

                <div className="bg-white rounded-2xl shadow-lg p-8 w-[85%] mx-auto -mt-20 relative z-10 text-center">

                  <h3 className="text-2xl font-semibold mb-4">
                    Sant Angelo Beach
                  </h3>

                  <p className="text-gray-600 mb-6">
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod.
                  </p>

                  <p className="text-lg tracking-[4px] font-semibold text-primary">
                    $99 / Person
                  </p>

                </div>

              </div>

            </div>


            {/* RIGHT SIDE TEXT */}
            <div>

              <p className="uppercase tracking-widest text-sm text-primary mb-4">
                Top Pick
              </p>

              <h3 className="text-4xl font-bold text-black mb-6 leading-tight">
                Exclusive Travel Experiences
              </h3>

              <p className="text-gray-600 mb-8 leading-relaxed">
                We design journeys that combine adventure, comfort,
                and cultural immersion. Every trip is crafted to
                deliver unforgettable memories while ensuring
                safety and seamless travel.
              </p>


              {/* Feature List */}
              <div className="space-y-6 mb-10">

                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Custom Itineraries
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Personalized journeys tailored to your travel goals.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Local Expertise
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Our guides bring authentic knowledge of every region.
                  </p>
                </div>

              </div>


              <button
                onClick={() => navigate("/destinations")}
                className="bg-primary text-white px-8 py-3 rounded-full hover:scale-105 transition duration-300 shadow-md"
              >
                Explore Packages
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready To Begin Your Journey?
        </h2>

        <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
          Let us craft a personalized travel experience for you. From the
          majestic peaks of the Karakoram to the serene valleys of Kashmir,
          we ensure every journey is safe, comfortable, and unforgettable.
          Start exploring Pakistan with confidence and discover memories
          that will last a lifetime.
        </p>
      </section>


    </div>
  );
};

export default Home;
