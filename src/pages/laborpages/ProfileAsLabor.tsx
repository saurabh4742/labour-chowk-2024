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
import toast from "react-hot-toast";
import fallbackImages from "../../../image/fallback";
function ProfileAsLabor() {
  const { userLabor } = useMyContext();
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "",
    address: "",
    pincode: "",
    availability:false,
    experience: "",
    image: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://labor-chowk-api.vercel.app/api/auth/labor/profile",
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
  const handleImageChange = (e: any) => {
    const selectedImage = e.target.files[0];
    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      image: selectedImage,
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
    try {
      setIsLoading(true);
  
      const formData = new FormData();
      formData.append("name", profileData.name);
      formData.append("pincode", profileData.pincode);
      formData.append("address", profileData.address);
      formData.append("availability", profileData.availability.toString());
      formData.append("experience", profileData.experience);
  
      // Check if there is an existing profile image and a new image is selected
      if (userLabor?.profileImage && profileData.image) {
        // Delete existing profile image from Firebase Storage
        await axios.put(
          `https://labor-chowk-api.vercel.app/api/labor/update/profileImage/${userLabor._id}`
        );
  
      }
  
      // Append image file to FormData only if the user has selected a new image
      if (profileData.image) {
        formData.append("image", profileData.image);
      }
  
      const response = await axios.put(
        `https://labor-chowk-api.vercel.app/api/labor/modify/${userLabor?._id}`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      setIsLoading(false);
  
      if (response.status === 200) toast.success("Successfully Updated");
      setEditMode(false);
    } catch (error) {
      toast.error("Error while saving");
      setIsLoading(false);
      setEditMode(false);
    }
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
            <Card className="w-[350px] shadow-md ring-2 ring-green-900 ring-opacity-80">
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
                  <div className="flex items-center justify-center gap-3">
                      {editMode && <Label htmlFor="image">Profile Image:</Label> }
                      {editMode ? (
                        <Input
                          id="image"
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                      ) : (
                        <Avatar className='w-24 h-24 shadow-md ring-2 ring-green-900 ring-opacity-80'>
                          <AvatarImage src={userLabor?.profileImage || fallbackImages.default} />
                          <AvatarFallback>{userLabor?.name[0]}</AvatarFallback>
                        </Avatar>
                      )}
                    </div>

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
                        `${userLabor.name}`
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
                        `${userLabor.address}`
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
                        `${userLabor.pincode}`
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
                        `${userLabor.experience} years`
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
                        <>{userLabor.availability ? "free" : "occupied"}</>
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
