import React from "react";

const About = () => {
  return (
    <div className="bg-backcolor fade-in">

      {/* HERO SECTION */}
      <div
        className="h-[65vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About Tourist Pakistan
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            Discover our story, our mission, and our passion for travel.
          </p>
        </div>
      </div>

      {/* GRID SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-black mb-10 text-center">
          Our Journey & Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
            <img
              src="/images/experience1.jpeg"
              alt="Experience 1"
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-black">
                Experience One
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Description for experience one.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
            <img
              src="/images/experience2.jpeg"
              alt="Experience 2"
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-black">
                Experience Two
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Description for experience two.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
            <img
              src="/images/experience3.jpeg"
              alt="Experience 3"
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-black">
                Experience Three
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Description for experience three.
              </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
            <img
              src="/images/experience4.jpeg"
              alt="Experience 4"
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-black">
                Experience Four
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Description for experience four.
              </p>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
            <img
              src="/images/experience5.jpeg"
              alt="Experience 5"
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-black">
                Experience Five
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Description for experience five.
              </p>
            </div>
          </div>

          {/* CARD 6 */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
            <img
              src="/images/experience6.jpeg"
              alt="Experience 6"
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-black">
                Experience Six
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Description for experience six.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default About;
