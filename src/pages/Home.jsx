import React, { useEffect, useState } from 'react';
import '../styles/Home.css';

const Home = ({ animateFrom }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 30);
    return () => clearTimeout(t);
  }, []);

  const handleDownloadCV = () => {
    // Downloads resume from public/assets/resume.pdf — place your resume at public/assets/resume.pdf
    const link = document.createElement('a');
    link.href = '/assets/Resume_Muhammad_Alden_Arianda.pdf';
    link.download = 'Resume_Muhammad_Alden_Arianda.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`page-container home-page ${animateFrom === 'bottom' ? 'home-dropup' : 'home-dropdown'}${show ? ' home-dropup-animate' : ''}`}
    >
      <div className="home-content">
        <div className="content-left">
          <h1>Hi, I'm <span className="highlight">Muhammad Alden Arianda</span></h1>
          <h2>Data Analyst & Data Scientist</h2>
          <p className="intro-text">
            A passionate data enthusiast specializing in transforming complex data into actionable insights. 
            Currently a Computer Science student at Binus University with expertise in Python, SQL, and Tableau.
          </p>
          <div className="button-group">
            <button className="primary-button" onClick={handleDownloadCV}>
              Download CV
            </button>
            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>
        </div>
        <div className="content-right">
          <div className="profile-image">
            {/* Foto harus disimpan di public/assets/profile-photo.jpeg */}
            <img src="/assets/profile-photo.jpeg" alt="Alden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
