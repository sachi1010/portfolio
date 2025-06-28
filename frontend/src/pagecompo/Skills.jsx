import React, { useEffect,useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Skills.css';

const Skills = () => {
    const [skills, setSkills] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

     fetch('https://portfoliobackend-5nm3.onrender.com/skills')
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(err => console.error('Error fetching skills:', err));

  }, []);

  return (
    <div className="skills-section" id="skill-section">
      <div className='skill-container'>
      <h1 className="section-title" data-aos="fade-down">Skills</h1>
      <h2 className="subtitle" data-aos="fade-up">Software Skills</h2>
      <div className="skill-list">
         {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={skill.name}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img src={skill.image} alt={skill.name} />
              <h3>{skill.name}</h3>
            </div>
          ))}
      </div>
      </div> 
    </div>
  );
};

export default Skills;
