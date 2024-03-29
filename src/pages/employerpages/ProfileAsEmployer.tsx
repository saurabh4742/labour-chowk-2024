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
  import fallbackImages from "../../../image/fallback";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import { Button } from "@/components/ui/button";
  import { Check, PencilLine } from "lucide-react";
import Loading from '../Loading';
import { useMyContext } from '../MyContext';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Skeleton } from '@/components/ui/skeleton';
function ProfileAsEmployer() {
  const { userEmployer} = useMyContext();
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "",
    address: "",
    pincode: "",
    image: null,
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

  const handleImageChange = (e: any) => {
    const selectedImage = e.target.files[0];
    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      image: selectedImage,
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
      const formData = new FormData();
      formData.append("name", profileData.name);
      formData.append("pincode", profileData.pincode);
      formData.append("address", profileData.address);
      if (userEmployer?.profileImage && profileData.image) {
        // Delete existing profile image from Firebase Storage
        await axios.put(
          `https://labor-chowk-api.vercel.app/api/employer/update/profileImage/${userEmployer._id}`
        );
  
      }
  
      // Append image file to FormData only if the user has selected a new image
      if (profileData.image) {
        formData.append("image", profileData.image);
      }
  
      const response = await axios.put(
        `https://labor-chowk-api.vercel.app/api/employer/modify/${userEmployer?._id}`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
        setIsLoading(false);
      if(response.status==200)
      toast.success("Succesfully Updated");
      setEditMode(false);
      
    } catch (error) {
      toast.error("error while saving")
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
            <Card className="w-[350px] shadow-md">
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
                        <Avatar className='w-24 h-24 shadow-md'>
                          <AvatarImage src={userEmployer?.profileImage || fallbackImages.default} />
                          <AvatarFallback><Skeleton className="w-12 h-12 rounded-full" /></AvatarFallback>
                        </Avatar>
                      )}
                    </div>


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