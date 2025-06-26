import React from 'react';
import Slider from 'react-slick';
import './TestimonialCarousel.css';

const testimonials = [
  {
    name: 'Robert Langosh',
    title: 'Operation Manager',
    company: 'Web Prism Dynamics LLP',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Wayne Roob',
    title: 'Lead Assurance Executive',
    company: 'Web Prism Dynamics LLP',
    feedback:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    name: 'Tracy Mertz',
    title: 'Corporate Solutions Strategist',
    company: 'Web Prism Dynamics LLP',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Tracy Mertz',
    title: 'Corporate Solutions Strategist',
    company: 'Web Prism Dynamics LLP',
    feedback:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="testimonial-carousel-wrapper">
         <div className="contact-banner">
        <img
          src="/contact_banner.png" // replace with your image
          alt="Contact Banner"
        />
      </div>
      <div className='testimonial-carousel-main'>
      <h2>Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <h4>{testimonial.name}</h4>
            <p className="job-title">{testimonial.title}</p>
            <p className="feedback">{testimonial.feedback}</p>
            <p className="company">{testimonial.company}</p>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
