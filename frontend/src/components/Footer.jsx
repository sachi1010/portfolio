import React from 'react'
import '../css/Footer.css'
export const Footer = () => {
  return (
    <div className="footer-content">

      <div className='quick-links'>
        <h3>Quick Links</h3>
        <a href="#home-section">Home</a>
        <a href="#About-section">About</a>
        <a href="#skill-section">Skills</a>
        <a href="">Experience</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
      </div>

      <div className='social-links'>
        <h3>SocialMedia Links</h3>
        <p>Phone : </p>
        <p>Email : </p>
        <a href=""><i class="bi bi-github"></i></a>
        <a href=""><i class="bi bi-whatsapp"></i></a>
        <a href=""><i class="bi bi-linkedin"></i></a>
        <a href=""><i class="bi bi-facebook"></i></a>
      </div>

      <div className="hire-me-section">
        <h3>Let’s Work Together</h3>
        <p>
          I'm open to freelance projects, internships, <br/> and full-time roles.
          If you like what<br/> you see, don’t hesitate to reach out!
        </p>
       <a href="mailto:sachisachi8567@gmail.com" className="hire-me-btn">Hire Me</a>
      </div>

    </div>
  )
}
