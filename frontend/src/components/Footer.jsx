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

        <div className='feedback-form'>
            <h3>FeedBack Here </h3>
            <label htmlFor="name">Name :</label>
            <input type="text" name="" id="" placeholder='Enter Your Name'/>
            <label htmlFor="">Email :</label>
            <input type="email" placeholder='Enter Your Email' />
            <label htmlFor="">Write Something :</label>
            <textarea name="" id="" placeholder="Write Something Here ..."></textarea>
        </div>
    </div>
  )
}
