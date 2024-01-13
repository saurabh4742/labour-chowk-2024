import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Employer from "@/interfaces/Employer";
import Job from "@/interfaces/Job";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Navigate, useParams } from "react-router-dom";
import { useMyContext } from "../MyContext";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import axios from "axios";
function JobDetails() {
  const { userLabor } = useMyContext();
  const params = useParams();
  const id = params.id;
  const [job, setJob] = useState<Job | null>(null);
  const [employer, setEmployer] = useState<Employer | null>(null);
  
  useEffect(() => {
    // Perform API request to fetch job details using the id
    const fetchJobDetails = async () => {
      try {
        // Make the API call here using fetch or your preferred method
        const response = await axios.get(`https://labor-chowk-api.vercel.app/api/vacancy/id/${id}`, {
          withCredentials: true, // Include credentials in the request
        }) // Replace with your API endpoint

        if (!(response.status==200)) {
          throw new Error("Failed to fetch job details");
        }

        const data = await response.data;
        setJob(data); // Update job state with fetched data

        // Fetch employer details using job data
        if (data.employer) {
          const employerResponse = await axios.get(`https://labor-chowk-api.vercel.app/api/employer/${data.employer}`, {
            withCredentials: true, // Include credentials in the request
          }) // Replace with endpoint to get employer details

          if (employerResponse.status==200) {
            const employerData = await employerResponse.data;
            setEmployer(employerData); // Set employer phone number in state
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
    if (employer) {
      const phoneNumber = employer.phoneNumber;

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
      {!userLabor ? (
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
                    
                  />
                  <AvatarFallback>{job.title}</AvatarFallback>
                </Avatar>
                <p>
                  <strong>Owner name: </strong>
                  {employer && employer.name}
                </p>
                <p>
                  <strong>Address: </strong>
                  {job.officeAddress}
                </p>
                <p>
                  <strong>Daily: </strong>
                  ₹{job.dailySalary}
                </p>
                <p>
                  <strong>Pincode: </strong>
                  {job.areaPincode}
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
            <Loading/>
          )}
        </Card>
      )}
    </div>
  );
}

export default JobDetails;
