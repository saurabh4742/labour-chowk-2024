import './App.css';
import LaborPortal from './pages/laborpages/LaborPortal';
import Landing from './pages/landing';
import EmployerPotal from './pages/employerpages/EmployerPotal';
import { useState } from 'react';

function App() {
  const [isLabor, setisLabor] = useState(false);
  const [isEmployer, setisEmployer] = useState(false);

  return (
    <div className='w-[100vw]' >
        
      {(!isLabor && !isEmployer) ? (
        <Landing setisLabor={setisLabor} setisEmployer={setisEmployer} />
      ) : (isLabor ? (
        <div>
          <LaborPortal setisLabor={setisLabor} setisEmployer={setisEmployer} />
          </div>
        
      ) : (
        <div>
          
          <EmployerPotal setisLabor={setisLabor} setisEmployer={setisEmployer}/>
          </div>
      ))}
    </div>
  );
}

export default App;
