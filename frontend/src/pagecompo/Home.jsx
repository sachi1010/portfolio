import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Home.css';
import { TypeAnimation } from 'react-type-animation';
import About from './About';
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
    <>
      <div className='profile-content' id='home-section'>
        <div className='profile-right' data-aos="zoom-in">
  <div className="hero-container">
      <h2 id="hello">HELLO !!</h2>
      <h1 id="name">
        I AM MANI<span>KANDAN</span>
      </h1>
      <h2 id="edu">
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
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h2>
    </div>
          <div className='social-links' data-aos="fade-up">
            <a href=""><i className="bi bi-github"></i></a>
            <a href=""><i className="bi bi-whatsapp"></i></a>
            <a href=""><i className="bi bi-linkedin"></i></a>
            <a href=""><i className="bi bi-facebook"></i></a>
          </div>
          <div className='profile-button' data-aos="zoom-in">
            <button className='contact' onClick={goToContactPage}>Contact Me!</button>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className='resume'>
              Resume <i className="bi bi-download"></i>
            </a>
          </div>
        </div>
        
      </div>

      <About />
      <Skills />
      <Experience/>
      <Contact />
      <Projects />
    </>
  );
};
