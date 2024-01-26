import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Labor from "@/interfaces/Labor";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading";
import fallbackImages from "../../../image/fallback";
import { useMyContext } from "../MyContext";
function LaborDetails() {
  const { userEmployer } = useMyContext();
  const params = useParams();
  const id = params.id;
  const [labor, setLabor] = useState<Labor | null>(null);

  useEffect(() => {
    // Perform API request to fetch job details using the id
    const fetchJobDetails = async () => {
      try {
        // Make the API call here using fetch or your preferred method
        const response = await axios.get(
          `https://labor-chowk-api.vercel.app/api/labor/${id}`,
          {
            withCredentials: true, // Include credentials in the request
          }
        ); // Replace with your API endpoint

        if (!(response.status == 200)) {
          throw new Error("Failed to fetch labor details");
        }

        const data = await response.data;
        setLabor(data); // Update job state with fetched data
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
    if (labor) {
      const phoneNumber = labor.phoneNumber;

      // Simulate call action by asking for confirmation
      const confirmCall = window.confirm(`Call ${phoneNumber}?`);

      if (confirmCall) {
        // Redirect to tel: link to initiate the call
        window.location.href = `tel:${phoneNumber}`;
      }
    } else {
      // Handle scenario when employer's phone number is not available
      console.error("Employer phone number not found");
      // Show an error message or handle accordingly
    }
  };
  return (
    <div className="flex justify-center w-full mt-4">
      {!userEmployer ? (
        <Navigate to="/employer/login" />
      ) : (
        <Card className="w-[350px]  shadow-md ring-2 ring-green-900 ring-opacity-80">
          {labor ? (
            <>
              <CardHeader>
                <CardTitle>{labor.skills}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid items-center w-full gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <div className="flex items-center justify-center gap-3">
                      <Avatar className="w-32 h-32 shadow-md ring-2 ring-green-900 ring-opacity-80">
                        <AvatarImage
                          src={
                            labor.profileImage
                              ? labor.profileImage
                              : fallbackImages.default
                          }
                        />
                        <AvatarFallback>{labor.name}</AvatarFallback>
                      </Avatar>
                    </div>
                    <p>
                      <strong>Labor name: </strong>
                      {labor.name}
                    </p>
                    <p>
                      <strong>Address: </strong>
                      {labor.address}
                    </p>
                    <p>
                      <strong>Experience: </strong>
                      {labor.experience} years
                    </p>
                    <p>
                      <strong>Availability: </strong>
                      {labor.availability ? "free" : "occupied"}
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
            </>
          ) : (
            <Loading />
          )}
        </Card>
      )}
    </div>
  );
}

export default LaborDetails;
