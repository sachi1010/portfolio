import { useEffect } from 'react';
import AOS from 'aos';
import'../css/Projects.css'

export const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000,  }); 
  }, []);

  return (
    <div className="projects-container " id='project-section'>
      <div className='project-container'>

    
      <h1 data-aos="fade-down" className="projects-title ">
        Projects
      </h1>

      <div className="project-section">
        <h2 data-aos="fade-right" className="project-subtitle ">
          Autocad 2d Map
        </h2>
        <div data-aos="fade-up" className="image-grid ">
          <img src="./images/autocad/2d1.webp" alt="2D Map 1" />
          <img src="./images/autocad/2d3.png" alt="2D Map 3" />
          <img src="./images/autocad/1.webp" alt="2D Map 4" />
          <img src="./images/autocad/2d4.jpg" alt="" />
        </div>
      </div>

      <div>
        <h2 data-aos="fade-right" >
          Front Elevation Plans
        </h2>
        <div data-aos="fade-up" className="front-elevation-grid ">
          <img src="./images/autocad/f1.jpg" alt="Front 1"  />
          <img src="./images/autocad/f2.jpg" alt="Front 2"  />
          <img src="./images/autocad/f3.jpg" alt="Front 3"  />
          <img src="./images/autocad/f4.webp" alt="Front 4"  />
        </div>
      </div>

      <div>
        <h3 data-aos="fade-right" >
          3D Glimpse
        </h3>
        <div data-aos="fade-up" className="glimpse-grid ">
          <img src="./images/autocad/3d1.jpg" alt="3D Glimpse 1"  />
          <img src="./images/autocad/3d2.jpg" alt="3D Glimpse 2"  />
          <img src="./images/autocad/3d3.jpg" alt="3D Glimpse 3"  />
          <img src="./images/autocad/3d4.jpg" alt="3D Glimpse 4"  />
          <img src="./images/autocad/3d5.jpg" alt="3D Glimpse 5"  />
          <img src="./images/autocad/3d6.jpg" alt="3D Glimpse 6" />
        </div>
      </div>
    </div>
      </div>
  );
};
