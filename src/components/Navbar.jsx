import React from 'react';
import ThemeSwitch from './ThemeSwitch';

function Navbar({ page = 'home', setPage, dark, setDark }) {
  const handleNav = (p) => (e) => {
    e.preventDefault();
    if (typeof setPage === 'function') setPage(p);
  };

  return (
    <nav className="navbar">
      <div className="navbar-center">
        <div className="nav-links">
          <button
            type="button"
            onClick={handleNav('home')}
            className={page === 'home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </button>
          <button
            type="button"
            onClick={handleNav('about')}
            className={page === 'about' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </button>
          <button
            type="button"
            onClick={handleNav('projects')}
            className={page === 'projects' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </button>
        </div>
        <ThemeSwitch dark={dark} setDark={setDark} />
      </div>
    </nav>
  );
}

export default Navbar;
