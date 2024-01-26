/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Job from "@/interfaces/Job";
import { Badge } from "@/components/ui/badge";
import Loading from "../Loading";
import { useEffect, useState } from "react";
import { useMyContext } from "../MyContext";
import axios from "axios";
import { Link } from "react-router-dom";

interface JobsCardProps {
  FilterBy: string;
  Title: string;
  isLarge: boolean;
}

function JobsCard({ FilterBy, Title, isLarge }: JobsCardProps) {
  const { userLabor } = useMyContext();
  const [Jobs, setJobs] = useState<Job[] | null>(null);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("https://labor-chowk-api.vercel.app/api/vacancy/all", {
        withCredentials: true,
      });

      if (!(response.status === 200)) {
        throw new Error("Failed to fetch jobs");
      }

      const data: Job[] = await response.data;

      if (
        !isLarge &&
        FilterBy === "pincode" &&
        userLabor &&
        userLabor.pincode
      ) {
        const filteredJobs = data.filter(
          (job) => job.areaPincode === userLabor.pincode
        );
        setJobs(filteredJobs);
      } else if (isLarge && !(FilterBy === "None")) {
        const filteredJobs = data.filter(
          (job) =>
            job.title.toLowerCase().includes(FilterBy.toLowerCase())
        );
        setJobs(filteredJobs);
      } else {
        setJobs(data);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
      // Handle error cases, show an error message, etc.
    }
  };

  useEffect(() => {
    fetchJobs(); // Fetch jobs initially
  }, [FilterBy, isLarge, userLabor]);

  return (
    <div className="justify-center flex w-[100vw] items-center my-5 ">
      {Jobs ? (
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
            {Jobs.map((job, index) => (
              <CarouselItem key={index} className="pl-1 basis-1/2 md:basis-1/6">
                <div className="p-2">
                  <Card
                    className={
                      isLarge
                        ? "w-[200px] md:w-[250px] shadow-md ring-2 ring-green-900 ring-opacity-80"
                        : " w-fit h-fit shadow-md ring-2 ring-green-900 ring-opacity-80"
                    }
                  >
                    <CardContent>
                      {isLarge && (
                        <div className="grid items-center w-full gap-4">
                          <div className="flex flex-col space-y-1.5">
                            <Badge
                              variant={
                                
                                  "default"
                              }
                              className="mt-2 w-fit"
                            >
                              New
                            </Badge>
                            <Avatar className="w-10 h-10 shadow-md ring-2 ring-green-900 ring-opacity-80">
                              <AvatarImage  />
                              <AvatarFallback>{job.title[0]}</AvatarFallback>
                            </Avatar>
                            <p>
                              <strong>Need: </strong>
                              {job.title}
                            </p>
                            <p>
                              <strong>Daily: </strong>
                              ₹ {job.dailySalary}
                            </p>
                          </div>
                          <Link to={`/labor/${job._id}`} >
                            <Button className="shadow-md ring-2 ring-green-900 ring-opacity-80"
                            >
                              View details
                            </Button>
                            </Link>
                        </div>
                      )}
                      {!isLarge && (
                        <div className="grid items-center gap-2 w-fit">
                          <div className="flex flex-col ">
                            <p>{job.title}</p>
                            <p>
                              <strong>Daily</strong> ₹{job.dailySalary}
                            </p>
                            <Link to={`/labor/${job._id}`} >
                            <Button className="shadow-md ring-2 ring-green-900 ring-opacity-80"
                            >
                              View details
                            </Button>
                            </Link>
                            
                          </div>
                        </div>
                      )}
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

export default JobsCard;
