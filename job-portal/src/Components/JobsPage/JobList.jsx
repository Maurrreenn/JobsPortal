import React from "react";
import { useState } from "react";
import './JobList.css'
import reactLogo from '../../assets/react.svg'

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
            <p className="post-time">10 min ago</p>
            <img src="reactLogo" alt="React Logo" width={20}/>
          </div>
          <div className="job-card">
            <p className="post-time">10 min ago</p>
          </div>
          <div className="job-card">
            <p className="post-time">10 min ago</p>
          </div>
          <div className="job-card">
            <p className="post-time">10 min ago</p>
          </div>
          <div className="job-card">
            <p className="post-time">10 min ago</p>
          </div>
          <div className="job-card">
            <p className="post-time">10 min ago</p>
          </div>
        </div>
      </div>
    </>
  )
}







export default JobList;