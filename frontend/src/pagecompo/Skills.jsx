import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Skills.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="skills-section" id="skill-section">
      <div className='skill-container'>
      <h1 className="section-title" data-aos="fade-down">Skills</h1>
      <h2 className="subtitle" data-aos="fade-up">Software Skills</h2>
      <div className="skill-list">
        <div className="skill-card" data-aos="zoom-in">
          <img src="./images/autocad.png" alt="" />
          <h3>AutoCAD</h3>
        </div>
        <div className="skill-card" data-aos="zoom-in" data-aos-delay="100">
          <img src="./images/revit.png" alt="" />
          <h3>Revit</h3>
        </div>
        <div className="skill-card" data-aos="zoom-in" data-aos-delay="200">
          <img src="./images/ps.png" alt="" />
          <h3>Photoshop</h3>
        </div>
        <div className="skill-card" data-aos="zoom-in" data-aos-delay="300">
          <img src="./images/office.png" alt="" />
          <h3>Ms Office</h3>
        </div>
        <div className="skill-card" data-aos="zoom-in" data-aos-delay="300">
          <img src="./images/3d.png" alt="" />
          <h3>3ds Max</h3>
        </div>
        <div className="skill-card" data-aos="zoom-in" data-aos-delay="300">
          <img src="./images/p6.png" alt="" />
          <h3>Primavera</h3>
        </div>
        <div className="skill-card" data-aos="zoom-in" data-aos-delay="300">
          <img src="./images/staad.png" alt="" />
          <h3>Staad Pro</h3>
        </div>
        <div className="skill-card" data-aos="zoom-in" data-aos-delay="300">
          <img src="./images/sketch.png" alt="" />
          <h3>Sketch Up</h3>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Skills;
