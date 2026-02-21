import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const guides = [
    {
        name: "Ali Khan",
        desc: "Expert mountain guide with 8+ years of trekking experience across northern Pakistan.",
        img: "/images/face.jpeg",
    },
    {
        name: "Sara Ahmed",
        desc: "Cultural storyteller passionate about heritage and local traditions.",
        img: "/images/face.jpeg",
    },
    {
        name: "Usman Tariq",
        desc: "Adventure specialist focused on hiking and high-altitude tours.",
        img: "/images/face.jpeg",
    },
    {
        name: "Hassan Raza",
        desc: "Wildlife and nature expert guiding eco-tourism experiences.",
        img: "/images/face.jpeg",
    },
    {
        name: "Fatima Noor",
        desc: "Hospitality expert ensuring comfort and memorable journeys.",
        img: "/images/face.jpeg",
    },
];

const Experiences = () => {
    return (
        <div className="bg-backcolor">

            {/* HERO SECTION */}
            <div
                className="h-[60vh] bg-cover bg-center relative flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/hero.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative text-center text-white px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Our Story
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg">
                        Bridging the gap between soul and soil through meaningful travel experiences.
                    </p>
                </div>
            </div>

            {/* OUR STORY SECTION */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center fade-in">

                <div>
                    <h2 className="text-3xl font-bold mb-6 text-black">
                        Our Story
                    </h2>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                        From a shared vision in 2015 to a movement that connects travelers
                        and untamed paths, Tourist Pakistan was born to redefine travel.
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                        We started as a group of friends wanting to show the real soul of
                        the north — from valleys and historic forts to meaningful local encounters.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <img
                        src="/images/story3.jpeg"
                        alt="Story 1"
                        className="rounded-xl h-60 w-full object-cover"
                    />
                    <img
                        src="/images/story2.jpeg"
                        alt="Story 2"
                        className="rounded-xl h-60 w-full object-cover"
                    />
                    <img
                        src="/images/story1.jpeg"
                        alt="Story 3"
                        className="rounded-xl h-60 w-full object-cover col-span-2"
                    />
                </div>
            </div>

            {/* CORE PILLARS SECTION */}
            <div className="bg-gray-900 text-white py-16 fade-in">
                <div className="max-w-6xl mx-auto px-6 text-center">

                    <h2 className="text-3xl font-bold mb-12">
                        Our Core Pillars
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">

                        <div className="bg-gray-800 p-8 rounded-xl">
                            <h3 className="text-xl font-semibold mb-4">Peace</h3>
                            <p className="text-gray-300 text-sm">
                                We believe in journeys that promote calm, connection and personal growth.
                            </p>
                        </div>

                        <div className="bg-gray-800 p-8 rounded-xl">
                            <h3 className="text-xl font-semibold mb-4">Adventure</h3>
                            <p className="text-gray-300 text-sm">
                                Authentic experiences designed to inspire exploration and courage.
                            </p>
                        </div>

                        <div className="bg-gray-800 p-8 rounded-xl">
                            <h3 className="text-xl font-semibold mb-4">Culture</h3>
                            <p className="text-gray-300 text-sm">
                                We connect travelers with traditions, heritage and local communities.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* MEET YOUR GUIDES */}
            <div className="max-w-7xl mx-auto px-6 py-16 fade-in">
                <MeetGuides />
            </div>

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
            <h2 className="text-3xl font-bold mb-10 text-center">
                Meet Your Guides
            </h2>

            <div className="relative">

                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
                >
                    <ChevronLeft />
                </button>

                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${current * 33.33}%)` }}
                    >
                        {guides.map((guide, index) => (
                            <div key={index} className="min-w-[33.33%] px-3">
                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                    <img
                                        src={guide.img}
                                        alt={guide.name}
                                        className="h-56 w-full object-cover"
                                    />
                                    <div className="p-5">
                                        <h3 className="font-semibold text-lg mb-2">
                                            {guide.name}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {guide.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
                >
                    <ChevronRight />
                </button>

            </div>
        </>
    );
};

export default Experiences;
