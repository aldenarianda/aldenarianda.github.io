import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeSwitch from './ThemeSwitch';

function Navbar({ dark, setDark }) {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <div className="nav-links">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
          <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>About Me</Link>
          <Link to="/projects" className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>Projects</Link>
        </div>
        <ThemeSwitch dark={dark} setDark={setDark} />
      </div>
    </nav>
  );
}

export default Navbar;
