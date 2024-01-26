/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

function Test() {
  return (
    <div className="justify-center flex w-[100vw] items-center my-5 ">
      <Carousel className="flex-col w-full ">
        <CarouselContent className="gap-5 -ml-1 md:gap-1 ">
          <CarouselItem className="pl-1 basis-1/2 md:basis-1/6">
            <div className="p-2">
              <Card className=" w-fit h-fit shadow-md ring-2 ring-green-400 ring-opacity-200">
                <CardContent>
                  <div className="grid items-center w-full gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Badge variant={"default"} className="mt-2 w-fit">
                        available
                      </Badge>
                      <Avatar className=" w-14 h-14 shadow-md ring-2 ring-green-900 ring-opacity-80">
                        <AvatarImage />
                        <AvatarFallback>hi</AvatarFallback>
                      </Avatar>
                      <p>
                        <strong>Job: </strong>
                      </p>
                      <p>
                        <strong>Experience: </strong>
                        years
                      </p>
                    </div>

                    <Button className="shadow-md ring-2 ring-green-900 ring-opacity-80">View details</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Test;
