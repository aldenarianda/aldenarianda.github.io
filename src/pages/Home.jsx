import React, { useEffect, useState } from 'react';
import '../styles/Home.css';

const Home = ({ animateFrom }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 30);
    return () => clearTimeout(t);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/Muhammad_Alden_Arianda_CV.pdf';
    link.download = 'Muhammad_Alden_Arianda_CV.pdf';
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
          <h2>Passionate in Data & Business Analytics</h2>
          <p className="intro-text">
            A passionate data enthusiast specializing in transforming complex data into actionable insights. 
            Currently a Computer Science student at Binus University with expertise in Python, SQL, and Tableau.
          </p>
          <div className="actions-row">
            <div className="actions-left">
              <button className="primary-button" onClick={handleDownloadCV}>
                Download CV
              </button>
            </div>
            <div className="actions-right">
              <div className="contact-icons" aria-hidden={false}>
                <a className="contact-icon" href="tel:+6282311284511" aria-label="Phone" title="Phone">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.99.37 1.95.73 2.85a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 0 6 6l1.23-1.23a2 2 0 0 1 2.11-.45c.9.36 1.86.61 2.85.73A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a className="contact-icon" href="mailto:aldenarianda7@gmail.com" aria-label="Email" title="Email">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6.5h16v11H4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M22 6.5L12 13 2 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </a>
                <a className="contact-icon" href="https://github.com/aldenarianda" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.42-1.35-1.8-1.35-1.8-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.48 11.48 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.9 1.24 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5z" fill="currentColor"/>
                  </svg>
                </a>
                <a className="contact-icon" href="https://www.linkedin.com/in/aldenarianda" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v6h-4v-12h4v1.7c.9-1.3 2.6-1.9 3.9-1.9z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round" fill="none"/>
                    <rect x="2" y="7" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                  </svg>
                </a>
              </div>
            </div>
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
