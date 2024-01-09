import * as React from "react";
import { Menu } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { useMyContext } from "../MyContext";
import axios from "axios";
import Loading from "../Loading";
import { useState } from "react";
function LaborNavbar() {
  const [isLoading, setIsLoading] = useState(false);
  const { userLabor, setUserLabor } = useMyContext();
  const handleLogout = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "http://localhost:5500/api/auth/labor/logout", {
          withCredentials: true, // Include credentials in the request
        })
      setUserLabor({});
      setIsLoading(false);
      console.log(response.data.message);      
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching profile data:", error);
    }
  };
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Menubar className="justify-between bg-white shadow-md ring-2 ring-gray-900 ring-opacity-40">
          <MenubarMenu>
            <Avatar className=" w-fit">
              <AvatarImage src="https://img.freepik.com/premium-vector/group-people-different-professions-standing-celebrate-labour-day-illustration_138260-1086.jpg" />
              <AvatarFallback>LC</AvatarFallback>
            </Avatar>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <Menu />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Link to="/labor">Home</Link>
              </MenubarItem>
              {userLabor._id && (
                <>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Link to="/labor/profile">Profile</Link>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Support</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem
                    onClick={handleLogout}
                    className="bg-red-600 text-slate-50"
                  >
                    Logout
                  </MenubarItem>
                  <MenubarSeparator />
                </>
              )}
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      )}
    </div>
  );
}

export default LaborNavbar;
