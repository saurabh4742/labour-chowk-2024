import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import LaborNavbar from './LaborNavbar';
import { useMyContext } from '../MyContext';
function LaborPortal() {
  const { userLabor} = useMyContext();
  
  return (
    <>
    {userLabor._id && <LaborNavbar/>}
    <Outlet/>
    </>
      
  );
}

export default LaborPortal;
