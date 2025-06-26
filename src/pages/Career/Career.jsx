import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Career.css'; // Optional: use CSS for styling

const jobList = [
  {
    id: 1,
    title: 'UI UX Designer',
    experience: '3 Years of experience',
    logo: '/uiux-logo.png', // Replace with your actual logo path
  },
  {
    id: 2,
    title: 'UI UX Designer',
    experience: '3 Years of experience',
    logo: '/uiux-logo.png',
  },
  {
    id: 3,
    title: 'UI UX Designer',
    experience: '3 Years of experience',
    logo: '/uiux-logo.png',
  },
];

function Career() {

  const navigate = useNavigate();

  const handleJobClick = (jobId) => {
    navigate(`/job-details`);
  };

  return (
    <div className="careers-container">
        <div className="contact-banner">
        <img
          src="/contact_banner.png" // replace with your image
          alt="Contact Banner"
        />
      </div>
    <div className='carrer-content'>
      <h2 className="careers-title">Careers</h2>
      {jobList.map((job) => (
        <div key={job.id} className="career-card">
          <img src={job.logo} alt="Company Logo" className="career-logo" />
          <div className="career-info">
            <h3 className="career-title">{job.title}</h3>
            <p className="career-experience">{job.experience}</p>
          </div>
          <button
            className="career-button"
            onClick={() => handleJobClick(job.id)}
          >
            Job Details
          </button>
        </div>
      ))}
      </div>
    </div>
    
  );
}

export default Career;
