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
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center text-white px-6 fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Pakistan Like Never Before
          </h1>

          <p className="max-w-2xl mx-auto text-lg mb-8">
            Premium curated journeys across mountains,
            culture, and adventure.
          </p>

          <button
            onClick={() => navigate("/destinations")}
            className="bg-primary text-white px-8 py-3 rounded-md hover:opacity-90 transition"
          >
            Explore Destinations
          </button>
        </div>
      </div>

      {/* ABOUT PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6 text-black">
          Who We Are
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Tourist Pakistan crafts unforgettable journeys
          through the Karakoram, Himalayas and beyond.
          We combine comfort, adventure and culture.
        </p>

        <button
          onClick={() => navigate("/experiences")}
          className="border border-gray-900 px-6 py-2 rounded-md hover:bg-gray-900 hover:text-white transition"
        >
          Learn More
        </button>
      </section>

      {/* DESTINATION PREVIEW */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-black">
            Popular Destinations
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["Hunza Valley", "Skardu", "Swat Valley"].map((place, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer"
                onClick={() => navigate("/destinations")}
              >
                <img
                  src="/images/hero.jpg"
                  alt={place}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6 bg-white">
                  <h3 className="font-semibold text-lg">{place}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-black">
            Why Travel With Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Expert Guides
              </h3>
              <p className="text-gray-600">
                Local professionals ensuring safe and authentic travel.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Premium Comfort
              </h3>
              <p className="text-gray-600">
                Handpicked stays and smooth logistics.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Custom Itineraries
              </h3>
              <p className="text-gray-600">
                Personalized experiences tailored for you.
              </p>
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
