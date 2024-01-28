import { Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, Navigate } from "react-router-dom";
import { useMyContext } from "../MyContext";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "../Loading";
function LoginasSahayak() {
  const { userSahayak, setUserSahayak } = useMyContext();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async () => {
    try {
      setIsLoading(true); // Set loading to true when starting the request

      const response = await axios.post(
        "https://labor-chowk-api.vercel.app/api/auth/sahayak/login",
        {
          phoneNumber,
          password,
        },
        {
          withCredentials: true, // Include credentials in the request
        }
      );
      let sahayak = response.data.sahayak;
      setIsLoading(false); // Set loading to false after receiving the response
      if (response.status === 200) {
         sahayak = response.data.sahayak;
        toast.success(response.data.message);
        setUserSahayak(sahayak);
      } else {
        // Handle specific HTTP error codes
        if (response.status === 400) {
          toast.error(response.data.error);
        } else {
          // Handle other non-200 HTTP status codes
          toast.error("An error occurred.");
        }
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Something went wrong");
      console.error("Error logging in:", error);
    }
  };
  return (
    <div className="justify-center flex h-[100vh] items-center">
      {userSahayak? (
        <Navigate to="/Sahayak" />
      ) : isLoading ? (
        <Loading/>
      ) : (
      <Card className="w-[350px]  shadow-md">
        <CardHeader>
          <CardTitle className="flex justify-center space-y-1.5">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid items-center w-full gap-5">
            <Input
              type="tel"
              placeholder="Mobile Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin}>
              <Phone className="w-4 h-4 mr-2" />
              Login as sahayak
            </Button>
            <Link className="flex justify-center" to="/sahayak/signup">
              <Button variant="link">
                Don't have an account yet? Sign up now!
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
      )}
    </div>
  );
}

export default LoginasSahayak;
