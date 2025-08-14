import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <h2 className="footer-subheading">Job</h2>
        <span className="job-footer-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</span>
      </div>
      <div className="footer-content">
      <h2 className="footer-subheading">Company</h2>
      <span>About Us</span>
      <span>Our Team</span>
      <span>Partners</span>
      <span>For Candidates</span>
      <span>For Employers</span>
      </div>
      <div className="footer-content">
      <h2 className="footer-subheading" >Job Categories</h2>
      <span>Telecommunication</span>
      <span>Hotels & Tourism</span>
      <span>Construction</span>
      <span>Education</span>
      <span>Financial Services</span>
      </div>
      <div className="footer-content">
      <h2 className="footer-subheading">Newsletter</h2>
      <span className="newsletter-description">Sed ut perspiciatis unde omnis iste natus error sit</span>
        <input
           type="email" 
           placeholder="Email Address"
           className="Newsletter-email-input" 
        />
        <button className="subscribe-button">Subscribe now</button>
      </div>
        <div className="copyright-info">
          <div>
           <p className="footer-copyright">© Copyright Job Portal 2025 created by Githubcom</p>
           </div>
           <div className="ownership-right">
            <p className="privacy-policy">Privacy Policy</p>
            <p className="terms-condition">Terms and Conditions</p>
         </div>
        </div>
    </div>
  )
}

export default Footer;