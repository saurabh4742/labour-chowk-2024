import EmployerNavbar from "./EmployerNavbar";
import { Outlet } from "react-router-dom";
import { useMyContext } from "../MyContext";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
function EmployerPotal() {
  const { userEmployer } = useMyContext();
  return (
    <div className="min-h-screen overflow-auto ">
      {userEmployer && <EmployerNavbar />}
      {userEmployer && (
        <>
          <div className="flex justify-center w-full mt-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src="https://i.ibb.co/DMv1hxq/logo.jpg" />
              <AvatarFallback>LC</AvatarFallback>
            </Avatar>
          </div>
          <Label className="flex justify-center w-full mx-auto mt-4 text-2xl text-center sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
            Labor Chowk welcomes you
            <br />
            Mr./Mrs. {userEmployer.name}!
          </Label>
        </>
      )}
      <Outlet />
    </div>
  );
}

export default EmployerPotal;
