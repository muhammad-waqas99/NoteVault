import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="nv-navbar">
      <div className="nv-container">
        
        {/* LOGO (Tusker Font) */}
        <Link className="nv-brand" to="/">
          NoteVault
        </Link>

        {/* Mobile Menu Toggler */}
        <button 
          className="nv-toggler" 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="nv-toggler-icon"></span>
          <span className="nv-toggler-icon"></span>
          <span className="nv-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className={`nv-collapse ${isOpen ? "open" : ""}`}>
          <ul className="nv-nav-list">
            <li className="nv-nav-item">
              <Link
                className={`nv-nav-link ${location.pathname === "/" ? "active" : ""}`}
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>

            <li className="nv-nav-item">
              <Link
                className={`nv-nav-link ${location.pathname === "/about" ? "active" : ""}`}
                to="/about"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>

            {/* Auth Buttons / Links */}
            {localStorage.getItem("token") ? (
              <li className="nv-nav-item">
                <button className="nv-btn-logout" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="nv-nav-item">
                  <Link
                    className={`nv-nav-link ${location.pathname === "/login" ? "active" : ""}`}
                    to="/login"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                </li>
                <li className="nv-nav-item">
                  <Link
                    className={`nv-btn-signup`}
                    to="/signup"
                    onClick={() => setIsOpen(false)}
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;