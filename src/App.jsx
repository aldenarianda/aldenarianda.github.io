import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import SplashScreen from './components/SplashScreen';
import './App.css';

function App() {
  // Initialize theme: prefer saved user preference, otherwise system preference
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark') return true;
      if (saved === 'light') return false;
    } catch (e) {
      // ignore localStorage errors
    }
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  // whether user explicitly chose theme (saved in localStorage)
  const [userSelectedTheme, setUserSelectedTheme] = useState(() => {
    try {
      return !!localStorage.getItem('theme');
    } catch (e) {
      return false;
    }
  });
  const [splashVisible, setSplashVisible] = useState(true);
  const [showMain, setShowMain] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  // page state for SPA-style navigation (keep URL at root)
  const [page, setPage] = useState(() => sessionStorage.getItem('page') || 'home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  // wrapper so ThemeSwitch (which calls setDark(updater)) still works
  const setDarkWrapper = (updater) => {
    setDark(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      try {
        localStorage.setItem('theme', next ? 'dark' : 'light');
      } catch (e) {
        // ignore
      }
      setUserSelectedTheme(true);
      return next;
    });
  };

  // listen to system theme changes only if user hasn't chosen a theme
  useEffect(() => {
    if (userSelectedTheme) return;
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => setDark(!!e.matches);
    if (mq.addEventListener) mq.addEventListener('change', handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler);
      else mq.removeListener(handler);
    };
  }, [userSelectedTheme]);

  useEffect(() => {
    const splashTimer = setTimeout(() => setSplashVisible(false), 3550);
    const mainTimer = setTimeout(() => setShowMain(true), 3300); // delay sedikit setelah splash hilang
    const navbarTimer = setTimeout(() => setShowNavbar(true), 3400); // navbar muncul sedikit setelah main
    return () => { clearTimeout(splashTimer); clearTimeout(mainTimer); clearTimeout(navbarTimer); };
  }, []);

  // persist current page so refresh keeps the last-opened page (URL remains root)
  useEffect(() => {
    try {
      sessionStorage.setItem('page', page);
    } catch (e) {
      // ignore sessionStorage errors
    }
  }, [page]);

  return (
    <>
      <SplashScreen visible={splashVisible} />
      {showMain && (
        <div className={`app-container${dark ? ' dark' : ''}`}>
          <div className={`navbar-animate${showNavbar ? ' navbar-animate-in' : ''}`}>
            <Navbar page={page} setPage={setPage} dark={dark} setDark={setDarkWrapper} />
          </div>
          <main className="page-container">
            {page === 'home' && <Home animateFrom="bottom" />}
            {page === 'about' && <AboutMe />}
            {page === 'projects' && <Projects />}
          </main>
        </div>
      )}
    </>
  );
}

export default App;
