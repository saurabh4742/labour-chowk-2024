/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useMyContext } from "../MyContext";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import { Badge } from "@/components/ui/badge";
import axios from "axios";
import { Link } from "react-router-dom";
import Labor from "@/interfaces/Labor";
import fallbackImages from "../../../image/fallback";
interface LaborsCardProps {
  FilterBy: string;
  Title: string;
  isLarge: boolean;
}

function LaborsCard({ FilterBy, Title, isLarge }: LaborsCardProps) {
  const { userEmployer } = useMyContext();
  const [Labors, setLabors] = useState<Labor[]>([]);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(
        "https://labor-chowk-api.vercel.app/api/labor/all",
        {
          withCredentials: true,
        }
      );
      if (response.status !== 200) {
        throw new Error("Failed to fetch jobs");
      }
      const data: Labor[] = response.data;

      if (!isLarge && FilterBy === "pincode" && userEmployer && userEmployer.pincode) {
        const filteredLabors = data.filter(
          (labor) => labor.pincode === userEmployer.pincode
        );
        setLabors(filteredLabors);
      } else if (isLarge && !(FilterBy === "None")) {
        const filteredLabors = data.filter((labor) =>
          labor.skills.map((skill)=>{
              skill.toLowerCase().includes(FilterBy.toLowerCase())
          }));
        setLabors(filteredLabors);
      } else {
        setLabors(data);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
      // Handle error cases, show an error message, etc.
    }
  };

  useEffect(() => {
    fetchJobs(); // Fetch jobs initially
  }, [FilterBy, isLarge, userEmployer]);

  return (
    <div className="justify-center flex w-[100vw] items-center my-5 ">
      {Labors.length > 0 ? (
        <Carousel className="flex-col w-full ">
          {/*max-w-sm */}
          {!isLarge && (
            <p className="flex justify-center my-3 text-xl bg-white shadow-md ring-2 ring-gray-600 ring-opacity-40">
              {Title}
            </p>
          )}
          <CarouselContent
            className={
              isLarge ? "gap-5 -ml-1 md:gap-1 " : "gap-0 -ml-1 md:gap-0  "
            }
          >
            {Labors.map((labor) => (
              <CarouselItem key={labor._id} className="pl-1 basis-1/2 md:basis-1/6">
                <div className="p-2">
                  <Card
                    className={
                      isLarge
                        ? "w-[200px] md:w-[250px] "
                        : " w-fit h-fit "
                    }
                  >
                    <CardContent>
                      
                        <div className="grid items-center w-full gap-4">
                          <div className="flex flex-col space-y-1.5">
                            <Badge variant={"default"} className="mt-2 w-fit">
                              {labor.availability ? "available" : "busy"}
                            </Badge>
                            <Avatar className=" w-14 h-14 ring-2">
                              <AvatarImage src={labor.profileImage? labor.profileImage:fallbackImages.default} />
                              <AvatarFallback>{labor.name[0]}</AvatarFallback>
                            </Avatar>
                            <p>
                              <strong>Job: </strong>
                              {labor.skills}
                            </p>
                            <p>
                              <strong>Experience: </strong>
                              {labor.experience} years
                            </p>
                          </div>
                          <Link to={`/employer/${labor._id}`}>
                            <Button >View details</Button>
                          </Link>
                        </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      ) : (
        <>
          <Loading />
        </>
      )}
    </div>
  );
}

export default LaborsCard;
