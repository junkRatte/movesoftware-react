import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./js/components/Navbar";
import BlogsPage from "./js/pages/BlogsPage";
import Homepage from "./js/pages/Homepage";
import AboutPage from "./js/pages/AboutPage";
import CareersPage from "./js/pages/CareersPage";
import PortfolioPage from "./js/pages/PortfolioPage";
import PricingPage from "./js/pages/PricingPage";
import StudiesPage from "./js/pages/StudiesPage";

function App() {
  return (
    <div className="layout-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/studies" element={<StudiesPage />} />
      </Routes>
    </div>
  );
}

export default App;
