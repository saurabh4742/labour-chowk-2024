import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function LaborsCard(param) {
  return (
    <div className="justify-center flex w-[100vw] items-center my-5 ">
    {param.Workers?<Carousel className="flex-col w-full ">
        {/*max-w-sm */}
        {!param.isLarge && (
          <p className="flex justify-center my-3 text-xl bg-white shadow-md ring-2 ring-gray-900 ring-opacity-40">
            {param.Title}
          </p>
        )}
        <CarouselContent
          className={
            param.isLarge ? "gap-5 -ml-1 md:gap-1 " : "gap-0 -ml-1 md:gap-0  "
          }
        >
          {param.Workers.map((worker, index) => (
            <CarouselItem key={index} className="pl-1 basis-1/2 md:basis-1/6">
              <div className="p-2">
                <Card
                  className={
                    param.isLarge
                      ? "w-[200px] md:w-[250px] bg-white rounded-lg  ring-2 ring-gray-900 ring-opacity-40 shadow-md"
                      : "bg-white rounded-lg  ring-2 ring-gray-900 ring-opacity-40 shadow-md w-fit h-fit"
                  }
                >
                  <CardContent>
                    {param.isLarge && (
                      <div className="grid items-center w-full gap-4">
                        <div className="flex flex-col space-y-1.5">
                          <>
                            <Avatar className="w-10 h-10 rounded-none">
                              <AvatarImage src={worker.imageUrl} />
                              <AvatarFallback>
                                {worker.profession}
                              </AvatarFallback>
                            </Avatar>
                          </>
                          <p>
                            <strong>Job: </strong>
                            {worker.profession}
                          </p>
                          <p>
                            <strong>Experince: </strong>
                            {worker.experience} year
                          </p>
                        </div>
                        <Button
                          //Link to view labor
                        >
                          View details
                        </Button>
                      </div>
                    )}
                    {!param.isLarge && (
                      <div className="grid items-center gap-2 w-fit">
                        <div className="flex flex-col ">
                          <p>
                            <strong>Prof</strong>: {worker.profession}
                          </p>
                          <p>
                            <strong>Exp</strong>: {worker.experience} years
                          </p>
                          <Button
                            //Link to view labor
                          >
                            View
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>:<>Fetching.....</>}
    </div>
  );
}

export default LaborsCard;
