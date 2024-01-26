import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import LaborsCard from "./LaborsCard";
import { useMyContext } from "../MyContext";

function EmployerHome() {
  const { userEmployer } = useMyContext();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      {userEmployer ? (
        <>
          <div className="flex justify-center w-full mt-4">
            <Input
              className="bg-white shadow-md max-w-80 ring-2 ring-gray-600 ring-opacity-40"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          {searchQuery ? (
            <LaborsCard
              FilterBy={searchQuery}
              Title={"Labors Based on Search"}
              isLarge={true}
            />
          ) : (
            <>
              <LaborsCard FilterBy={"None"} Title={"None"} isLarge={true} />
              <LaborsCard
                FilterBy={"pincode"}
                Title={"Labors Near You"}
                isLarge={false}
              />
            </>
          )}
        </>
      ) : (
        <Navigate to="/employer/login" />
      )}
    </div>
  );
}

export default EmployerHome;
