import React, { useEffect, useState } from 'react';
import '../styles/AboutMe.css';

const AboutMe = ({ animateFrom = 'bottom' }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 30);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`page-container about-page ${
        animateFrom === 'bottom' ? 'about-dropup' : 'about-dropdown'
      }${show ? ' about-animate-in' : ''}`}
    >
      <div className="about-hero">
        <div className="about-photo-wrapper">
          <div className="about-photo-frame">
            <img src="/assets/image1.png" alt="Data" />
          </div>
        </div>
        <div className="about-copy">
          <p className="about-eyebrow">Profile Snapshot</p>
          <h1>About Me</h1>
          <p className="about-description">
            A highly analytical and collaborative 5th-semester Computer Science student specializing in the full data
            lifecycle, from SQL querying and Python data wrangling to insightful Tableau dashboard creation, with a
            strong aspiration to bridge technical insights with strategic business needs as a Business Analyst. I excel
            at data storytelling, translating complex machine learning and data findings into clear, actionable
            recommendations that drive strategic decisions. My technical depth, combined with a passion for defining and
            solving business problems, positions me as a capable problem-solver ready to tackle a wide range of
            challenges.
          </p>
        </div>
      </div>
      <div className="about-skills">
        <h1>SKILLS</h1>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Programming Languages</h3>
            <p className="skill-list">Python, Java, C/C++, C#, SQL, R, JavaScript, HTML/CSS</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 21h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Web Development</h3>
            <p className="skill-list">ASP.NET Core, Laravel, React, Node.js, Tailwind CSS</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M4 6h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Data Science & Analytics</h3>
            <p className="skill-list">Excel, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, Tableau</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M4 7h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Databases</h3>
            <p className="skill-list">SQL Server, PostgreSQL, SQLite</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <h3>Tools & Version Control</h3>
            <p className="skill-list">Git, GitHub, Visual Studio Code</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
