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
function CreateaVacancy() {
  const { userEmployer } = useMyContext();
  const [isLoading, setIsLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [qualification, setQualification] = useState("");
  const [officeAddress, setOfficeAddress] = useState("");
  const [areaPincode, setAreaPincode] = useState("");
  const [dailySalary, setDailySalary] = useState("");

  const handleVacancy = async () => {
    try {
      setIsLoading(true);

      const response = await axios.post(
        "https://labor-chowk-api.vercel.app/api/vacancy/create",
        {
          title,
          qualification,
          officeAddress,
          areaPincode,
          dailySalary,
        },
        {
          withCredentials: true,
        }
      );

      setIsLoading(false);
      if (response.status === 201) {
        toast.success(response.data.message);
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
      {!userEmployer ? (
        <Navigate to="/employer/login" />
      ) : isLoading ? (
        <Loading />
      ) : (
        <Card className="w-[350px] shadow-md ring-2 ring-green-400 ring-opacity-200">
          <CardHeader>
            <CardTitle className="flex justify-center space-y-1.5">
              Need an employee
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid items-center w-full gap-5">
              <Input
                type="text"
                placeholder="Need"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Qualification"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Office Address"
                value={officeAddress}
                onChange={(e) => setOfficeAddress(e.target.value)}
              />
              <Input
                type="number"
                placeholder="Area Pincode"
                value={areaPincode}
                onChange={(e) => setAreaPincode(e.target.value)}
              />
              <Input
                type="number"
                placeholder="Daily Salary in ₹"
                value={dailySalary}
                onChange={(e) => setDailySalary(e.target.value)}
              />
              <Button onClick={handleVacancy}>
                <Send className="w-4 h-4 mr-2" />
                Create a vacancy
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default CreateaVacancy;
