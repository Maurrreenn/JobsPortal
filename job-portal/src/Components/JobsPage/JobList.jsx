import React from "react";
import { useState } from "react";
import './JobList.css';

const JobList = () => {
   const [sortBy, setSortBy] = useState("");

  return (
    <>
      <div className="main-container">
        <div className="nav-container">
          <p className="search-result">Showing 6-6 of 10 results</p>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}   className='sort-input'>
            <option value={""}>Sort by latest</option>
            <option>Sort by Title</option>
            <option>Sort by Positions</option>
            <option>Sort by Companies</option>
            <option>Sort by Offerings</option>
          </select>
        </div>
        <div className="job-offings-container">
          <div className="job-card">
            <span className="post-time">10 min ago</span>
            <div className="image-logo"> 
                <img src="/logo.png" alt="logo" width={40} />
            </div>
              <h3 className="job-position">Forward Security Director</h3>
              <p className="company-info">Bauch, schuppe and schulist Co</p>
            <div className="job-info">
              <div className="position-nature">
                <span className="specific-info">Hotels & Tourism</span>
                <span className="specific-info">Full time</span>
                <span className="specific-info">$40000-$42000</span>
                <span className="specific-info">New-York, USA</span>
              </div>
              <button className="job-details-button">Job Details</button>
            </div>
          </div>
          <div className="job-card">
             <span className="post-time">10 min ago</span>
            <div className="image-logo">
             <img src="/vite.svg" alt="logo" width={30}/>
            </div>
             <h3 className="job-position">Regional Creative Facilitator</h3>
             <p className="company-info">Wisock-Becker Co</p>
            <div className="job-info">
            <div className="position-nature">
              <span className="specific-info">Media</span>
              <span className="specific-info">Part time</span>
              <span className="specific-info">$28000-$32000</span>
              <span className="specific-info">Los-Angelus, USA</span>
            </div>
              <button className="job-details-button">Job Details</button>
            </div>
          </div>
          <div className="job-card">
             <span className="post-time">10 min ago</span>
            <div className="image-logo"> 
            <img src="/logo.png" alt="logo" width={40}/>
            </div>
             <h3 className="job-position">Internal Integration Planner</h3>
             <p className="company-info">Mraz, Quigley and Feast Inc </p>
            <div className="job-info">
              <div className="position-nature">
                <span className="specific-info">Construction</span>
                <span className="specific-info">Full time</span>
                <span className="specific-info">$48000-$50000</span>
                <span className="specific-info">Texas, USA</span>
              </div>
              <button className="job-details-button">Job Details</button>
            </div>
          </div>
          <div className="job-card">
             <span className="post-time">10 min ago</span>
             <div className="image-logo">
               <img src="/vite.svg" alt="logo" width={30}/>
             </div>
               <h3 className="job-position">Distric Intranet Director</h3>
               <p className="company-info">VonRuedon-Weber Co</p>
             <div className="job-info">
              <div className="position-nature">
                <span className="specific-info">Commerce</span>
                <span className="specific-info">Full time</span>
                <span className="specific-info">$42000-$48000</span>
                <span className="specific-info">Florida, USA</span>
              </div>
              <button className="job-details-button">Job Details</button>
            </div>
          </div>
          <div className="job-card">
             <span className="post-time">10 min ago</span>
            <div className="image-logo"> 
              <img src="/logo.png" alt="logo" width={40}/>
            </div>
             <h3 className="job-position">Corporate Tactics Facilitator</h3>
             <p className="company-info">Corrier, Turner and Fatley inc</p>
            <div className="job-info">
              <div className="position-nature">
                <span className="specific-info">Commerce</span>
                <span className="specific-info">Full time</span>
                <span className="specific-info">$38000-$40000</span>
                <span className="specific-info">Boston, USA</span>
              </div>
              <button className="job-details-button">Job Details</button>
            </div>
          </div>
          <div className="job-card">
             <span className="post-time">10 min ago</span>
             <div className="image-logo">
               <img src="/vite.svg" alt="logo" width={30}/>
             </div>
               <h3 className="job-position">Forward Accounts Consultants</h3>
               <p className="company-info">Miler Group</p>
            <div className="job-info">
               <div className="position-nature">
                 <span className="specific-info">Financial services</span>
                 <span className="specific-info">Full time</span>
                 <span className="specific-info">$45000-$48000</span>
                 <span className="specific-info">Boston, USA</span>
               </div>
               <button className="job-details-button">Job Details</button>
            </div>
          </div>
               <div className="pagnation">
                 <div className="page-container">
                  <button className="page-number">1</button>
                  <button className="page-number-two">2</button>
                 </div>
                  <button className="next-page">Next &gt;</button>
               </div>
        </div>
      </div>
    </>
  )
}







export default JobList;