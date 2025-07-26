import './App.css';
import Header from './Components/JobsPage/Header';
import HiringCard from './Components/JobsPage/HiringCard';
import JobFiltrableSideBar from './Components/JobsPage/JobFiltrableSideBar';
import JobList from './Components/JobsPage/JobList';

function App() {
  return (
    <>  
     <Header />  
     <div className='layout-container'>
     <JobFiltrableSideBar /> 
     <JobList />
     </div>
     <HiringCard />
     </>
  );
}

export default App
