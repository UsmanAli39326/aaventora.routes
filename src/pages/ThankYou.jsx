import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-backcolor px-6">

      <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-lg">

        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          🎉 Thank You for Booking!
        </h1>

        <p className="text-gray-600 mb-6">
          Your booking request has been received.
          Our team will contact you shortly with further details.
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition"
        >
          Back to Home
        </button>

      </div>

    </div>
  );
};

export default ThankYou;
