import React from "react";
import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "../utils/animation-variants";

const StylesShowcase = () => {
    return (
        <div className="bg-background min-h-screen pt-40 pb-20">
            <div className="container-premium">
                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="space-y-section"
                >
                    {/* TYPOGRAPHY SECTION */}
                    <section>
                        <motion.p variants={slideUp} className="text-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-4">Typography System</motion.p>
                        <motion.h1 variants={slideUp} className="mb-12">Elegant Editorial Aesthetic</motion.h1>
                        
                        <div className="grid lg:grid-cols-2 gap-12">
                            <motion.div variants={slideUp} className="space-y-8">
                                <div>
                                    <p className="text-tiny-label text-text-muted mb-2">Heading 1 (Hero)</p>
                                    <h1>The Art of Bespoke Travel</h1>
                                </div>
                                <div>
                                    <p className="text-tiny-label text-text-muted mb-2">Heading 2 (Section)</p>
                                    <h2>Curated Destinations</h2>
                                </div>
                                <div>
                                    <p className="text-tiny-label text-text-muted mb-2">Heading 3 (Card Title)</p>
                                    <h3>Northern Splendor & Serenity</h3>
                                </div>
                                <div>
                                    <p className="text-tiny-label text-text-muted mb-2">Heading 4</p>
                                    <h4>Heritage & Legacy</h4>
                                </div>
                            </motion.div>

                            <motion.div variants={slideUp} className="space-y-8">
                                <div>
                                    <p className="text-tiny-label text-text-muted mb-2">Body Large</p>
                                    <p className="text-body-lg">
                                        Experience the world through a lens of unparalleled sophistication. Our journeys are meticulously crafted to ignite the senses and provide a sanctuary for the discerning traveler.
                                    </p>
                                </div>
                                <div>
                                    <p className="text-tiny-label text-text-muted mb-2">Body Regular</p>
                                    <p className="text-body-reg text-text-muted">
                                        From the majestic peaks of the Karakoram to the serene valleys of Hunza, every detail is orchestrated to ensure your comfort and inspiration. Discover the hidden gems of Pakistan in style.
                                    </p>
                                </div>
                                <div>
                                    <p className="text-tiny-label text-text-muted mb-2">Meta Text & Labels</p>
                                    <div className="flex flex-wrap gap-4">
                                        <span className="text-meta bg-surface px-4 py-1 rounded-full border border-gray-100 italic">5.0 Rating</span>
                                        <span className="text-tiny-label text-accent">Exclusive Access</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    <hr className="border-gray-100" />

                    {/* SPACING & CARDS SECTION */}
                    <section>
                         <motion.p variants={slideUp} className="text-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-4">Layout & Elements</motion.p>
                         <motion.h2 variants={slideUp} className="mb-12">Spacious & Defined</motion.h2>

                         <div className="grid md:grid-cols-2 gap-card-gap">
                            {/* PREMIUM CARD */}
                            <motion.div 
                                variants={slideUp}
                                className="bg-white rounded-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
                            >
                                <div className="h-96 overflow-hidden">
                                    <img 
                                        src="/luxury_resort.png" 
                                        alt="Luxury Resort" 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-card space-y-4">
                                    <p className="text-tiny-label text-accent">Mountain Retreat</p>
                                    <h3>Karakoram Sanctuary</h3>
                                    <p className="text-body-reg text-text-muted">
                                        An architectural masterpiece nestled amidst the highest peaks, offering a seamless blend of traditional craftsmanship and modern luxury.
                                    </p>
                                    <div className="pt-4">
                                        <button className="btn-premium bg-text-main text-white hover:bg-primary">
                                            Discover More
                                        </button>
                                    </div>
                                </div>
                            </motion.div>

                            {/* TEXT CARD */}
                            <motion.div 
                                variants={slideUp}
                                className="bg-primary/5 rounded-card p-card flex flex-col justify-center space-y-6 border border-primary/10"
                            >
                                <h3 className="italic text-primary">"The world is a book, and those who do not travel read only a page."</h3>
                                <p className="text-body-lg text-text-main">
                                    Our philosophy is rooted in the belief that travel should be a transformative experience, one that leaves an indelible mark on the soul long after the journey ends.
                                </p>
                                <div className="flex gap-4">
                                    <button className="btn-premium border-2 border-text-main text-text-main hover:bg-text-main hover:text-white">
                                        Our Vision
                                    </button>
                                </div>
                            </motion.div>
                         </div>
                    </section>

                    {/* FULL WIDTH IMAGE / SECTION GAP DEMO */}
                    <section className="py-section">
                        <motion.div 
                            variants={slideUp}
                            className="h-[600px] rounded-card overflow-hidden relative"
                        >
                            <img 
                                src="/luxury_resort.png" 
                                alt="Luxury Landscape" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-card">
                                <div className="max-w-2xl text-white space-y-4">
                                    <p className="text-tiny-label">Destination of the Month</p>
                                    <h1 className="text-white">The Ethereal Beauty of Hunza</h1>
                                    <button className="btn-premium bg-accent text-white hover:bg-white hover:text-text-main">
                                        Plan Your Escape
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </section>
                </motion.div>
            </div>
        </div>
    );
};

export default StylesShowcase;
