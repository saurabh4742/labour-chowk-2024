import EmployerNavbar from "./EmployerNavbar";
import { Outlet } from "react-router-dom";
import { useMyContext } from "../MyContext";
function EmployerPotal() {
  const { userEmployer} = useMyContext();
  return (
    <div className='h-screen bg-green-600 bg-opacity-60'>
      {userEmployer && <EmployerNavbar />}
      <Outlet />
    </div>
  );
}

export default EmployerPotal;
