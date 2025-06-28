import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Experience.css';

export const Experience = () => {

  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });


    fetch('https://portfoliobackend-5nm3.onrender.com/experiences')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch experience data');
        }
        return response.json();
      })
      .then(data => setExperiences(data))
      .catch(error => console.error('Error:', error));
  }, []);


  return (
    <div className="experience-section" id="experience-section" >
      <div className='experience-container' data-aos="fade-up">
        <h1>Experience</h1>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index} data-aos="zoom-in">
              <div className="experience-year">{exp.duration}</div>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="experience-location">{exp.location}</p>
              {exp.project && <p>{exp.project}</p>}
              {exp.projects && (
                <ul className="experience-projects">
                  {exp.projects.map((proj, i) => <li key={i}>{proj}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>

  );
};
