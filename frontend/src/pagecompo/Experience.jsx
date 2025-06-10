import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Experience.css';

export const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000});
  }, []);

  const experiences = [
    {
      title: 'Civil Engineer',
      company: 'Safety Way Contracting',
      location: 'Fujairah, United Arab Emirates',
      duration: 'Jul 2018 - Oct 2020',
      project: 'Residential Villa and Commercial Store Buildings - Al Faseel, Fujairah, UAE',
     
    },
    {
      title: 'Site Engineer',
      company: 'Sri Sreenivasa Construction',
      location: 'Hyderabad, Andhra Pradesh, India',
      duration: 'Apr 2015 - May 2018',
      projects: [
        'Apartment Building (Basement + 2 Floors Commercial + 8 Floors Residential) - Camp Road, Tambaram, Chennai',
        'Apartment Building (G+2 with 7 Blocks) - West Tambaram, Chennai',
        'Apartment Building (G+4 with 3 Blocks) - Vadapalani, Chennai',
      ],
      
    },
    {
      title: 'AutoCAD Draftsman',
      company: 'Adayar Ananda Bhavan Pvt. Ltd.',
      location: 'Chennai, Tamilnadu, India',
      duration: 'Aug 2014 - Mar 2015',
     
    },
    {
      title: 'Site Supervisor',
      company: 'Civil Engineering Contracting',
      location: 'Mayiladuthurai, Tamilnadu, India',
      duration: 'Jun 2013 - Jul 2014',
     
    },
  ];

  return (
    <div className="experience-section" id="experience-section" >
      <div className='experience-container' data-aos="fade-up">
      <h1>Experience</h1>
      <div className="experience-grid">
  {experiences.map((exp, index) => (
    <div className="experience-card" key={index} data-aos="zoom-in" >
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
