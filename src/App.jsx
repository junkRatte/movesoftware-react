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
import Login from "./js/components/Login";
import Register from "./js/components/Register";
import AdminLogin from "./js/pages/Admin/AdminLogin";
import AdminDashboard from "./js/pages/Admin/AdminDashboard";
import CareersPost from "./js/pages/Careers/CareersPost";
import ScrollPositionWrapper from "./js/components/ScrollPositionWrapper";
import StudiesPost from "./js/pages/Studies/StudiesPost";

function App() {
  const location = useLocation();
  const hideFooterOnPaths = [
    "/register",
    "/login",
    "/admin",
    "/admin-dashboard",
  ];
  const hideNavbarOnPaths = ["/admin", "/admin-dashboard"];

  return (
    <div className="layout-container">
      {hideNavbarOnPaths.includes(location.pathname) ? null : <Navbar />}
      <main>
        <ScrollPositionWrapper>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/careers/:title" exact element={<CareersPost />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/studies" element={<StudiesPage />} />
            <Route path="/studies/:title" exact element={<StudiesPost />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Routes>
        </ScrollPositionWrapper>
      </main>
      {hideFooterOnPaths.includes(location.pathname) ? null : <Footer />}
    </div>
  );
}

export default App;
