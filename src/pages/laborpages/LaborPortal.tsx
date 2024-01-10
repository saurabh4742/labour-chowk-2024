import { Outlet } from 'react-router-dom';
import LaborNavbar from './LaborNavbar';
import { useMyContext } from '../MyContext';
function LaborPortal() {
  const { userLabor} = useMyContext();
  
  return (
    <>
    {userLabor && <LaborNavbar/>}
    <Outlet/>
    </>
      
  );
}

export default LaborPortal;
