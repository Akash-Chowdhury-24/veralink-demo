// import React from 'react'
// import './Testimonals.css'
// function Testimonals() {
//   return (
//     <div>Testimonals</div>
//   )
// }

// export default Testimonals

import React, { useState } from 'react';
import './Testimonals.css';

const Testimonals = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    title: '',
    feedback: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    // You can handle form submission logic here
  };
  return (
    
    <div className="testimonial-container">
        <div className="contact-banner">
        <img
          src="/contact_banner.png" // replace with your image
          alt="Contact Banner"
        />
      </div>
      <div className='testimonal-main-container'>
      <h1>Testimonials</h1>
      <form className="testimonial-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          placeholder="Feedback"
          value={formData.feedback}
          onChange={handleChange}
          rows="5"
        />
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default Testimonals;
