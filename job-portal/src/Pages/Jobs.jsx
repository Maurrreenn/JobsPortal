import './Jobs.css';
import React, { useEffect } from 'react';
import JobFiltrableSideBar from '../Components/JobsPage/JobFiltrableSideBar';
import JobList from '../Components/JobsPage/JobList';
import TopCompany from '../Components/JobsPage/TopCompanySection';
import { useState } from 'react';
import {useOutletContext} from 'react-router-dom';


const Jobs = () => {
  const [showFilter, setShowFilter] = useState(false);
  const {setHideHeaderfooter} = useOutletContext();

  useEffect (() => {
   setHideHeaderfooter(showFilter);
   return () => setHideHeaderfooter(false);
  }, [showFilter, setHideHeaderfooter]);

  return (
    <> 
     <div className='grid-layout'>
        <button
         className='show-filter-btn'
         onClick={() => setShowFilter(!showFilter)}
        >{showFilter ? "Hide Filter" : "Show Filter"}</button>

        
        <div className={`layout-container ${showFilter ? "open" : ""}`}>
           <div className='toggle-aside'>
              <JobFiltrableSideBar />
           </div>
              <JobList />
        </div>
        <div className={`section-layout ${showFilter ? "open" : ""}`}>
        <TopCompany />
        </div>

        {showFilter && (
         <div className= "filter-sidebar">  
           <JobFiltrableSideBar />
         </div>
        )}
     </div>
     </>
  );
}

export default Jobs;