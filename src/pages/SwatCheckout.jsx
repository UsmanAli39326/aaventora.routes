import React from "react";
import { useNavigate } from "react-router-dom";

const SkarduCheckout = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-backcolor min-h-screen py-16">

            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

                {/* LEFT SIDE */}
                <div>
                    <h1 className="text-3xl font-bold mb-6 text-black">
                        Swat Valley Checkout
                    </h1>

                    <div className="bg-white p-6 rounded-2xl shadow mb-8">
                        <h2 className="text-xl font-semibold mb-4">
                            Selected Destination
                        </h2>

                        <img
                            src="/images/swat.jpeg"
                            alt="Swat Valley"
                            className="h-48 w-full object-cover rounded-lg mb-4"
                        />

                        <p className="text-gray-600">
                            Swat Valley – 7 Days Premium Adventure Experience
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow">
                        <h2 className="text-xl font-semibold mb-4">
                            Personal Information
                        </h2>

                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full p-3 border rounded-md"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full p-3 border rounded-md"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full p-3 border rounded-md"
                            />
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE SUMMARY */}
                <div className="bg-white p-8 rounded-2xl shadow-lg h-fit">

                    <h2 className="text-xl font-semibold mb-6">
                        Order Summary
                    </h2>

                    <div className="space-y-4 text-gray-600 mb-6">
                        <p><strong>Trip:</strong> Swat Valley</p>
                        <p><strong>Duration:</strong> 7 Days</p>
                        <p><strong>Travelers:</strong> 2 Adults</p>
                    </div>

                    <div className="border-t pt-4 mb-6">
                        <p className="text-gray-600">Total Amount</p>
                        <h3 className="text-2xl font-bold text-black">
                            $3,200 USD
                        </h3>
                    </div>

                    <button
                        onClick={() => navigate("/thank-you")}
                        className="w-full bg-gray-900 text-white mb-3 py-3 rounded-md hover:bg-gray-700 transition"
                    >
                        Confirm Booking
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

export default SkarduCheckout;
