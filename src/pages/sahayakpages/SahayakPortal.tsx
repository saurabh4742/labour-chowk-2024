import SahayakNavbar from "./SahayakNavbar";
import { Outlet } from "react-router-dom";
import { useMyContext } from "../MyContext";
import { Skeleton } from "@/components/ui/skeleton"
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
function SahayakPotal() {
  const { userSahayak } = useMyContext();
  return (
    <div className="min-h-screen overflow-auto ">
      {userSahayak && <SahayakNavbar />}
      {userSahayak && (
        <>
          <div className="flex justify-center w-full mt-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src="https://i.ibb.co/DMv1hxq/logo.jpg" />
              <AvatarFallback><Skeleton className="w-12 h-12 rounded-full" /></AvatarFallback>
            </Avatar>
          </div>
          <Label className="flex justify-center w-full mx-auto mt-4 text-lg text-center sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
            Labour Chowk welcomes you
            <br />
            Mr./Mrs. {userSahayak.name}!
          </Label>
        </>
      )}
      <Outlet />
    </div>
  );
}

export default SahayakPotal;
