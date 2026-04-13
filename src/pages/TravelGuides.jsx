import React from "react";
import { motion } from "framer-motion";
import { slideUp, staggerContainer, fadeIn } from "../utils/animation-variants";

const TravelGuides = () => {
  const guides = [
    {
      title: "Best Time to Visit Northern Pakistan",
      desc: "Discover the ideal seasons to explore mountains, lakes and valleys.",
      tag: "Seasonal",
      img: "/images/swat.jpeg",
    },
    {
      title: "Essential Packing Checklist",
      desc: "Everything you need for a safe and comfortable mountain journey.",
      tag: "Preparation",
      img: "/images/experience1.jpeg",
    },
    {
      title: "Cultural Etiquette & Local Tips",
      desc: "Understand traditions and connect respectfully with locals.",
      tag: "Culture",
      img: "/images/story1.jpeg",
    },
    {
      title: "Top Adventure Activities",
      desc: "From trekking to jeep safaris — explore thrilling experiences.",
      tag: "Adventure",
      img: "/images/skardu.jpeg",
    },
    {
      title: "Safety & Travel Guidelines",
      desc: "Important safety recommendations for a smooth journey.",
      tag: "Safety",
      img: "/images/experience6.jpeg",
    },
    {
      title: "Budget vs Premium Travel",
      desc: "Compare travel styles and choose what suits you best.",
      tag: "Planning",
      img: "/images/story2.jpeg",
    },
  ];

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
        <div className="absolute inset-0 bg-gradient-to-b from-text-main/75 via-text-main/40 to-text-main/75 backdrop-brightness-75"></div>

        <motion.div 
          className="relative text-center text-white px-container pt-20"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="w-12 h-1 bg-accent mx-auto mb-8"></motion.div>
          
          <motion.h1 
            className="text-white mb-6"
            variants={slideUp}
          >
            Travel <span className="italic">Guides</span>
          </motion.h1>
          
          <motion.p 
            className="max-w-2xl mx-auto text-body-lg text-gray-200"
            variants={slideUp}
          >
            Expert insights, preparation tips and essential advice for your journey.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* GUIDES GRID */}
      <div className="max-w-7xl mx-auto px-6 py-32">

        <div className="text-center mb-24">
          <motion.p 
            className="text-tiny-label text-accent mb-4"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Resources
          </motion.p>
          <motion.h2 
            className="text-text-main"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Explore Our Travel <span className="italic text-primary">Insights</span>
          </motion.h2>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {guides.map((guide, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              variants={slideUp}
            >
              <motion.div 
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col"
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <motion.img
                    src={guide.img}
                    alt={guide.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-text-main text-[10px] font-bold uppercase tracking-widest">
                    {guide.tag}
                  </div>
                </div>

                <div className="p-10 flex-grow">
                  <h3 className="text-2xl font-serif font-bold mb-4 text-text-main group-hover:text-primary transition-colors leading-tight">
                    {guide.title}
                  </h3>

                  <p className="text-text-muted text-sm font-light leading-relaxed mb-8">
                    {guide.desc}
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                     <span className="text-xs font-bold text-primary tracking-widest uppercase">Read Article</span>
                     <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
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

export default TravelGuides;
