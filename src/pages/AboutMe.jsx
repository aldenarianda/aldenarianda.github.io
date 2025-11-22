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
    </section>
  );
};

export default AboutMe;
