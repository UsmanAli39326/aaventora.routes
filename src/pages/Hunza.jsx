import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { slideUp, staggerContainer, fadeIn } from "../utils/animation-variants";

const Hunza = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background overflow-x-hidden">

      {/* HERO SECTION */}
      <div
        className="h-[75vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/hunza-valley.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-text-main/75 via-text-main/40 to-text-main/75 backdrop-blur-[2px]"></div>

        <motion.div 
          className="relative text-center text-white px-container max-w-5xl pt-20"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="w-12 h-1 bg-accent mx-auto mb-8"></motion.div>
          
          <motion.h1 
            className="text-white mb-8"
            variants={slideUp}
          >
            Hunza <span className="italic text-accent">Valley</span>
          </motion.h1>

          <motion.p 
            className="max-w-2xl mx-auto text-body-lg text-gray-200 mb-12"
            variants={slideUp}
          >
            The Land of Eternal Youth. Discover ancient forts, turquoise lakes, 
            and the legendary hospitality of the Karakoram.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            className="flex gap-6 flex-wrap justify-center"
            variants={slideUp}
          >
            <motion.button
              onClick={() => navigate("/destinations")}
              className="btn-premium bg-accent text-white hover:bg-accent-dark"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Destinations
            </motion.button>
            <motion.button
              onClick={() => navigate("/about")}
              className="btn-premium bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-text-main"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Story
            </motion.button>
          </motion.div>

        </motion.div>
      </div>

      {/* ABOUT PREVIEW - ASYMMETRICAL LAYOUT */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE - OVERLAPPING STYLE */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative z-10">
            <img
              src="/images/kashmir.jpeg"
              alt="Traveler"
              className="rounded-3xl shadow-2xl w-full object-cover h-[500px]"
            />
          </div>
          
          {/* Floating Element */}
          <motion.div 
            className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl hidden lg:block z-20 max-w-[200px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="text-accent text-3xl font-serif mb-1">10k+</div>
            <div className="text-text-muted text-xs tracking-widest uppercase">Happy Travelers</div>
          </motion.div>

          {/* Decorative Shape */}
          <div className="absolute top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        </motion.div>


        {/* RIGHT CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative"
        >
          <motion.div 
            className="w-16 h-1 bg-accent mb-8"
            variants={fadeIn}
          ></motion.div>

          <motion.p 
            className="text-sm uppercase tracking-[0.3em] text-accent font-medium mb-4"
            variants={slideUp}
          >
            Our Story
          </motion.p>

          <motion.h2 
            className="text-5xl md:text-6xl font-serif font-bold text-text-main leading-tight mb-8"
            variants={slideUp}
          >
            A Journey Into The Heart of Travel
          </motion.h2>

          <motion.p 
            className="text-text-muted text-lg mb-10 leading-relaxed font-light"
            variants={slideUp}
          >
            Aaventora Routes was founded with a passion for exploring
            the breathtaking landscapes of the north. From the peaks of
            the Karakoram to the vibrant cultures of hidden valleys,
            we design journeys that connect travelers with authentic
            experiences.
          </motion.p>

          {/* FEATURES GRID */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">

            <motion.div className="space-y-3" variants={slideUp}>
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary text-2xl">
                🌍
              </div>
              <h4 className="font-bold text-xl text-text-main">
                Safe Traveling
              </h4>
              <p className="text-text-muted text-sm leading-relaxed">
                Carefully planned journeys ensuring comfort, safety and peace of mind.
              </p>
            </motion.div>


            <motion.div className="space-y-3" variants={slideUp}>
              <div className="w-12 h-12 rounded-2xl bg-accent/5 flex items-center justify-center text-accent text-2xl">
                💰
              </div>
              <h4 className="font-bold text-xl text-text-main">
                Affordable luxury
              </h4>
              <p className="text-text-muted text-sm leading-relaxed">
                Premium mountain experiences designed for explorers who value quality.
              </p>
            </motion.div>

          </div>


          {/* BUTTON */}
          <motion.button
            onClick={() => navigate("/experiences")}
            className="group flex items-center gap-3 text-text-main font-bold hover:text-primary transition-colors text-lg"
            variants={slideUp}
          >
            <span>DISCOVER OUR FULL STORY</span>
            <motion.span 
              className="bg-primary/10 p-2 rounded-full"
              whileHover={{ x: 5 }}
            >
              →
            </motion.span>
          </motion.button>

        </motion.div>

      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="bg-surface py-32">

        <div className="max-w-7xl mx-auto px-6">

          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <p className="uppercase tracking-[0.4em] text-xs font-bold text-accent mb-6 leading-relaxed">
              Popular Destinations
            </p>

            <h2 className="text-5xl md:text-6xl font-serif font-bold text-text-main mb-8">
              Experience The <span className="italic">Unseen</span>
            </h2>

            <p className="text-text-muted max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Discover breathtaking destinations across Pakistan —
              from the majestic mountains of Hunza to the serene
              lakes of Skardu and the lush valleys of Swat.
            </p>

          </motion.div>


          {/* Destination Cards */}
          <motion.div 
            className="grid md:grid-cols-3 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            {[
              {
                name: "Hunza Valley",
                location: "Gilgit Baltistan",
                price: "$120",
                img: "/images/hunza-valley.jpeg",
              },
              {
                name: "Skardu",
                location: "Gilgit Baltistan",
                price: "$100",
                img: "/images/skardu.jpeg",
              },
              {
                name: "Swat Valley",
                location: "KPK Pakistan",
                price: "$80",
                img: "/images/swat.jpeg",
              },
            ].map((place, index) => (

              <motion.div
                key={index}
                onClick={() => navigate("/destinations")}
                className="cursor-pointer group"
                variants={slideUp}
              >

                {/* Card */}
                <motion.div 
                  className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                  whileHover={{ y: -15 }}
                >

                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <motion.img
                      src={place.img}
                      alt={place.name}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-text-main font-bold text-sm shadow-lg">
                       FROM {place.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">

                    {/* Title */}
                    <h3 className="text-2xl font-serif font-bold text-text-main mb-3 group-hover:text-primary transition-colors">
                      {place.name}
                    </h3>

                    {/* Info Row */}
                    <div className="flex items-center gap-2 text-text-muted text-sm tracking-wider uppercase">
                      <span className="text-accent">📍</span> {place.location}
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-50 flex justify-between items-center">
                       <div className="text-yellow-500 text-xs text-opacity-40">★★★★★</div>
                       <span className="text-primary font-bold text-xs tracking-widest uppercase">Explore Detail →</span>
                    </div>

                  </div>

                </motion.div>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="py-32 bg-background overflow-hidden">

        <div className="max-w-7xl mx-auto px-6">

          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-bold mb-24 text-center text-text-main"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Travel With <span className="italic text-primary">Us?</span>
          </motion.h2>


          <div className="grid md:grid-cols-2 gap-20 items-center">

            {/* LEFT SIDE CARDS */}

            <motion.div 
              className="grid md:grid-cols-2 gap-12"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >

              {/* Card 1 */}
              <motion.div className="relative pt-10" variants={slideUp}>

                <img
                  src="/images/experience2.jpeg"
                  alt="Explore Fuji Mountain"
                  className="rounded-3xl h-80 w-full object-cover shadow-lg"
                />

                <motion.div 
                  className="bg-white rounded-3xl shadow-xl p-8 w-[90%] mx-auto -mt-20 relative z-10 text-center border border-gray-50"
                  whileHover={{ y: -10 }}
                >

                  <h3 className="text-2xl font-serif font-bold mb-4 text-text-main">
                    Explore Fuji Mountain
                  </h3>

                  <p className="text-text-muted mb-6 text-sm font-light">
                    Curated expeditions for those who seek the extraordinary.
                  </p>

                  <p className="text-primary font-bold tracking-[0.2em] text-sm uppercase">
                    From $79
                  </p>

                </motion.div>

              </motion.div>


              {/* Card 2 */}
              <motion.div className="relative" variants={slideUp}>

                <img
                  src="/images/experience4.jpeg"
                  alt="Sant Angelo Beach"
                  className="rounded-3xl h-80 w-full object-cover shadow-lg"
                />

                <motion.div 
                  className="bg-white rounded-3xl shadow-xl p-8 w-[90%] mx-auto -mt-20 relative z-10 text-center border border-gray-50"
                  whileHover={{ y: -10 }}
                >

                  <h3 className="text-2xl font-serif font-bold mb-4 text-text-main">
                    Sant Angelo Beach
                  </h3>

                  <p className="text-text-muted mb-6 text-sm font-light">
                    Breathtaking coastal views and serene travel.
                  </p>

                  <p className="text-primary font-bold tracking-[0.2em] text-sm uppercase">
                    From $99
                  </p>

                </motion.div>

              </motion.div>

            </motion.div>


            {/* RIGHT SIDE TEXT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10"></div>

              <p className="uppercase tracking-[0.4em] text-xs font-bold text-accent mb-6">
                Top Pick
              </p>

              <h3 className="text-5xl font-serif font-bold text-text-main mb-8 leading-tight">
                Exclusive Travel <br /> Experiences
              </h3>

              <p className="text-text-muted mb-10 text-lg leading-relaxed font-light">
                We design journeys that combine adventure, comfort,
                and cultural immersion. Every trip is crafted to
                deliver unforgettable memories while ensuring
                safety and seamless travel.
              </p>


              {/* Feature List */}
              <div className="space-y-10 mb-12">

                <div className="flex gap-6">
                   <div className="w-1 px-1 bg-accent/20 rounded-full"></div>
                   <div>
                      <h4 className="font-bold text-xl text-text-main mb-2">
                        Custom Itineraries
                      </h4>
                      <p className="text-text-muted text-sm leading-relaxed font-light">
                        Personalized journeys tailored to your unique travel goals.
                      </p>
                   </div>
                </div>

                <div className="flex gap-6">
                   <div className="w-1 px-1 bg-primary/20 rounded-full"></div>
                   <div>
                      <h4 className="font-bold text-xl text-text-main mb-2">
                        Local Expertise
                      </h4>
                      <p className="text-text-muted text-sm leading-relaxed font-light">
                        Our expert guides bring deep authentic knowledge of every region.
                      </p>
                   </div>
                </div>

              </div>


              <motion.button
                onClick={() => navigate("/destinations")}
                className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-primary-dark transition-all duration-300 uppercase tracking-widest text-xs"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Packages
              </motion.button>

            </motion.div>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <motion.section
        className="relative bg-cover bg-center py-40 overflow-hidden"
        style={{
          backgroundImage: "url('/images/story1.jpeg')",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >

        {/* Overlay - Elegant Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-text-main via-text-main/70 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16 text-white">

          {/* LEFT CONTENT */}
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="w-12 h-1 bg-accent mb-10"></motion.div>

            <h2 className="text-white mb-8">
              Ready to Discover <br />
              <span className="italic text-accent">Your Next Story?</span>
            </h2>

            <p className="text-gray-200 text-body-lg font-light max-w-2xl">
              Let us craft a personalized travel experience for you.
              From the majestic peaks of the Karakoram to the serene
              valleys of Kashmir, every journey is designed to be
              safe, comfortable and unforgettable.
            </p>

          </motion.div>


          {/* RIGHT BUTTON */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.button
              onClick={() => navigate("/destinations")}
              className="bg-white text-text-main px-16 py-6 rounded-full text-lg font-bold shadow-2xl hover:bg-accent hover:text-white transition-all duration-300 uppercase tracking-[0.2em]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>
          </motion.div>

        </div>

      </motion.section>


    </div>
  );
};

export default Hunza;
