/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Check, PencilLine } from "lucide-react";
import { useMyContext } from "../MyContext";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading";
function ProfileAsLabor() {
  const { userLabor } = useMyContext();
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "",
    address: "",
    pincode: "",
    availability: userLabor?.availability,
    experience: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "http://localhost:5500/api/auth/labor/profile",
          {
            withCredentials: true, // Include credentials in the request
          }
        );
        setIsLoading(false);

        if (response.status === 200) {
          setProfileData(response.data.labor);
        } else {
          console.log("Failed to fetch profile data");
        }
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  const handleNameChange = (e: { target: { value: any } }) => {
    const newName = e.target.value;
    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      name: newName,
    }));
  };

  const handleAddressChange = (e: { target: { value: any } }) => {
    const newAddress = e.target.value;
    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      address: newAddress,
    }));
  };

  const handleSwitchChange = (checked: any) => {
    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      availability: checked, // Update the availability value based on the checked state
    }));
  };
  const handlePincodeChange = (e: { target: { value: any } }) => {
    const newPincode = e.target.value;
    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      pincode: newPincode,
    }));
  };

  const handleExperienceChange = (e: { target: { value: any } }) => {
    const newExperience = e.target.value;
    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      experience: newExperience,
    }));
  };
  const handleSave = async () => {
    // Perform save/update profile logic
    try {
      setIsLoading(true);
      const response = await axios.put(
        `http://localhost:5500/api/labor/modify/${userLabor?._id}`,
        {
          name: profileData.name,
          pincode: profileData.pincode,
          address: profileData.address,
          availability:profileData.availability,
          experience:profileData.experience
        },
        {
          withCredentials: true, // Include credentials in the request
        }
      );
      setIsLoading(false);
      if (response.status == 200) alert("Succesfully Updated");
      setEditMode(false);
    } catch (error) {
      setIsLoading(false);
      setEditMode(false);
    }
    // Assuming you might want to update the profile data in the backend here using Axios
  };

  return (
    <div className="flex justify-center w-full mt-4">
      {!userLabor ? (
        <Navigate to="/labor/login" />
      ) : (
        <>
          {isLoading ? (
            <Loading />
          ) : (
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>
                  <Button
                    onClick={() => {
                      setEditMode(!editMode);
                    }}
                    variant="link"
                  >
                    <PencilLine className="w-4 h-4 mr-2" />
                    {editMode ? "undo" : "edit"}
                  </Button>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid items-center w-full gap-4">
                  <div className="flex flex-col items-center gap-4 ">
                    <Avatar>
                      <AvatarImage />
                      <AvatarFallback>{profileData.name[0]}</AvatarFallback>
                    </Avatar>

                    <div className="flex items-center justify-center gap-3">
                      <Label htmlFor="name">Name:</Label>
                      {editMode ? (
                        <Input
                          id="name"
                          placeholder="New Name"
                          value={profileData.name}
                          onChange={handleNameChange} // Handle name change
                        />
                      ) : (
                        `${profileData.name}`
                      )}
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <Label htmlFor="address">Address:</Label>
                      {editMode ? (
                        <Input
                          id="address"
                          placeholder="New Address"
                          value={profileData.address}
                          onChange={handleAddressChange} // Handle address change
                        />
                      ) : (
                        `${profileData.address}`
                      )}
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <Label htmlFor="pincode">Pincode:</Label>
                      {editMode ? (
                        <Input
                          id="pincode"
                          placeholder="New Pincode"
                          value={profileData.pincode}
                          onChange={handlePincodeChange} // Handle pincode change
                        />
                      ) : (
                        `${profileData.pincode}`
                      )}
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <Label htmlFor="experience">Experience:</Label>
                      {editMode ? (
                        <Input
                          id="experience"
                          placeholder="Experience"
                          value={profileData.experience}
                          onChange={handleExperienceChange} // Handle experience change
                        />
                      ) : (
                        `${profileData.experience} years`
                      )}
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <Label htmlFor="name">Availability:</Label>
                      {editMode ? (
                        <div className="flex items-center space-x-2">
                          <Switch
                            checked={profileData.availability}
                            onCheckedChange={handleSwitchChange} // Handle switch toggle change
                            id="free/occupied"
                          />
                          <Label htmlFor="airplane-mode">free/occupied</Label>
                        </div>
                      ) : (
                        <>{profileData.availability ? "free" : "occupied"}</>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                {editMode && (
                  <Button onClick={handleSave} className="w-full">
                    <Check className="w-4 h-4 mr-2" /> Confirm to save
                  </Button>
                )}
              </CardFooter>
            </Card>
          )}
        </>
      )}
    </div>
  );
}

export default ProfileAsLabor;
