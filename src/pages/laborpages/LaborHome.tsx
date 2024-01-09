import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useMyContext } from "../MyContext";
import JobsCard from "./JobsCard";
import { Input } from "@/components/ui/input";

function LaborHome() {
  const { userLabor } = useMyContext();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      {userLabor._id ? (
        <>
          <div className="flex justify-center w-full mt-4">
            <Input
              className="bg-white shadow-md max-w-80 ring-2 ring-gray-900 ring-opacity-40"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
            />
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
