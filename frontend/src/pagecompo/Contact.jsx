// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import '../css/Contact.css';
// import AOS from 'aos';

// export const Contact = () => {
//    useEffect(() => {
//       AOS.init({ duration: 1000 });
//     }, []);

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     alert('Thank you for contacting me!');

//     setFormData({ name: '', email: '', phone: '', message: '' });
//   };

//   return (
//     <div className="contact-container" id='contact-section'>
//        <div className="contact-form-wrapper">
//       <h1>Contact Me</h1>
//       <form onSubmit={handleSubmit} className="contact-form" data-aos="fade-up">
//         <label htmlFor="name">Name</label>
//         <input  type="text"  name="name"  id="Name"  placeholder="Enter Your Name"  value={formData.name}  onChange={handleChange}  required/>

//         <label htmlFor="email">Email</label>
//         <input type="email"  name="email"  id="email"  placeholder="Enter Your Email"   value={formData.email}   onChange={handleChange} required/>

//         <label htmlFor="message">Message</label>
//         <textarea  name="message"  id="message"  rows="4"  placeholder="Write your message here..."  value={formData.message}  onChange={handleChange}   required  ></textarea>

//         <button type="submit">Send Message</button>
//       </form>
//       </div>
//     </div>
//   );
// };




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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting me!');
    setFormData({ name: '', email: '', phone: '', message: '' });
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
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
            <textarea name="message" placeholder="Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit">submit now</button>
          </form>
        </div>
      </div>
    </div>
  );
};
