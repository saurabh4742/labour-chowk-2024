import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMyContext } from "../MyContext";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "../Loading";
function CreateaLabor() {
  const { userSahayak } = useMyContext();
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneeNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [skills, setSkills] = useState("");
  const [experience,setExperience]=useState("");

  const handleLabor = async () => {
    try {
      setIsLoading(true);

      const response = await axios.post(
        "https://labor-chowk-api.vercel.app/api/auth/labor/register",
        {
            name, phoneNumber,pincode,password,skills,address,experience 
        },
        {
          withCredentials: true,
        }
      );

      setIsLoading(false);
      if (response.status === 201) {
        toast.success(response.data.message);
        const id=response.data.labor._id
        await axios.put(
            `https://labor-chowk-api.vercel.app/api/sahayak/update/${id}`,
            {
                userSahayakid:userSahayak?._id
            },
            {
              withCredentials: true,
            }
          );
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("facing server issue");
    }
  };

  return (
    <div className="flex justify-center w-full mt-4">
      {!userSahayak ? (
        <Navigate to="/SahuserSahayak/login" />
      ) : isLoading ? (
        <Loading />
      ) : (
        <Card className="w-[350px] shadow-md">
          <CardHeader>
            <CardTitle className="flex justify-center space-y-1.5">
              Create a Labor
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
              <Button onClick={handleLabor}>
                <Send className="w-4 h-4 mr-2" />
                Create a labor
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default CreateaLabor;
