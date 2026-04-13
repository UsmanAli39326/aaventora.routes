import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "../utils/animation-variants";
import { destinations } from "../data/destinations";
import { MapPin, Calendar, Users, Star, ArrowLeft, MessageCircle } from "lucide-react";

const Checkout = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the destination matching the ID
    const destination = destinations.find(d => d.id === id) || destinations[0];

    // Dynamic WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `Hello! I'm interested in booking the ${destination.name} trip (${destination.duration}, ${destination.price}). Can you share more details?`
    );
    const whatsappLink = `https://wa.me/923700685569?text=${whatsappMessage}`;

    return (
        <div className="bg-background min-h-screen py-32 pt-40">

            <div className="container-premium grid lg:grid-cols-2 gap-20 items-start">

                {/* LEFT SIDE - Trip Details */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-10 text-tiny-label"
                        variants={slideUp}
                    >
                        <ArrowLeft size={16} /> Back to Details
                    </motion.button>

                    <motion.p className="text-accent text-tiny-label mb-4" variants={slideUp}>Reservation</motion.p>
                    <motion.h1 className="text-text-main mb-6" variants={slideUp}>
                        Book Your <span className="italic text-primary">Trip</span>
                    </motion.h1>
                    <motion.p className="text-body-lg text-text-muted mb-12 max-w-lg" variants={slideUp}>
                        Ready to explore {destination.name}? Contact us via WhatsApp to finalize your booking — we'll handle the rest.
                    </motion.p>

                    {/* Trip Card */}
                    <motion.div className="bg-white p-8 rounded-card shadow-sm border border-gray-100 mb-8" variants={slideUp}>
                        <div className="relative rounded-[1.5rem] overflow-hidden mb-6 h-64">
                            <img
                                src={destination.img}
                                alt={destination.name}
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-text-main text-tiny-label shadow-lg">
                                {destination.name}
                            </div>
                        </div>

                        <div className="flex items-center gap-6 mb-4">
                            <div className="flex items-center gap-2 text-accent font-semibold text-body-reg">
                                <Star size={14} className="fill-accent" />
                                <span>{destination.rating}</span>
                                <span className="text-text-muted font-normal text-body-reg">({destination.reviews})</span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-200"></div>
                            <div className="text-text-main font-semibold text-tiny-label">
                                {destination.duration}
                            </div>
                        </div>

                        <p className="text-text-muted text-body-reg">
                            {destination.fullDesc}
                        </p>
                    </motion.div>

                    {/* What's Included */}
                    <motion.div className="bg-white p-8 rounded-card shadow-sm border border-gray-100" variants={slideUp}>
                        <h3 className="mb-6 text-text-main">What's Included</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {["Transport & Fuel", "Hotel Accommodation", "Experienced Guide", "Meals Included", "Photography Spots", "24/7 Support"].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-body-reg text-text-muted">
                                    <span className="w-2 h-2 rounded-full bg-accent shrink-0"></span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* RIGHT SIDE SUMMARY */}
                <motion.div
                    className="bg-white p-10 rounded-card shadow-xl shadow-primary/5 border border-gray-50 lg:sticky lg:top-32"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >

                    <h3 className="mb-8 text-text-main">
                        Booking Summary
                    </h3>

                    <div className="space-y-5 text-text-muted mb-10 border-b border-gray-50 pb-10">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <MapPin size={16} className="text-accent" />
                                <span className="text-tiny-label text-gray-400">Destination</span>
                            </div>
                            <span className="text-text-main font-semibold text-body-reg">{destination.name}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <Calendar size={16} className="text-accent" />
                                <span className="text-tiny-label text-gray-400">Duration</span>
                            </div>
                            <span className="text-text-main font-semibold text-body-reg">{destination.duration}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <Users size={16} className="text-accent" />
                                <span className="text-tiny-label text-gray-400">Travelers</span>
                            </div>
                            <span className="text-text-main font-semibold text-body-reg">2 Adults</span>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="mb-10">
                        <p className="text-text-muted text-tiny-label mb-2">Starting From</p>
                        <div className="flex items-baseline gap-2">
                            <h2 className="text-text-main">{destination.price}</h2>
                            <span className="text-body-reg text-text-muted">/ person</span>
                        </div>
                    </div>

                    {/* PRIMARY CTA: WhatsApp */}
                    <motion.a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-2xl font-semibold text-body-reg shadow-lg hover:bg-[#1da851] transition-all duration-300 mb-4"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <MessageCircle size={18} />
                        Book via WhatsApp
                    </motion.a>

                    {/* Secondary link */}
                    <motion.button
                        onClick={() => navigate("/contact")}
                        className="w-full py-4 rounded-2xl text-body-reg font-semibold text-text-main border border-gray-200 hover:bg-surface transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Contact Us Instead
                    </motion.button>

                    <p className="text-center text-text-muted text-body-reg mt-6 opacity-60">
                        Our team typically responds within 30 minutes
                    </p>
                </motion.div>

            </div>

        </div>
    );
};

export default Checkout;
