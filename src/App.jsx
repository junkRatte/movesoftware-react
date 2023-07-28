import { Routes, Route, useLocation } from "react-router-dom";
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
import LoginPage from "./js/pages/UserAuth/LoginPage";
import RegisterPage from "./js/pages/UserAuth/RegisterPage";

function App() {
  const location = useLocation();
  const hideFooterOnPaths = ["/register", "/login"];

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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
      {hideFooterOnPaths.includes(location.pathname) ? null : <Footer />}
    </div>
  );
}

export default App;
