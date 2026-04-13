import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6 pt-40 pb-20">

      <motion.div 
        className="bg-white p-16 rounded-[3rem] shadow-2xl shadow-primary/5 text-center max-w-xl border border-gray-50"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-10">
           <CheckCircle className="text-primary" size={40} />
        </div>

        <h1 className="mb-6 text-text-main">
          Thank You for <span className="italic">Booking!</span>
        </h1>

        <p className="text-text-muted text-body-lg mb-12">
          Your booking request has been received. Our team of travel specialists will contact you shortly via email or phone to finalize your journey.
        </p>

        <motion.button
          onClick={() => navigate("/")}
          className="bg-text-main text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-primary transition-all duration-300 shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Return to Home
        </motion.button>

      </motion.div>

    </div>
  );
};

export default ThankYou;
