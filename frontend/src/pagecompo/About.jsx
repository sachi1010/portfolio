
import React from 'react';
import '../css/About.css';
import { useEffect } from 'react';
import AOS from 'aos';

export const About = () => {
   
     useEffect(() => {
       AOS.init({ duration: 1000 });
    }, []);

  return (
    <section className="about-section" id='About-section'>
      <div className="about-container">
        
        {/* Left Text Section */}
        <div className="about-text">
          <h3 className="about-subtitle" data-aos="fade-up">About Me</h3>
          <h1 className="about-title" data-aos="zoom-in">
  Building the Future with Smart, Sustainable Structural Solutions
</h1>

          <p className="about-description" data-aos="zoom-in">
          
                             I am a passionate Civil Engineer with expertise in structural analysis and design.
                             With several years of experience in planning, drafting, and managing construction projects,
                             I specialize in delivering safe and efficient structural solutions. My focus lies in utilizing
                             modern software tools and sustainable practices to create long-lasting infrastructures.
                         
          </p>
          <a href="./resume.pdf" download className="download-btn">
            Download CV ⬇
          </a>
        </div>

        {/* Right Image Section */}
        <div className="about-image-wrapper" data-aos="zoom-in">
          <div className="image-border"></div>
          <img
            src="./images/myimg.png"
            alt="Sachithananthan"
            className="about-image"
            height='300px'
          />
         
        </div>

      </div>
    </section>
  );
};
