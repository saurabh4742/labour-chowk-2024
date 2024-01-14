import { Outlet } from 'react-router-dom';
import LaborNavbar from './LaborNavbar';
import { useMyContext } from '../MyContext';
function LaborPortal() {
  const { userLabor} = useMyContext();
  
  return (
    <div className='h-screen bg-green-600 bg-opacity-60'>
    {userLabor && <LaborNavbar/>}
    <Outlet/>
    </div>  
  );
}

export default LaborPortal;
