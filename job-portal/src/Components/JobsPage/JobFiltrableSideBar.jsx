import { useState } from 'react';
import React  from "react";
import './JobFiltrableSideBar.css';

const JobFiltrableSideBar = () => {
  const [city, setCity] = useState("");
  const [selected, setSelected] = useState([]);
  const [salary, setSalary] = useState(0);

  const jobTypes = ["Full Time", "Part Time", "Freelance", "Seasonal", "Fixed Price"]

  const categories = ["Commerce", "Telecommunication", "Hotels & Tourism", "Education", "Financial Services"]

  const experienceLevels = ["No-experience", "Beginner", "Intermediate", "Expert"]

  const datePosted = ["All", "Last Hour", "Last 24 Hours", "Last 7 Days", "Last 30 Days"]

  const Tags = ["engineering", "design", "ui/ux", "marketing", "management", "soft", "construction"]

  const handleChange = (e) => {
    const {value, checked} = e.target;
    if (checked) {
      setSelected([...selected, value]);
    }else {
      setSelected(selected.filter((item) => item !== value));
    }
  }

  const handleSalary = (e) => {
    setSalary(e.target.value);
  };
  
  return (
    <>
      <div className="side-layout">
        <aside className="side-bar">
          <div>
            <p className="sub-heading">Search by Job Title</p>
            <input
              type="text"
              placeholder="⌕ Job title or company"
              className="search-input"
             />

             <p className="sub-heading">Location</p>
             <select value={city} onChange={(e) => setCity(e.target.value)}   className='drop-down'>
               <option value={""} disabled>📍 Choose City</option>
               <option>Enugu</option>
               <option>Abuja</option>
               <option>Lagos</option>
               <option>Portharcourt</option>
               <option>Benin</option>
               <option>Jos</option>
               <option>Rivers</option> 
             </select>

            <p className="sub-heading">Category</p>
            {categories.map((cat) => (
              <label key={cat} className='cat'>
              <input 
                className='tick-box'
                type="checkbox"
                value={cat}
                checked={selected.includes(cat)}
                onChange={handleChange}
              />
                {cat}
              </label>
            ))}
             <p className="sub-heading">Job Types</p>
            {datePosted.map((job) => (
              <label key={job} className='cat'>
              <input 
                className='tick-box'
                type="checkbox"
                value={job}
                checked={selected.includes(job)}
                onChange={handleChange}
              />
                {job}
              </label>
            ))}
            <button className='more-cat-button'>Show More</button>
            <p className="sub-heading">Experience Level</p>
            {experienceLevels.map((level) => (
              <label key={level} className='cat'>
              <input 
                className='tick-box'
                type="checkbox"
                value={level}
                checked={selected.includes(level)}
                onChange={handleChange}
              />
                {level}
              </label>
            ))}
            <p className="sub-heading">Date Posted</p>
            {datePosted.map((date) => (
              <label key={date} className='cat'>
              <input 
                className='tick-box'
                type="checkbox"
                value={date}
                checked={selected.includes(date)}
                onChange={handleChange}
              />
                {date}
              </label>
            ))}
            <p className="sub-heading">Salary</p> 
            <input 
              className='salary-range'
              type='range'
              min={0}
              max={9999}
              value={salary}
              onChange={handleSalary}
              step={1}

            />

           <div className='price-button'>
           <span className='pay'>Salary: ${salary}</span>
           <button className='apply'>Apply</button>
           </div> 
           <p className='sub-heading'>Tags</p>
           {Tags.map((tag, index) => (
            <button
             key={index}
             className='tags'
            >{tag}
            </button>
           ))}
          </div>
        </aside>
      </div>
    </>
    
  );
};

export default JobFiltrableSideBar;