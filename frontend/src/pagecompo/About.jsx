


import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/About.css';


export const About = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000 });

      
      fetch(`${import.meta.env.VITE_SERVER_APP_URL}/about`)
        .then(res => res.json())
        .then(info => setData(info))
        .catch(err => console.error('Error fetching about data:', err));
    }, []);

  return (
    <section className="about-section" id='About-section'>
      <div className="about-container">
        <div className="about-text">
          <h3 className="about-subtitle" data-aos="fade-up">About</h3>
          <h1 className="about-title" data-aos="zoom-in">{data.title}</h1>
          <p className="about-description" data-aos="zoom-in">{data.description}</p>
          <a href={`${import.meta.env.VITE_SERVER_APP_URL}/resume.pdf`} download className="download-btn">Download CV ⬇</a>
        </div>

        <div className="about-image-wrapper" data-aos="zoom-in">
          <div className="image-border"></div>
          <img src={`${import.meta.env.VITE_SERVER_APP_URL}/images/myimg.png`}alt="mani" className="about-image" height="300px" />
        </div>
      </div>
    </section>
  );
  
};
