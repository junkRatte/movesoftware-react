import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./js/components/Navbar";
import Footer from "./js/components/Footer";
import BlogsPage from "./js/pages/Blogs/BlogsPage";
import Homepage from "./js/pages/Home/HomePage";
import AboutPage from "./js/pages/About/AboutPage";
import CareersPage from "./js/pages/Careers/CareersPage";
import PortfolioPage from "./js/pages/Portfolio/PortfolioPage";
import PricingPage from "./js/pages/Pricing/PricingPage";
import StudiesPage from "./js/pages/Studies/StudiesPage";

function App() {
  return (
    <div className="layout-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/studies" element={<StudiesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
