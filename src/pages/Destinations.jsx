import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { slideUp, staggerContainer, fadeIn } from "../utils/animation-variants";
import { destinations } from "../data/destinations";
import { Star, Clock, Calendar, ArrowRight } from "lucide-react";

const Destinations = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background overflow-x-hidden">

      {/* HERO SECTION */}
      <motion.div
        className="h-[60vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-text-main/70 via-text-main/40 to-text-main/70 backdrop-brightness-75"></div>

        <motion.div 
          className="relative text-center text-white px-container pt-20"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="w-12 h-1 bg-accent mx-auto mb-8"></motion.div>
          
          <motion.h1 
            className="text-white mb-8"
            variants={slideUp}
          >
            Explore <span className="italic">Pakistan</span>
          </motion.h1>
          
          <motion.p 
            className="max-w-2xl mx-auto text-body-lg text-gray-200"
            variants={slideUp}
          >
            Discover the untamed beauty and cultural heritage of the majestic north.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* DESTINATION GRID */}
      <div className="container-premium py-section">

        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <motion.p 
              className="text-tiny-label text-accent mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Exclusive Collection
            </motion.p>
            <motion.h2 
              className="text-text-main"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Legendary <span className="italic">Destinations</span>
            </motion.h2>
          </div>
          <motion.p className="max-w-md text-text-muted text-body-lg" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
             Handpicked experiences designed for those who seek the extraordinary in every mile.
          </motion.p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {destinations.map((place, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              onClick={() => navigate(`/destination/${place.id}`)}
              variants={slideUp}
            >
              <motion.div 
                className="bg-white rounded-[3rem] shadow-sm hover:shadow-2xl overflow-hidden transition-all duration-700 border border-gray-100 h-full flex flex-col group"
                whileHover={{ y: -20 }}
              >
                <div className="relative overflow-hidden aspect-[4/5]">
                  <motion.img
                    src={place.img}
                    alt={place.name}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-8 left-8 flex flex-col gap-3">
                     {place.tags.map((tag, i) => (
                        <div key={i} className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-text-main font-bold text-[9px] uppercase tracking-widest shadow-xl">
                            {tag}
                        </div>
                     ))}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-text-main/80 to-transparent">
                     <div className="flex items-center gap-3 text-white">
                        <div className="flex items-center gap-1">
                           <Star size={14} className="fill-accent text-accent" />
                           <span className="text-sm font-bold">{place.rating}</span>
                        </div>
                        <span className="w-1 h-1 rounded-full bg-white/40"></span>
                        <span className="text-[10px] uppercase tracking-widest font-bold opacity-80">{place.reviews}</span>
                     </div>
                  </div>
                </div>

                <div className="p-card flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="group-hover:text-primary transition-colors">
                        {place.name}
                    </h3>
                    <div className="text-right">
                        <p className="text-tiny-label text-accent mb-1">From</p>
                        <p className="text-h3 text-text-main leading-none">{place.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 mb-6">
                     <div className="flex items-center gap-2 text-text-muted text-tiny-label">
                        <Clock size={14} className="text-primary" />
                        <span>{place.duration}</span>
                     </div>
                     <div className="flex items-center gap-2 text-text-muted text-tiny-label">
                        <Calendar size={14} className="text-primary" />
                        <span>{place.bestSeason || 'All Year'}</span>
                     </div>
                  </div>

                  <p className="text-text-muted text-body-reg mb-8 line-clamp-2">
                    {place.desc}
                  </p>

                  <div className="mt-auto pt-8 border-t border-gray-50">
                    <div className="flex items-center justify-between">
                        <span className="text-primary font-bold text-tiny-label flex items-center gap-3 group-hover:gap-5 transition-all">
                             Explore Destination <ArrowRight size={16} />
                        </span>
                        <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all text-sm font-bold">
                             +
                        </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}

        </motion.div>
      </div>

    </div>
  );
};

export default Destinations;
