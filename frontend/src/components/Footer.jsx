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
        <a href="#experience-section">Experience</a>
        <a href="#project-section">Projects</a>
        <a href="#contact-section">Contact</a>
      </div>

      <div className='social-links'>
        <h3>SocialMedia Links</h3>
        <p><i class="bi bi-telephone-fill"></i>Phone : 91-978 817 6043 </p>
        <p><i class="bi bi-envelope-fill"></i>Email : ermanik001@gmail.com </p>
        <a href=""><i class="bi bi-github"></i></a>
        <a href=""><i class="bi bi-whatsapp"></i></a>
        <a href=""><i class="bi bi-linkedin"></i></a>
        <a href=""><i class="bi bi-facebook"></i></a>
      </div>

      <div className="hire-me-section">
        <h3>Let's Work Together</h3>
        <p>
          I'm open to freelance projects, internships, <br/> and full-time roles.
          If you like what<br/> you see, don't hesitate to reach out!
        </p>
       <a
  href="mailto:ermanik001@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Manikandan,%0AI'd%20like%20to%20connect%20with%20you%20regarding..."
  className="hire-me-btn"
  target="_blank"
  rel="noopener noreferrer"
>
  Hire Me
</a>

      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Manikandan | All Rights Reserved.</p>
      </div>


    </div>
  )
}
