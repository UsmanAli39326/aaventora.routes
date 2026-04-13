import React from "react";
import { motion } from "framer-motion";
import { slideUp, staggerContainer, fadeIn } from "../utils/animation-variants";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-background overflow-x-hidden">

      {/* HERO SECTION */}
      <motion.div
        className="h-[50vh] bg-cover bg-center relative flex items-center justify-center"
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
            Contact <span className="italic text-accent">Us</span>
          </motion.h1>
          
          <motion.p 
            className="max-w-2xl mx-auto text-body-lg text-gray-200"
            variants={slideUp}
          >
            We're here to help you plan your next unforgettable journey.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* CONTENT SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-32">
        
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* CONTACT INFO */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p className="text-accent text-tiny-label mb-6" variants={fadeIn}>Get In Touch</motion.p>
            <motion.h2 className="mb-8" variants={slideUp}>
               Let's Discuss <br /><span className="italic text-primary">Your Next Adventure</span>
            </motion.h2>
            <motion.p className="text-text-muted text-lg font-light leading-relaxed mb-12" variants={slideUp}>
              Have questions about our tours or need a custom itinerary? 
              Our travel specialists are ready to assist you in crafting the perfect trip.
            </motion.p>

            <div className="space-y-8">
               <motion.div className="flex gap-6 items-start" variants={slideUp}>
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                     <Mail size={24} />
                  </div>
                  <div>
                     <h4 className="font-bold text-lg text-text-main mb-1">Email Us</h4>
                     <p className="text-text-muted font-light">info@touristpakistan.com</p>
                  </div>
               </motion.div>

               <motion.div className="flex gap-6 items-start" variants={slideUp}>
                  <div className="w-14 h-14 rounded-2xl bg-accent/5 flex items-center justify-center text-accent">
                     <Phone size={24} />
                  </div>
                  <div>
                     <h4 className="font-bold text-lg text-text-main mb-1">Call Us</h4>
                     <p className="text-text-muted font-light">+92 (300) 123-4567</p>
                  </div>
               </motion.div>

               <motion.div className="flex gap-6 items-start" variants={slideUp}>
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                     <MapPin size={24} />
                  </div>
                  <div>
                     <h4 className="font-bold text-lg text-text-main mb-1">Our Office</h4>
                     <p className="text-text-muted font-light">Blue Area, Islamabad, Pakistan</p>
                  </div>
               </motion.div>
            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-12 rounded-[2.5rem] shadow-2xl shadow-primary/5 border border-gray-100"
          >
             <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-text-main uppercase tracking-widest pl-2">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-surface border border-transparent focus:border-primary/20 focus:bg-white transition-all outline-none" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-text-main uppercase tracking-widest pl-2">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-surface border border-transparent focus:border-primary/20 focus:bg-white transition-all outline-none" />
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-xs font-bold text-text-main uppercase tracking-widest pl-2">Subject</label>
                   <input type="text" placeholder="Inquiry about Hunza Tour" className="w-full px-6 py-4 rounded-2xl bg-surface border border-transparent focus:border-primary/20 focus:bg-white transition-all outline-none" />
                </div>

                <div className="space-y-2">
                   <label className="text-xs font-bold text-text-main uppercase tracking-widest pl-2">Your Message</label>
                   <textarea rows="5" placeholder="Tell us about your travel plans..." className="w-full px-6 py-4 rounded-2xl bg-surface border border-transparent focus:border-primary/20 focus:bg-white transition-all outline-none resize-none"></textarea>
                </div>

                <motion.button
                   className="w-full bg-text-main text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-primary transition-all duration-300 shadow-xl"
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                >
                   <span>Send Message</span>
                   <Send size={18} />
                </motion.button>
             </form>
          </motion.div>

        </div>

      </div>

    </div>
  );
};

export default Contact;
