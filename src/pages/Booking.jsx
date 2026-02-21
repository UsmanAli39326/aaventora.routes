import React from "react";
import { useNavigate } from "react-router-dom";

const Booking = () => {
    const navigate = useNavigate(); // ✅ must be inside component

    return (
        <div className="bg-backcolor min-h-screen py-16 fade-in">

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

                {/* LEFT SIDE */}
                <div className="md:col-span-2">

                    <h1 className="text-3xl font-bold mb-4 text-gray-900">
                        Plan Your Trip
                    </h1>

                    <p className="text-gray-600 mb-10">
                        Customize your premium journey across Pakistan’s peaks
                        and heritage. Every itinerary is crafted for safety,
                        comfort and authentic experience.
                    </p>

                    {/* Step Indicator */}
                    <div className="mb-10">
                        <p className="text-gray-900 font-semibold">
                            Step 2: Travel Dates & Group Size
                        </p>
                    </div>

                    {/* Selected Destination */}
                    <div className="mb-8">
                        <h2 className="font-semibold mb-4">
                            1. Selected Destination
                        </h2>

                        <div className="flex gap-4">
                            <div className="bg-white rounded-xl shadow p-3 w-40">
                                <img
                                    src="/images/hero.jpg"
                                    alt="Hunza"
                                    className="h-24 w-full object-cover rounded-md mb-2"
                                />
                                <p className="text-sm font-medium text-center">
                                    Hunza Valley
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Travel Window */}
                    <div className="mb-8">
                        <h2 className="font-semibold mb-4">
                            2. Logistics & Group Size
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                type="date"
                                className="p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
                            />

                            <select className="p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary">
                                <option>7 Days (Standard)</option>
                                <option>5 Days</option>
                                <option>10 Days</option>
                            </select>
                        </div>
                    </div>

                    {/* Group Composition */}
                    <div className="bg-white p-6 rounded-xl shadow mb-8">
                        <h3 className="font-semibold mb-4 text-gray-900">
                            Group Composition
                        </h3>

                        <div className="flex gap-10">
                            <div>
                                <p>Adults</p>
                                <input
                                    type="number"
                                    min="1"
                                    defaultValue="2"
                                    className="mt-2 w-20 p-2 border rounded-md"
                                />
                            </div>

                            <div>
                                <p>Children</p>
                                <input
                                    type="number"
                                    min="0"
                                    defaultValue="0"
                                    className="mt-2 w-20 p-2 border rounded-md"
                                />
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT SIDE SUMMARY */}
                <div className="bg-white rounded-2xl shadow-xl p-6 h-fit md:sticky md:top-24">

                    <h2 className="text-lg font-semibold mb-4 text-gray-900">
                        Trip Summary
                    </h2>

                    <div className="text-sm space-y-3 text-gray-600 mb-6">
                        <p><strong>Route:</strong> Hunza Valley</p>
                        <p><strong>Duration:</strong> 7 Days</p>
                        <p><strong>Travelers:</strong> 2 Adults</p>
                    </div>

                    <div className="border-t pt-4 mb-6">
                        <p className="text-gray-600">Estimated Investment</p>
                        <h3 className="text-2xl font-bold text-gray-900">
                            $2,900 USD
                        </h3>
                    </div>

                    {/* ✅ Confirm Button Redirect */}
                    <button
                        onClick={() => navigate("/thank-you")}
                        className="w-full bg-gray-900 text-white py-3 mb-4 rounded-md hover:bg-gray-700 transition"
                    >
                        Confirm & Book
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Booking;
