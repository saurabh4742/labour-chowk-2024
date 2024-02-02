import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRoutes,
} from "react-router-dom";

import Loading from "./pages/Loading";
import Landing from "./pages/landing";
import LaborPortal from "./pages/laborpages/LaborPortal";
import LoginasLabor from "./pages/laborpages/LoginasLabor";
import SignupasLabor from "./pages/laborpages/SignupasLabor";
import EmployerPotal from "./pages/employerpages/EmployerPotal";
import LoginasEmployer from "./pages/employerpages/LoginasEmployer";
import SignupasEmployer from "./pages/employerpages/SignupasEmployer";
import LaborHome from "./pages/laborpages/LaborHome";
import ProfileAsLabor from "./pages/laborpages/ProfileAsLabor";
import ProfileAsEmployer from "./pages/employerpages/ProfileAsEmployer";
import EmployerHome from "./pages/employerpages/EmployerHome";
import CreateaVacancy from "./pages/employerpages/CreateaVacancy";
import LaborDetails from "./pages/employerpages/LaborDetails";
import JobDetails from "./pages/laborpages/JobDetails";
import SupportPage from "./pages/ui-boiler/SupportPage";
import ManageVacancy from "./pages/employerpages/ManageVacancies";

const AppRoutes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Landing />} />
      <Route path="/labor" element={<LaborPortal />}>
      <Route index element={<LaborHome />} />
      <Route path="login" element={<LoginasLabor/>}/>
      <Route path="signup" element={<SignupasLabor/>}/>
      <Route path="profile" element={<ProfileAsLabor/>}/>
      <Route path=":id" element={<JobDetails/>}/>
      </Route>
      <Route path="/employer" element={<EmployerPotal />}>
      <Route index element={<EmployerHome />} />
      <Route path="login" element={<LoginasEmployer/>}/>
      <Route path="signup" element={<SignupasEmployer/>}/>
      <Route path="profile" element={<ProfileAsEmployer/>}/>
      <Route path="createavacancy" element={<CreateaVacancy/>}/>
      <Route path="managevacancies" element={<ManageVacancy/>}/>
      <Route path=":id" element={<LaborDetails/>}/>
      </Route>
      <Route path="/loading" element={<Loading />} />
      <Route path="/support" element={<SupportPage/>}/>
      <Route path="*" element={<div className="flex justify-center w-full text-2xl text-red-500">url does not exist please check before requesting</div>} />
    </ReactRoutes>
  );
};

const Routes = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default Routes;
