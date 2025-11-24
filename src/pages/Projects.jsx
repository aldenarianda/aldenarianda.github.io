import React, { useState, useEffect } from 'react';
import '../styles/Project.css';

const projectsData = [
  {
    id: 1,
    title: 'Video Streaming Web Application',
    description: 'Developed a full-stack video streaming web application using ASP.NET Core, designing both the user-facing components and the backend server logic. Engineered the core functionalities for an admin panel, enabling content management features for adding, updating, and deleting video titles from the library. Implemented the backend framework for a user panel, including data models for user profiles, authentication logic, and subscription management. Designed the SQL Server database schema from scratch using Entity Framework to efficiently manage all platform data and relationships.',
    tools: ['.NET', 'C#', 'ASP.NET Core', 'SQL Server'],
    images: [
      '/assets/project1_1.jpeg', 
      '/assets/project1_2.jpeg', // Pastikan file ini ada
      '/assets/project1_3.jpeg'  // Pastikan file ini ada
    ],
  },
  {
    id: 2,
    title: 'Corporate Strategy and Performance Analysis',
    description: 'Executed a comprehensive analysis of a public Kaggle dataset, beginning with meticulous data wrangling and exploratory data analysis (EDA). Developed an interactive dashboard in Tableau to visualize key performance indicators (KPIs) and present initial findings on customer behavior and sales trends. Translated complex datasets into actionable insights by creating compelling data visualizations that highlighted previously unseen patterns in customer behavior. Synthesized the analysis into a clear narrative, providing strategic recommendations and data-driven stories to stakeholders based on the dashboard findings.',
    tools: ['Python', 'Tableau', 'Data Wrangling', 'EDA'],
    images: [
      '/assets/project2_1.png',
      '/assets/project2_2.png',
    ],
  },
];

// --- KOMPONEN CAROUSEL DENGAN EFEK SLIDE ---
const ProjectCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); 

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      {/* LOGIKA SLIDE:
        Container 'track' digeser ke kiri sejauh (index * 100%).
        Misal index 1, geser -100% (tampil gambar ke-2).
      */}
      <div 
        className="carousel-track" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img 
            key={index}
            src={img} 
            alt={`${title} - Slide ${index + 1}`} 
            className="carousel-image"
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button className="carousel-btn prev-btn" onClick={prevSlide} aria-label="Previous">
            &#10094;
          </button>
          <button className="carousel-btn next-btn" onClick={nextSlide} aria-label="Next">
            &#10095;
          </button>
          
          <div className="carousel-indicators">
            {images.map((_, idx) => (
              <span 
                key={idx} 
                // Bisa diklik untuk lompat ke slide tertentu
                onClick={() => setCurrentIndex(idx)} 
                className={`indicator-dot ${idx === currentIndex ? 'active' : ''}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// --- KOMPONEN UTAMA ---
const Projects = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 30);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`page-container projects-page project-dropup ${
        show ? 'project-animate-in' : ''
      }`}
    >
      <div className="projects-header">
        <p className="projects-eyebrow">MY WORK</p>
        <h1>Projects</h1>
      </div>

      <div className="projects-list">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-content">
              <h3>{project.title}</h3>
              <div className="project-divider"></div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech-stack">
                {project.tools.map((tool, index) => (
                  <span key={index} className="tech-tag">{tool}</span>
                ))}
              </div>
            </div>

            <div className="project-image-wrapper">
              <ProjectCarousel images={project.images} title={project.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;