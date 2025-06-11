import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Home.css';
import { TypeAnimation } from 'react-type-animation';
import { About } from './About';
import Skills from './Skills';
import { Contact } from './Contact';
import { Projects } from './Projects';
import { Experience } from './Experience';

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const goToContactPage = () => {
    navigate('/contact');
  };

  return (
    <section >
      <div className="hero-section">
        <div className="hero-left">
          <h3>Hello! I'm</h3>
          <h1>Manikandan</h1>
          <h2 className="hero-subtitle">
            I'm{' '}
            <TypeAnimation
              sequence={[
                'a Civil Engineer',
                2000,
                'an AutoCAD Designer',
                2000,
                'a Freelancer',
                2000,
                'a Site Supervisor',
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <p className="hero-desc">
            Civil Engineer with a strong foundation in structural analysis and site planning, specializing in AutoCAD and modern project visualization tools. Passionate about delivering efficient, sustainable, and cost-effective infrastructure solutions through precise design and collaborative development.
          </p>


          <div className="hero-buttons">
            <button className="custom-btn btn-6" onClick={goToContactPage}><span>Contact Me</span></button>
            <a href="http://localhost:5000/resume.pdf" download className=" custom-btn btn-6">
              Get Resume <i className="bi bi-download"></i>
            </a>

          </div>
        </div>

        <div className="hero-right">
          <img src="http://localhost:5000/images/myimg.png" alt="profile" className="hero-image" />
          <div className="social-icons">
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-whatsapp"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Projects />
    </section>

  );
};


