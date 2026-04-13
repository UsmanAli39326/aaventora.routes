import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import { slideUp, staggerContainer, fadeIn } from "../utils/animation-variants";
import { ShieldCheck, Gem, Compass, Star, Quote, Clock, ArrowRight } from "lucide-react";
import { destinations } from "../data/destinations";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background overflow-x-hidden">
      <Hero />

      {/* SERVICE HIGHLIGHTS */}
      <section className="bg-white py-section border-b border-gray-50">
        <div className="container-premium text-center">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-card"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: <ShieldCheck className="text-primary" size={28} />, title: "Safe Journey", desc: "Your safety is our priority with expert guides and secure travel." },
              { icon: <Gem className="text-accent" size={28} />, title: "Affordable Luxury", desc: "Experience premium hospitality at the most competitive prices." },
              { icon: <Compass className="text-primary" size={28} />, title: "Expert Curation", desc: "Handpicked destinations and authentic local experiences." },
            ].map((service, index) => (
              <motion.div key={index} className="flex flex-col items-center p-card rounded-card hover:bg-surface transition-all duration-500 group border border-transparent hover:border-gray-50" variants={slideUp}>
                <div className="w-20 h-20 rounded-[1.5rem] bg-surface flex items-center justify-center mb-8 group-hover:scale-105 group-hover:bg-white group-hover:shadow-xl transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="mb-4">{service.title}</h3>
                <p className="text-body-reg text-text-muted">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OUR STORY / ABOUT PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE */}
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
              className="rounded-[3rem] shadow-2xl w-full object-cover h-[600px]"
            />
          </div>

          <motion.div
            className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2.5rem] shadow-2xl hidden lg:block z-20 max-w-[280px] border border-gray-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="text-accent text-5xl font-serif font-bold mb-2">10k+</div>
            <div className="text-text-muted text-xs tracking-[0.3em] uppercase font-bold">Happy Travelers</div>
            <div className="mt-6 flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                  <img src={`/images/face.jpeg`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </motion.div>

          <div className="absolute top-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.p className="text-accent text-tiny-label mb-6" variants={fadeIn}>Our Heritage</motion.p>

          <motion.h2 className="mb-8" variants={slideUp}>
            Crafting Stories <br /><span className="italic text-primary">Since 2015</span>
          </motion.h2>

          <motion.p className="text-body-lg text-text-muted mb-10" variants={slideUp}>
            Tourist Pakistan was founded with a passion for exploring the world's most
            breathtaking landscapes. From the peaks of the Karakoram to vibrant
            cultures of hidden valleys, we design journeys that connect travelers
            with authentic, luxury experiences.
          </motion.p>

          <motion.div className="grid grid-cols-2 gap-8 mb-12" variants={slideUp}>
            <div className="space-y-3">
              <div className="w-12 h-1 px-1 bg-accent/30 rounded-full"></div>
              <h4 className="font-bold text-xl text-text-main">Safe Journeys</h4>
              <p className="text-text-muted text-sm font-light">Elegance meets safety in every mile.</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-1 px-1 bg-primary/30 rounded-full"></div>
              <h4 className="font-bold text-xl text-text-main">Expert Curation</h4>
              <p className="text-text-muted text-sm font-light">Handpicked luxury destinations.</p>
            </div>
          </motion.div>

          <motion.button
            onClick={() => navigate("/about")}
            className="group flex items-center gap-4 text-text-main font-bold hover:text-primary transition-colors text-tiny-label"
            variants={slideUp}
          >
            <span className="border-b-2 border-accent transition-colors pb-1">DISCOVER OUR FULL STORY</span>
            <span className="bg-primary/5 p-3 rounded-full group-hover:bg-primary group-hover:text-white transition-all">→</span>
          </motion.button>
        </motion.div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="bg-surface py-section">
        <div className="container-premium">
          <div className="text-center mb-20 text-center flex flex-col items-center">
            <motion.p className="text-tiny-label text-accent mb-6" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>Popular Destinations</motion.p>
            <motion.h2 className="mb-8" variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>Experience The <span className="italic">Unseen</span></motion.h2>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-card"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {destinations.slice(0, 3).map((place, index) => (
              <motion.div key={index} onClick={() => navigate(`/destination/${place.id}`)} className="cursor-pointer group" variants={slideUp}>
                <motion.div className="bg-white rounded-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 h-full flex flex-col" whileHover={{ y: -10 }}>
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <motion.img src={place.img} alt={place.name} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-text-main font-bold text-tiny-label shadow-lg">
                      {place.price}
                    </div>
                  </div>
                  <div className="p-card flex-grow flex flex-col">
                    <h3 className="mb-4 group-hover:text-primary transition-colors">{place.name}</h3>
                    <div className="flex items-center gap-3 text-tiny-label text-text-muted mb-4 uppercase">
                      <span className="flex items-center gap-1">📍 {place.location}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-200"></span>
                      <span className="flex items-center gap-1"><Clock size={12} className="text-accent" /> {place.duration}</span>
                    </div>

                    <p className="text-body-reg text-text-muted mb-6 line-clamp-2">
                      {place.desc}
                    </p>

                    <div className="mt-auto pt-6 border-t border-gray-50 flex justify-between items-center text-tiny-label text-primary uppercase group/btn">
                      <span className="flex items-center gap-3 group-hover/btn:gap-4 transition-all">Explore Detail <ArrowRight size={14} /></span>
                      <Star size={14} className="text-accent fill-accent" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <motion.p className="text-accent uppercase tracking-[0.6em] text-[10px] font-bold mb-8" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>Testimonials</motion.p>
            <motion.h2 className="text-5xl md:text-7xl font-serif font-bold text-text-main" variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>Journey of <span className="italic">Joy</span></motion.h2>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { name: "Sarah Ahmed", role: "Solo Explorer", quote: "The most seamless travel experience I've had in Pakistan. The attention to detail in Hunza was unmatched.", img: "/images/face.jpeg" },
              { name: "John Miller", role: "Adventure Blogger", quote: "Authentic, safe and truly luxurious. They know the hidden gems that you won't find anywhere else.", img: "/images/face.jpeg" },
              { name: "Sana Khan", role: "Family Traveler", quote: "Perfectly organized trip for my family. The stays were premium and the guide was incredibly knowledgeable.", img: "/images/face.jpeg" }
            ].map((testi, index) => (
              <motion.div key={index} className="bg-surface p-12 rounded-[3rem] relative group" variants={slideUp} whileHover={{ y: -10 }}>
                <Quote className="absolute top-10 right-10 text-primary/10 group-hover:text-primary/20 transition-colors" size={60} />

                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="fill-accent text-accent" />)}
                </div>

                <p className="text-text-main text-lg italic leading-relaxed mb-10 relative z-10">"{testi.quote}"</p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg">
                    <img src={testi.img} alt={testi.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-main">{testi.name}</h4>
                    <p className="text-text-muted text-xs uppercase tracking-widest leading-none mt-1">{testi.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <motion.section
        className="relative py-40 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0">
          <img src="/images/story1.jpeg" alt="Story" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-text-main via-text-main/70 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16 text-white">
          <motion.div className="max-w-3xl" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <motion.div className="w-16 h-1 bg-accent mb-10"></motion.div>
            <h2 className="text-white mb-10">Ready to Discover <br /><span className="italic text-accent">Your Next Story?</span></h2>
            <p className="text-gray-200 text-body-lg font-light max-w-2xl">Let us craft a personalized travel experience for you. From the peaks of Karakoram to the serene valleys of Kashmir, every journey is designed to be safe, comfortable and unforgettable.</p>
          </motion.div>

          <motion.button
            onClick={() => navigate("/contact")}
            className="btn-premium bg-white text-text-main hover:bg-accent hover:text-white shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
          </motion.button>
        </div>
      </motion.section>

    </div>
  );
};

export default Home;
