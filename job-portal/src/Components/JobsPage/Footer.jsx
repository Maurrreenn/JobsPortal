import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <h2 className="footer-subheading">Job</h2>
        <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</span>
      </div>
      <div className="footer-content">
      <h2 className="footer-subheading">Company</h2>
      <span>About Us</span>
      <span>Our Team</span>
      <span>Partners</span>
      <span>Donation</span>
      </div>
      <div className="footer-content">
      <h2 className="footer-subheading" >Job Categories</h2>
      <span>Telecommunication</span>
      <span>Hotels & Tourism</span>
      <span>Construction</span>
      <span>Education</span>
      </div>
      <div className="footer-content">
      <h2 className="footer-subheading">Newsletter</h2>
      <span>Sed ut perspiciatis unde omnis iste natus error sit</span>
      <input
      type="email" 
      placeholder="Email Address"
      className="Newsletter-email-input" 
      />
      </div>
    </div>
  )
}

export default Footer;