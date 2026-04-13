import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { slideUp, staggerContainer, fadeIn } from "../utils/animation-variants";

const guides = [
    {
        name: "Ali Khan",
        role: "Alpine Specialist",
        desc: "Expert mountain guide with 8+ years of trekking experience across northern Pakistan.",
        img: "/images/face.jpeg",
    },
    {
        name: "Sara Ahmed",
        role: "Cultural Liaison",
        desc: "Cultural storyteller passionate about heritage and local traditions.",
        img: "/images/face.jpeg",
    },
    {
        name: "Usman Tariq",
        role: "Expedition Leader",
        desc: "Adventure specialist focused on hiking and high-altitude tours.",
        img: "/images/face.jpeg",
    },
    {
        name: "Hassan Raza",
        role: "Naturalist",
        desc: "Wildlife and nature expert guiding eco-tourism experiences.",
        img: "/images/face.jpeg",
    },
    {
        name: "Fatima Noor",
        role: "Logistics Expert",
        desc: "Hospitality expert ensuring comfort and memorable journeys.",
        img: "/images/face.jpeg",
    },
];

const Experiences = () => {
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
                <div className="absolute inset-0 bg-gradient-to-b from-text-main/75 via-text-main/40 to-text-main/75 backdrop-blur-[2px]"></div>

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
                        Our <span className="italic">Story</span>
                    </motion.h1>
                    
                    <motion.p 
                        className="max-w-2xl mx-auto text-body-lg text-gray-200"
                        variants={slideUp}
                    >
                        Bridging the gap between soul and soil through meaningful travel experiences.
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* OUR STORY SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.p 
                        className="text-tiny-label text-accent mb-6"
                        variants={fadeIn}
                    >
                        Heritage
                    </motion.p>
                    
                    <motion.h2 
                        className="mb-8"
                        variants={slideUp}
                    >
                        A Vision Born <br /><span className="italic text-primary">In The Peaks</span>
                    </motion.h2>

                    <motion.p 
                        className="text-text-muted text-body-lg mb-6 leading-relaxed font-light"
                        variants={slideUp}
                    >
                        From a shared vision in 2015 to a movement that connects travelers
                        and untamed paths, Tourist Pakistan was born to redefine travel.
                    </motion.p>

                    <motion.p 
                        className="text-text-muted text-lg leading-relaxed font-light"
                        variants={slideUp}
                    >
                        We started as a group of friends wanting to show the real soul of
                        the north — from valleys and historic forts to meaningful local encounters.
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-2 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div className="space-y-6">
                        <motion.img
                            src="/images/story3.jpeg"
                            alt="Story 1"
                            className="rounded-[2rem] h-72 w-full object-cover shadow-lg"
                            variants={slideUp}
                        />
                        <motion.img
                            src="/images/story2.jpeg"
                            alt="Story 2"
                            className="rounded-[2rem] h-52 w-full object-cover shadow-lg"
                            variants={slideUp}
                        />
                    </motion.div>
                    <motion.div className="pt-12">
                        <motion.img
                            src="/images/story1.jpeg"
                            alt="Story 3"
                            className="rounded-[2rem] h-full w-full object-cover shadow-2xl"
                            variants={slideUp}
                        />
                    </motion.div>
                </motion.div>
            </section>

            {/* CORE PILLARS SECTION */}
            <div className="bg-text-main text-white py-32 relative overflow-hidden">
                
                <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

                    <motion.h2 
                        className="text-white mb-20"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Core <span className="italic text-accent">Pillars</span>
                    </motion.h2>

                    <motion.div 
                        className="grid md:grid-cols-3 gap-12"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >

                        <motion.div className="bg-white/5 backdrop-blur-md p-10 rounded-card border border-white/10 hover:bg-white/10 transition-colors" variants={slideUp}>
                            <div className="text-4xl mb-6">🧘‍♂️</div>
                            <h3 className="text-white mb-4">Peace</h3>
                            <p className="text-gray-400 text-body-reg font-light">
                                We believe in journeys that promote calm, connection and personal growth through the serenity of nature.
                            </p>
                        </motion.div>

                        <motion.div className="bg-white/5 backdrop-blur-md p-10 rounded-card border border-white/10 hover:bg-white/10 transition-colors" variants={slideUp}>
                            <div className="text-4xl mb-6">🏔️</div>
                            <h3 className="text-white mb-4">Adventure</h3>
                            <p className="text-gray-400 text-body-reg font-light">
                                Authentic experiences designed to inspire exploration, courage, and a deeper respect for the wild.
                            </p>
                        </motion.div>

                        <motion.div className="bg-white/5 backdrop-blur-md p-10 rounded-card border border-white/10 hover:bg-white/10 transition-colors" variants={slideUp}>
                            <div className="text-4xl mb-6">🤝</div>
                            <h3 className="text-white mb-4">Culture</h3>
                            <p className="text-gray-400 text-body-reg font-light">
                                We connect travelers with deep traditions, local heritage, and the heartwarming people of the north.
                            </p>
                        </motion.div>

                    </motion.div>
                </div>
            </div>

            {/* MEET YOUR GUIDES */}
            <section className="max-w-7xl mx-auto px-6 py-32">
                <MeetGuides />
            </section>

        </div>
    );
};

const MeetGuides = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        if (current < guides.length - 3) {
            setCurrent(current + 1);
        }
    };

    const prevSlide = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    };

    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="max-w-2xl">
                    <p className="uppercase tracking-[0.4em] text-xs font-bold text-accent mb-4">The Team</p>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-main">
                        Meet Your <span className="italic text-primary">Guides</span>
                    </h2>
                </div>
                
                <div className="flex gap-4">
                    <button
                        onClick={prevSlide}
                        className={`p-4 rounded-full border transition-all duration-300 ${
                            current === 0 
                            ? "border-gray-100 text-gray-300" 
                            : "border-text-main text-text-main hover:bg-text-main hover:text-white"
                        }`}
                        disabled={current === 0}
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className={`p-4 rounded-full border transition-all duration-300 ${
                            current >= guides.length - 3 
                            ? "border-gray-100 text-gray-300" 
                            : "border-text-main text-text-main hover:bg-text-main hover:text-white"
                        }`}
                        disabled={current >= guides.length - 3}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            <div className="relative overflow-hidden">
                <motion.div
                    className="flex"
                    animate={{ x: `-${current * 33.33}%` }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                    {guides.map((guide, index) => (
                        <div key={index} className="min-w-[33.33%] px-4">
                            <motion.div 
                                className="bg-white rounded-[2rem] overflow-hidden group transition-all duration-500 border border-gray-100 h-full flex flex-col"
                                whileHover={{ y: -10 }}
                            >
                                <div className="relative overflow-hidden aspect-[3/4]">
                                    <img
                                        src={guide.img}
                                        alt={guide.name}
                                        className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-text-main/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <p className="text-white text-xs tracking-widest uppercase font-bold">{guide.role}</p>
                                    </div>
                                </div>
                                <div className="p-8 flex-grow">
                                    <h3 className="text-2xl font-serif font-bold mb-4 text-text-main group-hover:text-primary transition-colors">
                                        {guide.name}
                                    </h3>
                                    <p className="text-text-muted text-sm font-light leading-relaxed">
                                        {guide.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default Experiences;

