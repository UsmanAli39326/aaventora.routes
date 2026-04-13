import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { slideUp, staggerContainer, fadeIn } from "../utils/animation-variants";
import { destinations } from "../data/destinations";
import { Star, Clock, MapPin, Calendar, ArrowRight, Quote } from "lucide-react";

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinations.find((d) => d.id === id);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background pt-40">
        <div className="text-center">
          <h1 className="text-text-main mb-6">Destination Not Found</h1>
          <button onClick={() => navigate("/destinations")} className="btn-premium bg-primary text-white">
            Browse Destinations
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background overflow-x-hidden">

      {/* ═══════════════════════════════════════════
          SECTION 1: CINEMATIC HERO
      ═══════════════════════════════════════════ */}
      <section
        className="h-screen bg-cover bg-center relative flex items-end"
        style={{ backgroundImage: `url('${destination.img}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-text-main via-text-main/30 to-text-main/20"></div>

        <motion.div
          className="relative z-10 container-premium pb-20 pt-20 w-full"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Tags */}
          <motion.div className="flex gap-3 mb-6" variants={slideUp}>
            {destination.tags.map((tag, i) => (
              <span
                key={i}
                className="text-tiny-label bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Title */}
          <motion.h1 className="text-white mb-4" variants={slideUp}>
            {destination.name.split(" ")[0]}{" "}
            <span className="italic text-accent">
              {destination.name.split(" ").slice(1).join(" ") || destination.name}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p className="text-body-lg text-gray-300 mb-10 max-w-2xl" variants={slideUp}>
            {destination.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="flex gap-4 flex-wrap" variants={slideUp}>
            <motion.button
              onClick={() => navigate(`/checkout/${destination.id}`)}
              className="btn-premium bg-accent text-white hover:bg-accent-dark"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book This Trip
            </motion.button>
            <motion.a
              href="#story"
              className="btn-premium bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-text-main"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Below
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: QUICK STATS BAR
      ═══════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-premium">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {[
              { icon: <Clock size={20} className="text-accent" />, label: "Duration", value: destination.duration },
              { icon: <MapPin size={20} className="text-accent" />, label: "Location", value: destination.location },
              { icon: <Calendar size={20} className="text-accent" />, label: "Best Season", value: destination.bestSeason },
              { icon: <Star size={20} className="text-accent fill-accent" />, label: "Rating", value: `${destination.rating} ★` },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4 py-8 px-6 md:px-10">
                <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-tiny-label text-text-muted mb-1">{stat.label}</p>
                  <p className="font-semibold text-text-main text-body-reg">{stat.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: THE STORY (Asymmetric Layout)
      ═══════════════════════════════════════════ */}
      <section id="story" className="py-section">
        <div className="container-premium grid md:grid-cols-2 gap-20 items-center">

          {/* Left: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={destination.gallery[0]}
              alt={destination.name}
              className="rounded-[2.5rem] shadow-2xl w-full object-cover h-[550px]"
            />
            {/* Floating price badge */}
            <motion.div
              className="absolute -bottom-8 -right-4 md:-right-8 bg-white p-8 rounded-[2rem] shadow-2xl z-20 border border-gray-50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-tiny-label text-text-muted mb-1">Starting From</p>
              <p className="text-h3 text-accent">{destination.price}</p>
              <p className="text-tiny-label text-text-muted mt-1">{destination.duration} Package</p>
            </motion.div>

            <div className="absolute top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="w-16 h-1 bg-accent mb-8" variants={fadeIn}></motion.div>
            <motion.p className="text-tiny-label text-accent mb-4" variants={slideUp}>
              The Story
            </motion.p>
            <motion.h2 className="mb-8" variants={slideUp}>
              Discover{" "}
              <span className="italic text-primary">{destination.name}</span>
            </motion.h2>
            <motion.p className="text-body-lg text-text-muted mb-10 leading-relaxed" variants={slideUp}>
              {destination.story}
            </motion.p>

            <motion.button
              onClick={() => navigate(`/checkout/${destination.id}`)}
              className="group flex items-center gap-4 text-text-main font-bold hover:text-primary transition-colors text-tiny-label"
              variants={slideUp}
            >
              <span className="border-b-2 border-accent pb-1">PLAN YOUR JOURNEY</span>
              <span className="bg-primary/5 p-3 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                <ArrowRight size={16} />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: PHOTO GALLERY (Bento Grid)
      ═══════════════════════════════════════════ */}
      <section className="bg-surface py-section">
        <div className="container-premium">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-tiny-label text-accent mb-4">Gallery</p>
            <h2>
              Captured <span className="italic text-primary">Moments</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-4 md:gap-6 h-auto md:h-[500px]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Large image */}
            <motion.div
              className="md:col-span-2 md:row-span-2 relative rounded-[2rem] overflow-hidden group"
              variants={slideUp}
            >
              <img
                src={destination.gallery[0]}
                alt="Gallery 1"
                className="w-full h-full object-cover min-h-[300px] md:min-h-0 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-main/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>

            {/* Top right */}
            <motion.div
              className="relative rounded-[2rem] overflow-hidden group"
              variants={slideUp}
            >
              <img
                src={destination.gallery[1]}
                alt="Gallery 2"
                className="w-full h-full object-cover min-h-[200px] md:min-h-0 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-main/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>

            {/* Bottom right */}
            <motion.div
              className="relative rounded-[2rem] overflow-hidden group"
              variants={slideUp}
            >
              <img
                src={destination.gallery[2]}
                alt="Gallery 3"
                className="w-full h-full object-cover min-h-[200px] md:min-h-0 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-main/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5: HIGHLIGHTS
      ═══════════════════════════════════════════ */}
      <section className="py-section bg-white">
        <div className="container-premium">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-tiny-label text-accent mb-4">Experiences</p>
            <h2>
              What <span className="italic text-primary">Awaits</span> You
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {destination.highlights.map((item, i) => (
              <motion.div
                key={i}
                className="bg-surface p-8 rounded-card border border-gray-50 hover:border-primary/10 hover:shadow-xl transition-all duration-500 group"
                variants={slideUp}
                whileHover={{ y: -8 }}
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="mb-3 text-text-main">{item.title}</h4>
                <p className="text-body-reg text-text-muted">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6: ITINERARY
      ═══════════════════════════════════════════ */}
      <section className="py-section bg-surface">
        <div className="container-premium">
          <div className="grid md:grid-cols-2 gap-20 items-start">

            {/* Left: Header + Image */}
            <motion.div
              className="md:sticky md:top-32"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-tiny-label text-accent mb-4">Day by Day</p>
              <h2 className="mb-6">
                Your <span className="italic text-primary">Journey</span>
              </h2>
              <p className="text-body-lg text-text-muted mb-10">
                Every day is carefully crafted to balance adventure, culture, and rest — 
                so you experience the best without the stress.
              </p>
              <img
                src={destination.gallery[1]}
                alt="Itinerary"
                className="rounded-[2rem] w-full object-cover h-[350px] shadow-xl hidden md:block"
              />
            </motion.div>

            {/* Right: Timeline */}
            <motion.div
              className="space-y-0"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {destination.itinerary.map((day, i) => (
                <motion.div
                  key={i}
                  className="relative pl-12 pb-12 last:pb-0 group"
                  variants={slideUp}
                >
                  {/* Timeline line */}
                  {i < destination.itinerary.length - 1 && (
                    <div className="absolute left-[18px] top-10 bottom-0 w-[2px] bg-gray-200 group-hover:bg-accent/30 transition-colors"></div>
                  )}
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-tiny-label text-accent group-hover:border-accent group-hover:shadow-lg transition-all">
                    {day.day}
                  </div>

                  <div className="bg-white p-8 rounded-[1.5rem] border border-gray-100 hover:border-accent/20 hover:shadow-lg transition-all duration-300">
                    <h4 className="text-text-main mb-2">{day.title}</h4>
                    <p className="text-body-reg text-text-muted">{day.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7: TESTIMONIAL
      ═══════════════════════════════════════════ */}
      <section className="py-section bg-white overflow-hidden">
        <div className="container-premium">
          <motion.div
            className="max-w-3xl mx-auto text-center relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Quote className="text-primary/10 mx-auto mb-8" size={80} />

            <p className="text-h3 text-text-main italic leading-relaxed mb-10">
              "{destination.testimonial.quote}"
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <img
                  src={destination.testimonial.img}
                  alt={destination.testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <h4 className="text-text-main">{destination.testimonial.name}</h4>
                <p className="text-tiny-label text-text-muted">{destination.testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 8: FINAL CTA
      ═══════════════════════════════════════════ */}
      <motion.section
        className="relative py-40 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0">
          <img
            src={destination.gallery[2]}
            alt="CTA Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-text-main via-text-main/80 to-text-main/40"></div>
        </div>

        <div className="relative container-premium flex flex-col md:flex-row items-center justify-between gap-16 text-white">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="w-16 h-1 bg-accent mb-10"></motion.div>
            <h2 className="text-white mb-8">
              Ready to Experience{" "}
              <br />
              <span className="italic text-accent">{destination.name}?</span>
            </h2>
            <p className="text-body-lg text-gray-200 font-light max-w-xl">
              {destination.fullDesc}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.button
              onClick={() => navigate(`/checkout/${destination.id}`)}
              className="btn-premium bg-white text-text-main hover:bg-accent hover:text-white shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now — {destination.price}
            </motion.button>
            <motion.a
              href={`https://wa.me/923700685569?text=${encodeURIComponent(`Hi! I'd like to book the ${destination.name} trip (${destination.duration}, ${destination.price}). Please share details!`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium bg-white/10 backdrop-blur-md border border-white/20 text-white text-center hover:bg-white hover:text-text-main"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              WhatsApp Inquiry
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

    </div>
  );
};

export default DestinationDetail;
