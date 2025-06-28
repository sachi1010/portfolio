import React, { useEffect, useState } from 'react';
import '../css/Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://portfoliobackend-5nm3.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Thank you for contacting me!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="contact-section" id="contact-section">
      <div className='contact-container'>
        <div className="left" data-aos="fade-right">
          <h1>Planning <span>and</span><br />Execution</h1>
          <p>
            I am a dedicated civil engineer focused on delivering resilient and efficient infrastructure solutions. With expertise in structural design, project management, and site supervision, I bring engineering concepts to life with quality and integrity.
          </p>
        </div>

        <div className="right" data-aos="fade-left">
          <h2>GET TOUCH ME?</h2>
          <p>
            For your car we will do everything advice design in us repairs and maintenance. We are the some preferred.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">submit now</button>
          </form>
        </div>
      </div>
    </div>
  );
};
