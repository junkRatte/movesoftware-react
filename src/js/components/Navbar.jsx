import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/move-logo.svg";
import { useState, useEffect } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth } from "../../firebaseConfig";
import { onLogout } from "../api/AuthApi";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [showPages, setShowPages] = useState(false);
  const [user, setUser] = useState(null);
  let navigate = useNavigate();

  const handleHover = () => {
    setShowPages(true);
  };

  const handleLeave = () => {
    setShowPages(false);
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleLogout = async () => {
    try {
      let res = await onLogout();
      localStorage.removeItem("userEmail", res.user.email);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    const logout = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      logout();
    };
  }, []);

  return (
    <header className="content-container">
      <nav className="navbar">
        <div className="navbar__row">
          <NavLink to="/">
            <img src={logo} />
          </NavLink>
          <div
            className={`navbar__icon ${openMenu ? "navbar__icon--open" : ""}`}
            onClick={toggleMenu}
          >
            <span className="navbar__icon--one"></span>
            <span className="navbar__icon--two"></span>
            <span className="navbar__icon--three"></span>
          </div>
        </div>
        <div className={`navbar__row ${openMenu ? "open-menu" : "close-menu"}`}>
          <div className="navbar__row--links">
            {isMobile ? (
              <ul>
                <li>
                  <NavLink onClick={toggleMenu} to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={toggleMenu} to="/about">
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={toggleMenu} to="/careers">
                    Careers
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={toggleMenu} to="/studies">
                    Studies
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={toggleMenu} to="/pricing">
                    Pricing
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={toggleMenu} to="/blogs">
                    Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={toggleMenu} to="/portfolio">
                    Portfolio
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul onMouseLeave={handleLeave}>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li onMouseEnter={handleHover}>
                  Pages
                  <FontAwesomeIcon icon={faAngleDown} />
                  {showPages && (
                    <ul className="navbar-dropdown">
                      <li>
                        <NavLink to="/about">About us</NavLink>
                      </li>
                      <li>
                        <NavLink to="/careers">Careers</NavLink>
                      </li>
                      <li>
                        <NavLink to="/studies">Studies</NavLink>
                      </li>
                      <li>
                        <NavLink to="/pricing">Pricing</NavLink>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <NavLink to="/blogs">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className={`navbar__row ${openMenu ? "open-menu" : "close-menu"}`}>
          {!user ? (
            <NavLink to="/register">
              <button className="primary-btn">Get Started</button>
            </NavLink>
          ) : (
            <NavLink to="/login" onClick={handleLogout}>
              <button className="primary-btn">Logout</button>
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
