import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Experiences from "./pages/Experiences";
import TravelGuides from "./pages/TravelGuides";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hunza from "./pages/Hunza";
import ThankYou from "./pages/ThankYou";
import HunzaCheckout from "./pages/HunzaCheckout";
import SkarduCheckout from "./pages/SkarduCheckout";
import SwatCheckout from "./pages/SwatCheckout";
import MeadowsCheckout from "./pages/MeadowCheckout";
import MurreeCheckout from "./pages/MurreeCheckout";
import KashmirCheckout from "./pages/KashmirCheckout";


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/travel-guides" element={<TravelGuides />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hunza" element={<Hunza />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/checkout-hunza" element={<HunzaCheckout />} />
          <Route path="/checkout-skardu" element={<SkarduCheckout />} />
          <Route path="/checkout-swat" element={<SwatCheckout />} />
          <Route path="/checkout-meadow" element={<MeadowsCheckout />} />
          <Route path="/checkout-murree" element={<MurreeCheckout />} />
          <Route path="/checkout-kashmir" element={<KashmirCheckout />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
