import React, { useState } from 'react'
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
function ProfileAsEmployer() {
    const [Edit, setEdit] = useState(false);
    const handlSave=()=>{
          setEdit(false);
    }
    return (
      <div className="flex justify-center w-full mt-4">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>
              <Button
                onClick={() => {
                  setEdit(!Edit);
                }}
                variant="link"
              >
                <PencilLine className="w-4 h-4 mr-2" />
                {Edit? "undo" :"edit"}
              </Button>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid items-center w-full gap-4">
              <div className="flex flex-col items-center gap-4 ">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
  
                <div className="flex items-center justify-center gap-3">
                  <Label htmlFor="name">Name:</Label>
                  {Edit ? (
                    <Input  id="name" placeholder="New Name" />
                  ) : (
                    "Saurabh Anand"
                  )}
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Label htmlFor="name">Address:</Label>
                  {Edit ? (
                    <Input id="name" placeholder="New Address" />
                  ) : (
                    "Jharkhand,Dhanbad"
                  )}
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Label htmlFor="name">Pincode:</Label>
                  {Edit ? (
                    <Input id="name" placeholder="New Pincode" />
                  ) : (
                    "815301"
                  )}
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Label htmlFor="name">Password:</Label>
                  {Edit ? (
                    <Input id="name" placeholder="New Password" />
                  ) : (
                    "***********"
                  )}
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            {Edit && (
              <Button onClick={handlSave} className="w-full">
                <Check className="w-4 h-4 mr-2" /> Confirm to save
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    )
}

export default ProfileAsEmployer