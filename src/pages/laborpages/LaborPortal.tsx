import { useState } from 'react';
import LoginasLabor from './LoginasLabor';
import SignupasLabor from './SignupasLabor';
import JobCard from '../ui-boiler/JobCard';
import Jobs from '@/assets/Test-data';
import Navbar from '../ui-boiler/Navbar';
import SearchBar from '../ui-boiler/SearchBar';
import { Label } from '@/components/ui/label';
import ViewDetailAsLabor from '../ui-boiler/ViewDetailAsLabor';
import ProfileAsLabor from './ProfileAsLabor';

function LaborPortal({setisLabor,setisEmployer}) {
  const [isLogin, setIsLogin] = useState(false);
  const [haveAnAccount, setHaveAnAccount] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewDetail,setviewDetail]=useState()
  const [viewProfile,setviewProfile]=useState(false)
  const [CreateVacancy,setCreateVacancy]=useState(false);
  const filteredJobs = Jobs.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderJobCards = () => {
    if(viewProfile){
      return (<ProfileAsLabor/>)
    }
    else if (searchQuery) {
      
        setviewDetail(undefined)
      return  (
        <JobCard setviewDetail={setviewDetail} Jobs={filteredJobs} isLarge={false} Title={"Vacancy search results"} />
      );
    } else {
      // If no search query, display the default three job cards
      return (
        <>
          <JobCard setviewDetail={setviewDetail} Jobs={Jobs} isLarge={true} Title={"None"} />
          <JobCard setviewDetail={setviewDetail} Jobs={Jobs} isLarge={false} Title={"Vacancy near me"} />
        </>
      );
    }
  };

  return (
    <div>
      {isLogin ? (
        <div>
          <Navbar setCreateVacancy={setCreateVacancy}  setviewProfile={setviewProfile} setviewDetail={setviewDetail} isEmployer={false} setIsLogin={setIsLogin} />
          <Label className='flex justify-center w-full mt-2 mb-2 text-2xl'>Kaam Dhundhe</Label>
          <SearchBar setSearchQuery={setSearchQuery} />
          {viewDetail==undefined? renderJobCards():<ViewDetailAsLabor job={viewDetail}></ViewDetailAsLabor>}
          
        </div>
      ) : (
        haveAnAccount ? (
          <LoginasLabor setisLabor={setisLabor} setisEmployer={setisEmployer} setisLogin={setIsLogin} setHaveanAccount={setHaveAnAccount} />
        ) : (
          <SignupasLabor setisLabor={setisLabor} setisEmployer={setisEmployer} setHaveanAccount={setHaveAnAccount} />
        )
      )}
    </div>
  );
}

export default LaborPortal;
