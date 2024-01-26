import { Send, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "../Loading";
import Job from "@/interfaces/Job";
import { useMyContext } from "../MyContext";
import { Navigate } from "react-router-dom";

function ManageVacancy() {
  const { userEmployer } = useMyContext();
  const [isLoading, setIsLoading] = useState(true);
  const [vacancies, setVacancies] = useState<Job[]>([]);

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const response = await axios.get(
          "https://labor-chowk-api.vercel.app/api/vacancy/my",
          {
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          setVacancies(response.data);
        } else {
          toast.error(response.data.error);
        }
      } catch (error) {
        toast.error("Facing server issue");
      } finally {
        setIsLoading(false);
      }
    };

    fetchVacancies();
  }, []);

  const deleteVacancy = async (vacancy: Job) => {
    try {
        setIsLoading(true)
      const response = await axios.delete(
        `https://labor-chowk-api.vercel.app/api/vacancy/delete/${vacancy._id}`,
        {
          withCredentials: true,
        }
      );
      setIsLoading(false)

      if (response.status === 200) {
        toast.success(response.data.message + " please refresh");
        setVacancies((prevVacancies) =>
          prevVacancies.filter((v) => v._id !== vacancy._id)
        );
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      toast.error("Facing server issue");
      setIsLoading(false)
    }
  };

  return !userEmployer ? (
    <Navigate to="/employer/login" />
  ) : isLoading ? (
    <Loading />
  ) : (
    <div className="flex flex-wrap justify-center w-full gap-5 mt-4">
      {vacancies.map((vacancy) => (
        <Card key={vacancy._id} className="md:w-[350px] w-[300px] shadow-md">
          <CardHeader>
            <CardTitle className="flex justify-center space-y-1.5">
            Created on {new Date(vacancy.createdAt).toLocaleString()}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid items-center w-full gap-5">
              <p>
                <strong>Job: </strong>
                {vacancy.title}
              </p>
              <p>
                <strong>Qualification: </strong>
                {vacancy.qualification}
              </p>
              <p>
                <strong>Office Address: </strong>
                {vacancy.officeAddress}
              </p>
              <p>
                <strong>Area Pincode: </strong>
                {vacancy.areaPincode}
              </p>
              <p>
                <strong>Daily Salary: </strong>
                {vacancy.dailySalary}
              </p>
              <Button onClick={()=>{
                toast.success("Coming Soon stay tuned!!")
              }}>
                <Send className="w-4 h-4 mr-2" />
                View Responses
              </Button>
              <Button
                variant="destructive"
                onClick={() => deleteVacancy(vacancy)}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default ManageVacancy;
