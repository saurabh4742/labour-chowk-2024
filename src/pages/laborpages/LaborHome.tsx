import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useMyContext } from "../MyContext";
import JobsCard from "./JobsCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
function LaborHome() {
  const { userLabor } = useMyContext();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      {userLabor ? (
        <>
          <div className="flex justify-center w-full mt-4">
            <Input
              className="bg-white shadow-md max-w-80 ring-2 ring-gray-600 ring-opacity-40"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <div className="flex justify-center w-full mt-4">
            <Avatar>
              <AvatarImage src="https://i.ibb.co/DMv1hxq/logo.jpg" />
              <AvatarFallback>LC</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <Label className="flex justify-center w-full mt-4 text-2xl">
              Labor Chowk welcomes you, Mr./Mrs. {userLabor?.name}!
            </Label>
          </div>
          {searchQuery ? (
            <JobsCard
              FilterBy={searchQuery}
              Title={"Jobs Based on Search"}
              isLarge={true}
            />
          ) : (
            <>
              <JobsCard FilterBy={"None"} Title={"None"} isLarge={true} />
              <JobsCard
                FilterBy={"pincode"}
                Title={"Jobs Near You"}
                isLarge={false}
              />
            </>
          )}
        </>
      ) : (
        <Navigate to="/labor/login" />
      )}
    </div>
  );
}

export default LaborHome;
