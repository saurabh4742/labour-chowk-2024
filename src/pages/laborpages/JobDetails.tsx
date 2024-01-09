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
import { Navigate, useParams } from "react-router-dom";
import { useMyContext } from "../MyContext";
import { useEffect, useState } from "react";
import Loading from "../Loading";
function JobDetails() {
  const { userLabor } = useMyContext();
  const params = useParams();
  const id = params.id;
  const [job, setJob] = useState({});
  const [employerPhone, setEmployerPhone] = useState('');
  
  useEffect(() => {
    // Perform API request to fetch job details using the id
    const fetchJobDetails = async () => {
      try {
        // Make the API call here using fetch or your preferred method
        const response = await fetch(`/api/jobs/${id}`); // Replace with your API endpoint

        if (!response.ok) {
          throw new Error("Failed to fetch job details");
        }

        const data = await response.json();
        setJob(data); // Update job state with fetched data

        // Fetch employer details using job data
        if (data.employer) {
          const employerResponse = await fetch(`/api/employers/${data.employer}`); // Replace with endpoint to get employer details

          if (employerResponse.ok) {
            const employerData = await employerResponse.json();
            setEmployerPhone(employerData.phoneNumber); // Set employer phone number in state
          }
        }
      } catch (error) {
        console.error("Error fetching job details:", error);
        // Handle error cases, maybe show an error message or redirect
      }
    };

    if (id) {
      fetchJobDetails();
    }
  }, [id]);

  const handleCallNow = () => {
    // Use the employer's phone number for the call
    if (employerPhone) {
      const phoneNumber = employerPhone;

      // Simulate call action by asking for confirmation
      const confirmCall = window.confirm(`Call ${phoneNumber}?`);

      if (confirmCall) {
        // Redirect to tel: link to initiate the call
        window.location.href = `tel:${phoneNumber}`;
      }
    } else {
      // Handle scenario when employer's phone number is not available
      console.error('Employer phone number not found');
      // Show an error message or handle accordingly
    }
  };
  return (
    <div className="flex justify-center w-full mt-4">
      {!userLabor.id ? (
        <Navigate to="/labor/login" />
      ) : (
        <Card className="w-[350px] bg-white rounded-lg  ring-2 ring-gray-900 ring-opacity-40 shadow-md ">
          {job ? (
            <>
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
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
                  <strong>Owner name: </strong>
                  {job.ownerName}
                </p>
                <p>
                  <strong>Address: </strong>
                  {job.address}
                </p>
                <p>
                  <strong>Daily: </strong>
                  {job.salary}
                </p>
                <p>
                  <strong>Vacancy: </strong>
                  {job.vacancy}
                </p>
              </div>
            </div>
          </CardContent>
              <CardFooter className="flex">
                <Button className="w-full" onClick={handleCallNow}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now and Apply
                </Button>
              </CardFooter>
            </>
          ) : (
            <Navigate to="/loading" />
          )}
        </Card>
      )}
    </div>
  );
}

export default JobDetails;
