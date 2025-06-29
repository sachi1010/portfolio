import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Projects.css';

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Fetch project data from backend
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_SERVER_APP_URL}/projects`);
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="projects-container" id="project-section">
      <div className="project-container">
        <h1 data-aos="fade-down" className="projects-title">Projects</h1>

    {projects.map((project, idx) => (
          <div key={idx} className="project-section">
            <h2 data-aos="fade-right" className="project-subtitle">
              {project.title}
            </h2>
            <div data-aos="fade-up" className="image-grid">
              {project.images.map((img, index) => (
                <img key={index} src={img} alt={`${project.title} ${index + 1}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
