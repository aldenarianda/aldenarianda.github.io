import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import SplashScreen from './components/SplashScreen';
import './App.css';

function App() {
  const [dark, setDark] = useState(false);
  const [splashVisible, setSplashVisible] = useState(true);
  const [showMain, setShowMain] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    const splashTimer = setTimeout(() => setSplashVisible(false), 3550);
    const mainTimer = setTimeout(() => setShowMain(true), 3300); // delay sedikit setelah splash hilang
    const navbarTimer = setTimeout(() => setShowNavbar(true), 3400); // navbar muncul sedikit setelah main
    return () => { clearTimeout(splashTimer); clearTimeout(mainTimer); clearTimeout(navbarTimer); };
  }, []);

  return (
    <>
      <SplashScreen visible={splashVisible} />
      {showMain && (
        <Router>
          <div className={`app-container${dark ? ' dark' : ''}`}>
            <div className={`navbar-animate${showNavbar ? ' navbar-animate-in' : ''}`}>
              <Navbar dark={dark} setDark={setDark} />
            </div>
            <main className="page-container">
              <Routes>
                <Route path="/" element={<Home animateFrom="bottom" />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </main>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
