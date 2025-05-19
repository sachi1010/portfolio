import React from 'react';
import '../css/Skills.css';


const Skills = () => {
  return (
    <div className="skills-section" id='skill-section'>
      <h1 className="section-title">Skills</h1>
      <h2 className="subtitle">Software Skills</h2>
      <div className="skill-list">
        <div className="skill-card">
          <img src="./images/autocad.png" alt="" />
          <h3>AutoCAD</h3>
        </div>
        <div className="skill-card">
          <img src="./images/revit.png" alt="" />
          <h3>Revit</h3>
        </div>
        <div className="skill-card">
          <img src="./images/ps.png" alt="" />
          <h3>Photoshop</h3>
        </div>
       
      </div>
    </div>
  );
};

export default Skills;

