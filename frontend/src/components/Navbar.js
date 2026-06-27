import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/navbar.css'

const Navbar = () => {
  const location = useLocation();

  return (
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">

    <Link className="navbar-brand" to="/">
      NoteVault
    </Link>

    {/* Toggler */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">

        <li className="nav-item">
          <Link
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            to="/"
          >
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
            to="/about"
          >
            About
          </Link>


        </li>
                <li className="nav-item">
          <Link
            className={`nav-link ${location.pathname === "/login" ? "active" : ""}`}
            to="/login"
          >
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${location.pathname === "/signup" ? "active" : ""}`}
            to="/signup"
          >
            Signup
          </Link>
        </li>


      </ul>
    </div>

  </div>
</nav>
  );
};

export default Navbar;