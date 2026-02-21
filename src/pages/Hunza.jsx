import React from "react";
import { useNavigate } from "react-router-dom";

const Hunza = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-backcolor">

            {/* Hero Section */}
            <div
                className="h-[75vh] bg-cover bg-center relative flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/hero.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-primary/20"></div>

                <div className="relative text-center text-white px-4 max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                        Hunza Valley
                    </h1>

                    <p className="text-base md:text-lg mb-6 text-gray-100">
                        The Shangri-La of the North. Experience adventure,
                        peace, and culture in the heart of the Karakoram.
                    </p>

                    <button className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition duration-300 shadow-md">
                        Explore Map
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 fade-in">

                {/* LEFT SECTION */}
                <div className="md:col-span-2 space-y-10">

                    {/* At a Glance */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-semibold mb-6">
                            At a Glance
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {[
                                { label: "Current Temp", value: "15°C" },
                                { label: "Best Time", value: "Mar - Oct" },
                                { label: "Altitude", value: "2,438m" },
                                { label: "Vibe", value: "Adventure" },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 p-4 rounded-xl hover:shadow-md transition"
                                >
                                    <p className="text-sm text-gray-500">
                                        {item.label}
                                    </p>
                                    <p className="font-bold text-lg">
                                        {item.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Description Paragraph */}
                    <div className="mt-10 mb-10">
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Hunza Valley is a breathtaking destination nestled in the
                            Karakoram mountains. Known for its stunning landscapes,
                            rich cultural heritage, and warm hospitality, Hunza offers
                            travelers a perfect blend of adventure and serenity.
                            Whether you're exploring ancient forts or cruising on
                            turquoise lakes, every moment here becomes unforgettable.
                        </p>
                    </div>
                    {/* Top Experiences */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-6">
                            Top Experiences
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Attabad Lake",
                                    desc: "Mesmerizing turquoise waters",
                                    img: "/images/attabad-lake.jpeg",
                                },
                                {
                                    title: "Baltit Fort",
                                    desc: "700 years of history",
                                    img: "/images/balti-fort.jpeg",
                                },
                            ].map((place, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
                                >
                                    <img
                                        src={place.img}
                                        alt={place.title}
                                        className="h-52 w-full object-cover"
                                    />
                                    <div className="p-5">
                                        <h3 className="font-semibold text-lg">
                                            {place.title}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {place.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Itinerary */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-semibold mb-6">
                            5-Day Itinerary
                        </h2>

                        <ul className="space-y-4 text-gray-700">
                            <li><strong>Day 1:</strong> Arrival & Karimabad</li>
                            <li><strong>Day 2:</strong> Ancient Forts</li>
                            <li><strong>Day 3:</strong> Attabad & Passu Cones</li>
                            <li><strong>Day 4:</strong> Hiking & Local Culture</li>
                            <li><strong>Day 5:</strong> Departure</li>
                        </ul>
                    </div>

                </div>

                {/* RIGHT BOOKING CARD */}
                <div className="bg-white p-6 rounded-2xl shadow-xl h-fit md:sticky md:top-24">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        $1,250
                    </h2>

                    <p className="text-sm text-gray-500 mb-6">
                        per person · 5 Days / 4 Nights
                    </p>

                    {/* Updated Button */}
                    <button
                        onClick={() => navigate("/booking")}
                        className="w-full bg-gray-900 text-white py-3 rounded-md mb-4 hover:bg-gray-700 transition duration-300 shadow-md"
                    >
                        Book This Experience
                    </button>

                    <a
                        href="https://wa.me/923001234567?text=Hello%20I%20would%20like%20to%20inquire%20about%20this%20trip."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block text-center bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition"
                    >
                        Inquire Now
                    </a>

                </div>

            </div>
        </div>
    );
};

export default Hunza;
