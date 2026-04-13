import React from "react";
import { motion } from "framer-motion";
import { slideUp, staggerContainer, fadeIn } from "../utils/animation-variants";
import { ShieldCheck, Gem, Compass } from "lucide-react";

const About = () => {
  const experiences = [
    { title: "Karakoram Peaks", img: "/images/experience1.jpeg", tag: "Adventure" },
    { title: "Cultural Heritage", img: "/images/experience2.jpeg", tag: "Culture" },
    { title: "Alpine Lakes", img: "/images/experience3.jpeg", tag: "Nature" },
    { title: "Hidden Valleys", img: "/images/experience4.jpeg", tag: "Discovery" },
    { title: "Local Traditions", img: "/images/experience5.jpeg", tag: "People" },
    { title: "High Altitude", img: "/images/experience6.jpeg", tag: "Summit" },
  ];

  return (
    <div className="bg-background overflow-x-hidden">

      {/* HERO SECTION */}
      <motion.div
        className="h-[65vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-text-main/75 via-text-main/50 to-text-main/75 backdrop-blur-[2px]"></div>

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
            About <span className="italic">Tourist Pakistan</span>
          </motion.h1>
          
          <motion.p 
            className="max-w-2xl mx-auto text-body-lg text-gray-200"
            variants={slideUp}
          >
            Discover our story, our mission, and our passion for the incredible landscapes of the north.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* SERVICE HIGHLIGHTS */}
      <section className="bg-white py-section border-b border-gray-50 text-center flex flex-col items-center">
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
                <motion.div key={index} className="flex flex-col items-center text-center p-card rounded-card hover:bg-surface transition-all duration-500 group border border-transparent hover:border-gray-50" variants={slideUp}>
                   <div className="w-20 h-20 rounded-[1.5rem] bg-surface flex items-center justify-center mb-8 group-hover:scale-105 group-hover:bg-white group-hover:shadow-2xl transition-all duration-500">
                      {service.icon}
                   </div>
                   <h3 className="mb-4">{service.title}</h3>
                   <p className="text-body-reg text-text-muted">{service.desc}</p>
                </motion.div>
              ))}
           </motion.div>
        </div>
      </section>

      {/* GRID SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-32">

        <div className="text-center mb-24">
          <motion.p 
            className="uppercase tracking-[0.4em] text-xs font-bold text-accent mb-4"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Highlights
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-bold text-text-main"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Journey & <span className="italic text-primary">Milestones</span>
          </motion.h2>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="group"
              variants={slideUp}
            >
              <motion.div 
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col"
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <motion.img
                    src={exp.img}
                    alt={exp.title}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] uppercase tracking-widest font-bold">
                    {exp.tag}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-text-main mb-3 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-text-muted text-sm font-light leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </div>
  );
};

export default About;
