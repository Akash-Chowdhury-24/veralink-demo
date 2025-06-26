
import React from "react";
import "./ContactPage.css";
import { FaChevronDown } from "react-icons/fa"; // FontAwesome
function ContactPage() {
  return (
    <div className="contact-container">
      <div className="contact-banner">
        <img
          src="/contact_banner.png" // replace with your image
          alt="Contact Banner"
        />
      </div>

      <div className="contact-content">
        <h1>Contact Us</h1>
        <div className="contact-main">
          <div className="contact-form">
            <h3>Drop us a line!</h3>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Message" rows="5" required></textarea>
              <button type="submit">Send</button>
            </form>
            {/* <p className="captcha-note">
              This site is protected by reCAPTCHA and the Google
              <a href="#"> Privacy Policy</a> and
              <a href="#"> Terms of Service</a> apply.
            </p> */}
             <p className="captcha-note">
            This site is protected by reCAPTCHA and the Google{' '}
            <a href="/privacy-policy">Privacy Policy</a> and{' '}
            <a href="/terms-conditions">Terms of Service</a> apply.
          </p>
          </div>

          <div className="contact-info">
            <h4>VeraLink Technology Services</h4>
            <p>69 Ziadie Avenue, Kingston, Jamaica</p>
            <p>
              <a href="tel:+18766060251">+1 (876) 606-0251</a>
            </p>
            <p>
              <a href="tel:+18764705470">+1 (876) 470-5470</a>
            </p>
            <p>
              <a href="mailto:sales@veralinkgroup.com">
                sales@veralinkgroup.com
              </a>
            </p>
            {/* <div className="hours">
              <strong>Hours </strong><br />
              Open today: <span>08:00 am – 05:00 pm</span><FaChevronDown />
            </div> */}
            <div className="hours">
              <strong>Hours</strong>
              <br />
              <span className="hours-line">
               <p> Open today:</p> <span> 08:00 am – 05:00 pm</span>
                <FaChevronDown className="down-arrow" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-map-banner">
        <img
          src="/contact-us-map.png" // replace with your image
          alt="Contact Banner"
        />
      </div>
    </div>
  );
}

export default ContactPage;
