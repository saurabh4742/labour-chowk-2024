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
function Navbar({setCreateVacancy,setviewProfile,setviewDetail, isEmployer ,setIsLogin }) {
  return (
    <div>
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
            <MenubarItem onClick={()=>{
                setviewDetail(undefined)
                setviewProfile(false)
                setCreateVacancy(false);
            }}>Home</MenubarItem>
            <MenubarSeparator />
            {isEmployer && (
              <div>
                <MenubarItem onClick={()=>{
                  setCreateVacancy(true);
                  setviewProfile(false)
                }}>Create a vacancy</MenubarItem>
                <MenubarSeparator />
              </div>
            )}
            <MenubarItem onClick={()=>{
              setCreateVacancy(false)
              setviewProfile(true);
            }}>Profile</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Support</MenubarItem>
            <MenubarSeparator />
            <MenubarItem onClick={()=>{
              setIsLogin(false)
              setviewProfile(false);
              }} className="bg-red-600 text-slate-50">
              Logout
            </MenubarItem>
            <MenubarSeparator />
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}

export default Navbar;
