import { Outlet } from 'react-router-dom';
import LaborNavbar from './LaborNavbar';
import { useMyContext } from '../MyContext';
function LaborPortal() {
  const { userLabor} = useMyContext();
  
  return (
    <div className='min-h-screen overflow-auto'>
    {userLabor && <LaborNavbar/>}
    <Outlet/>
    </div>  
  );
}

export default LaborPortal;
