import * as React from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
function ViewDetailAsEmployer({ worker }) {
  const handleCallNow = () => {
    const phoneNumber = "700735512";

    // Simulate call action by asking for confirmation
    const confirmCall = window.confirm(`Call ${phoneNumber}?`);

    if (confirmCall) {
      // Redirect to tel: link to initiate the call
      window.location.href = `tel:${phoneNumber}`;
    }
  };
  return (
    <div className="flex justify-center w-full mt-4">
      <Card className="w-[350px] bg-white rounded-lg  ring-2 ring-gray-900 ring-opacity-40 shadow-md ">
        <CardHeader>
          <CardTitle>{worker.profession}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid items-center w-full gap-4">
            <div className="flex flex-col space-y-1.5">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p>
                <strong>Labor name: </strong>
                {worker.name}
              </p>
              <p>
                <strong>Address: </strong>
                {worker.address}
              </p>
              <p>
                <strong>Experience: </strong>
                {worker.experience} years
              </p>
              <p>
                <strong>Availability: </strong>
                {worker.status}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex">
          <Button className="w-full" onClick={handleCallNow}>
            <Phone className="w-4 h-4 mr-2" />
            Call Now and Enquiry
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ViewDetailAsEmployer;
