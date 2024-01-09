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
function EmployerNavbar() {
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
            <MenubarItem><Link to="/employer">Home</Link></MenubarItem>
            <MenubarSeparator />
            <MenubarItem><Link to="/employer/profile">Profile</Link></MenubarItem>
            <MenubarSeparator />
            <MenubarItem><Link to="/employer/createavacancy">Create a vacancy</Link></MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Support</MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="bg-red-600 text-slate-50">
              Logout
            </MenubarItem>
            <MenubarSeparator />
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}

export default EmployerNavbar;
