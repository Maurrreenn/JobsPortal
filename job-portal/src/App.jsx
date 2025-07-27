import './App.css';
import Footer from './Components/JobsPage/Footer';
import Header from './Components/JobsPage/Header';
import HiringCard from './Components/JobsPage/HiringCard';
import JobFiltrableSideBar from './Components/JobsPage/JobFiltrableSideBar';
import JobList from './Components/JobsPage/JobList';
import TopCompany from './Components/JobsPage/TopCompanySection';

function App() {
  return (
    <>  
     <Header />  
     <div className='layout-container'>
     <JobFiltrableSideBar /> 
     <JobList />
     </div>
     <HiringCard />
     <TopCompany />
     <Footer />
     </>
  );
}

export default App
