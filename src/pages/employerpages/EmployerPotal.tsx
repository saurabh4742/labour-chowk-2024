import React, { useState } from 'react'
import Navbar from '../ui-boiler/Navbar'
import Workers from '@/assets/Test-Worker-Data';
import SearchBar from '../ui-boiler/SearchBar';
import { Label } from '@radix-ui/react-label';
import LoginasEmployer from './LoginasEmployer';
import SignupasEmployer from './SignupasEmployer';
import LaborCard from '../ui-boiler/LaborCard';
import ViewDetailAsEmployer from '../ui-boiler/ViewDetailAsEmployer';
function EmployerPotal({setisLabor,setisEmployer}) {
  const [isLogin, setIsLogin] = useState(false);
  const [haveAnAccount, setHaveAnAccount] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewDetail,setviewDetail]=useState()
  const filteredWorkers = Workers.filter(worker =>
    worker.profession.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderLaborCards = () => {
    if (searchQuery) {
      // If there's a search query, render matching job cards
      return  (
        <LaborCard setviewDetail={setviewDetail} Workers={filteredWorkers} isLarge={false} Title={"Search results"} />
      );
    } else {
      // If no search query, display the default three job cards
      return (
        <>
          <LaborCard setviewDetail={setviewDetail}  Workers={Workers} isLarge={true} Title={"Search results"}/>
          <LaborCard setviewDetail={setviewDetail} Workers={Workers} isLarge={false} Title={"Recent"} />
          <LaborCard setviewDetail={setviewDetail} Workers={Workers} isLarge={false} Title={"Worker near me"} />
        </>
      );
    }
  };

  return (
    <div>
      {isLogin ? (
        <div>
          <Navbar setviewDetail={setviewDetail} isEmployer={true} setIsLogin={setIsLogin}/>
          <Label className='flex justify-center w-full mt-2 mb-2 text-2xl'>Apne liye Majdur Dhundhe</Label>
          <SearchBar setSearchQuery={setSearchQuery} />
          {viewDetail==undefined? renderLaborCards():<ViewDetailAsEmployer worker={viewDetail}></ViewDetailAsEmployer>}
        </div>
      ) : (
        haveAnAccount ? (
          <LoginasEmployer setisLabor={setisLabor} setisEmployer={setisEmployer} setisLogin={setIsLogin} setHaveanAccount={setHaveAnAccount} />
        ) : (
          <SignupasEmployer setisLabor={setisLabor} setisEmployer={setisEmployer} setHaveanAccount={setHaveAnAccount} />
        )
      )}
    </div>
  );
}

export default EmployerPotal