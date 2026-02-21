import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Experiences from "./pages/Experiences";
import TravelGuides from "./pages/TravelGuides";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hunza from "./pages/Hunza";
import Booking from "./pages/Booking";
import ThankYou from "./pages/ThankYou";

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
          <Route path="/booking" element={<Booking />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
