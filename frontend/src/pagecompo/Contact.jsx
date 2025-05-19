
import React, { useState } from 'react';
import '../css/Contact.css';

export const Contact = () => {
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
    console.log('Form submitted:', formData);
    alert('Thank you for contacting me!');
   
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact-container">
       <div className="contact-form-wrapper">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name</label>
        <input  type="text"  name="name"  id="Name"  placeholder="Enter Your Name"  value={formData.name}  onChange={handleChange}  required/>

        <label htmlFor="email">Email</label>
        <input type="email"  name="email"  id="email"  placeholder="Enter Your Email"   value={formData.email}   onChange={handleChange} required/>


        <label htmlFor="message">Message</label>
        <textarea  name="message"  id="message"  rows="4"  placeholder="Write your message here..."  value={formData.message}  onChange={handleChange}   required  ></textarea>

        <button type="submit">Send Message</button>
      </form>
      </div>
    </div>
  );
};
