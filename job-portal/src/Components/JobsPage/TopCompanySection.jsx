import React from "react";
import './TopCompanySection.css';

const TopCompany = () => {
  return (
    <div className="top-company-container">
        <h2 className="section-heading">Top Company</h2>
        <p className="tagline">We are here to connect you to every top companies of the world, simply the best for you </p>
      <div className="company-card">
        <div className="logo-card">
          <img src="/instagram.png" alt="instagram" width={50} className="image-card" />
          <h2 className="company-name">Instagram</h2>
          <p className="company-discript">Instagram, owned by Meta, offers various job opportunities. </p>
          <span className="available-job">8 open jobs</span>
        </div>
        <div className="logo-card">
        <img src="/tesla.png" alt="tesla" width={50} className="image-card" />
        <h2 className="company-name">Tesla</h2>
        <p className="company-discript">Instagram, owned by Meta, offers various job opportunities.</p>
        <span className="available-job">18 open jobs</span>
        </div>
        <div className="logo-card">
          <img src="/McDonalds.png" alt="mackdonald's" width={50} className="image-card" />
          <h2 className="company-name">McDonald's</h2>
          <p className="company-discript">Instagram, owned by Meta, offers various job opportunities.</p>
          <span className="available-job">12 open jobs</span>
        </div>
        <div className="logo-card">
          <img src="/apple.png" alt="apple" width={50} className="image-card" />
          <h2 className="company-name">Apple</h2>
          <p className="company-discript">Instagram, owned by Meta, offers various job opportunities.</p>
          <span className="available-job">9 open jobs</span>
        </div>
      </div>
    </div>
  )
}

export default TopCompany;