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
      responsibilities: [
        'Managed Construction Contracts for Capital Projects to outline objectives, stakeholder responsibilities and modification procedures.',
        'Prepared Bar Bending Schedule & Concrete Quantity from drawing.',
        'Checked scope of work including Architectural, Structural, Plumbing, Electrical, Interior Finishing, Fire Fighting, Lifts, and Landscape.',
        'Performed site inspections and enforced safety responsibilities.',
        'Managed Personal Protective Equipment (PPE) compliance.',
      ],
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
      responsibilities: [
        'Monitored execution of contract work for compliance with design plans and specifications.',
        'Prepared project cost estimates and feasibility analysis.',
        'Assessed operations for safety and environmental compliance.',
        'Liaised with trade contractors and performed site inspections.',
        'Prepared Bar Bending Schedule & Concrete Quantity.',
        'Verified scope of work across disciplines (MEP, structural, etc.).',
      ],
    },
    {
      title: 'AutoCAD Draftsman',
      company: 'Adayar Ananda Bhavan Pvt. Ltd.',
      location: 'Chennai, Tamilnadu, India',
      duration: 'Aug 2014 - Mar 2015',
      responsibilities: [
        'Developed CAD drawings from sketches, instructions, and site visits.',
        'Created CAD models and shop drawings for restaurants and kitchen layouts.',
      ],
    },
    {
      title: 'Site Supervisor',
      company: 'Civil Engineering Contracting',
      location: 'Mayiladuthurai, Tamilnadu, India',
      duration: 'Jun 2013 - Jul 2014',
      responsibilities: [
        'Maintained daily progress reports and material records.',
        'Read blueprints and communicated technical plans to workers.',
        'Coordinated with vendors to ensure project continuity.',
      ],
    },
  ];

  return (
    <div className="experience-section" id="experience-section" data-aos="fade-up">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
            <p><strong>Location:</strong> {exp.location}</p>
            <p><strong>Duration:</strong> {exp.duration}</p>
            {exp.project && <p><strong>Project:</strong> {exp.project}</p>}
            {exp.projects && (
              <div>
                <strong>Projects:</strong>
                <ul>
                  {exp.projects.map((proj, i) => <li key={i}>{proj}</li>)}
                </ul>
              </div>
            )}
            <ul>
              {exp.responsibilities.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
