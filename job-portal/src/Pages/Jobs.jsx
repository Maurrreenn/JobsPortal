import './Jobs.css';
import JobFiltrableSideBar from '../Components/JobsPage/JobFiltrableSideBar';
import JobList from '../Components/JobsPage/JobList';
import TopCompany from '../Components/JobsPage/TopCompanySection';


const Jobs = () => {
  return (
    <> 
     <div className='grid-layout'>  
        <div className='layout-container'>
        <JobFiltrableSideBar /> 
        <JobList />
        </div>
        <div className='section-layout'>
        <TopCompany />
        </div>
     </div>
     </>
  );
}

export default Jobs;