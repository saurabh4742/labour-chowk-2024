import { Phone, ToggleLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, Navigate } from "react-router-dom";
import { useMyContext } from "../MyContext";
import { useState } from "react";
import axios from "axios";
import Loading from "../Loading";
import toast from "react-hot-toast";
function SignupasLabor() {
  const { userLabor, setUserLabor } = useMyContext();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneeNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [skills, setSkills] = useState("");
  const [experience,setExperience]=useState("");
  const handleSignup = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://labor-chowk-api.vercel.app/api/auth/labor/register",
        { name, phoneNumber,pincode,password,skills,address,experience }, {
          withCredentials: true, // Include credentials in the request
        });
      setIsLoading(true);
      if (response.status == 201) {
        const data = response.data.labor;
        toast.success(response.data.message)
        return setUserLabor(data);
      }
      toast.error(response.data.error)
    } catch (error) {
      toast.error("Something Went Wrong")
      setIsLoading(false);
    }
  };
  return (
    <div className="justify-center flex h-[100vh] items-center">
      {userLabor? (
        <Navigate to="/labor" />
      ) : isLoading ? (
        <Loading/>
      ) :  (
        <Card className="w-[350px] shadow-md">
          <CardHeader>
            <Link className="flex justify-center" to="/employer/signup">
              <Button>
                <ToggleLeft className="w-4 h-4 mr-2" />
                Switch to employer
              </Button>
            </Link>
            <CardTitle className="flex justify-center space-y-1.5">
              Signup
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid items-center w-full gap-5">
              <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="tel"
                placeholder="Mobile Number"
                value={phoneNumber}
                onChange={(e) => setPhoneeNumber(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
              <Input
                type="number"
                placeholder="Area Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Experience in years"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={handleSignup}>
                <Phone className="w-4 h-4 mr-2" />
                Signup as labor
              </Button>
              <Link className="flex justify-center" to="/labor/login">
                <Button variant="link">
                  Already have an account? Login now!
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default SignupasLabor;
