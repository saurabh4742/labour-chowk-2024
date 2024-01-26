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
import toast from "react-hot-toast";
function LaborNavbar() {
  const [isLoading, setIsLoading] = useState(false);
  const { userLabor, setUserLabor } = useMyContext();
  const handleLogout = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://labor-chowk-api.vercel.app/api/auth/labor/logout", {
          withCredentials: true, // Include credentials in the request
        })
      if(response.status==200)
      setUserLabor(null);
      setIsLoading(false);
      toast.success(response.data.message) 
      
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
        <Menubar className="justify-between shadow-md ring-2 ">
          <MenubarMenu>
            <Avatar className=" w-fit">
              <AvatarImage src="https://i.ibb.co/DMv1hxq/logo.jpg" />
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
              {userLabor && (
                <>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Link to="/labor/profile">Profile</Link>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem><Link to="/support">Support</Link></MenubarItem>
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
