/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useEffect, useState } from 'react'
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
  import { Button } from "@/components/ui/button";
  import { Check, PencilLine } from "lucide-react";
import Loading from '../Loading';
import { useMyContext } from '../MyContext';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
function ProfileAsEmployer() {
  const { userEmployer} = useMyContext();
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "",
    address: "",
    pincode: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('https://labor-chowk-api.vercel.app/api/auth/employer/profile', {
          withCredentials: true, // Include credentials in the request
        });
        setIsLoading(false);

        if (response.status === 200) {
          setProfileData(response.data.employer);
        } else {
          console.log('Failed to fetch profile data');
        }
      } catch (error) {
        setIsLoading(false);
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  const handleNameChange = (e: { target: { value: any; }; }) => {
    const newName = e.target.value;
    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      name: newName,
    }));
  };

  const handleAddressChange = (e: { target: { value: any; }; }) => {
    const newAddress = e.target.value;
    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      address: newAddress,
    }));
  };
  const handlePincodeChange = (e: { target: { value: any; }; }) => {
    const newPincode = e.target.value;
    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      pincode: newPincode,
    }));
  };
  const handleSave = async () => {
    // Perform save/update profile logic
    try {
      setIsLoading(true);
        const response = await axios.put(
          `https://labor-chowk-api.vercel.app/api/employer/modify/${userEmployer?._id}`,{name:profileData.name,pincode:profileData.pincode,address:profileData.address},
          {
            withCredentials: true, // Include credentials in the request
          }
        );
        setIsLoading(false);
      if(response.status==200)
      alert("Succesfully Updated");
      setEditMode(false);
      
    } catch (error) {
      setIsLoading(false);
      setEditMode(false);
    }
    // Assuming you might want to update the profile data in the backend here using Axios
  };

  return (
    <div className="flex justify-center w-full mt-4">
      {!userEmployer ? (
        <Navigate to="/employer/login" />
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
                        <Input id="name" placeholder="New Name" value={profileData.name}
                        onChange={handleNameChange}/>
                      ) : (
                        `${profileData.name}`
                      )}
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <Label htmlFor="name">Address:</Label>
                      {editMode ? (
                        <Input id="name" placeholder="New Address" value={profileData.address}
                        onChange={handleAddressChange}/>
                      ) : (
                        `${profileData.address}`
                      )}
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <Label htmlFor="name">Pincode:</Label>
                      {editMode ? (
                        <Input id="name" placeholder="New Pincode" value={profileData.pincode}
                        onChange={handlePincodeChange}/>
                      ) : (
                        `${profileData.pincode}`
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

export default ProfileAsEmployer