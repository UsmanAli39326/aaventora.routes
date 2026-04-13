import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { pageTransition } from "../utils/animation-variants";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <motion.div
        className="min-h-screen"
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Outlet />
      </motion.div>
      <Footer />
    </>
  );
};

export default MainLayout;
