import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useMyContext } from "../MyContext";
import JobsCard from "./JobsCard";
import { Input } from "@/components/ui/input";
import { SearchCheck, ShieldCheck } from "lucide-react";
import { Label } from "@/components/ui/label";

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
        <Label className="flex justify-center w-full mx-auto mt-6 text-2xl text-center sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        Authentic<ShieldCheck className="mx-2" />job opportunities dhundhe<SearchCheck/>!
          </Label>
          <div className="flex justify-center w-full mt-4">
            <Input
              className="bg-white shadow-md max-w-80 ring-2 ring-gray-600 ring-opacity-40"
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
