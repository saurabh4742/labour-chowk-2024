import { User, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <Card className=" w-[350px] bg-white shadow-md ring-2 ring-gray-900 ring-opacity-40">
      <CardHeader>
        <CardTitle className="flex justify-center space-y-1.5">
          Welcome to Labor Chowk
        </CardTitle>
        <CardDescription className="flex justify-center space-y-1.5">
          Dive into new opportunities with one-click.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid items-center w-full gap-5">
          <div className="flex justify-center h-20 space-y-1.5">
            <Avatar className="w-20 h-20">
              <AvatarImage src="https://i.ibb.co/DMv1hxq/logo.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Link className="flex justify-center" to="/labor">
              <Button>
                <User className="w-4 h-4 mr-2" />
                Continue as labor
              </Button>
            </Link>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Link className="flex justify-center" to="/employer">
              <Button>
                <Users className="w-4 h-4 mr-2" /> Continue as employer
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default LandingPage;
