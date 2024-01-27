import { Speech, User, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import toast from "react-hot-toast";
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
    <Card className=" w-[350px] shadow-md">
      <CardHeader>
        <CardTitle className="flex justify-center space-y-1.5">
          Welcome to Labour Chowk
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
                Continue as Labour
              </Button>
            </Link>
          </div>
          <div className="flex flex-col space-y-1.5">
          <Link className="flex justify-center" to="/home" >
            <Button onClick={()=>{
              toast.success("Feature coming soon!")
            }}>
              <Speech className="w-4 h-4 mr-2" /> Continue as Sahayak
            </Button>
            </Link>

          </div>
          <div className="flex flex-col space-y-1.5">
            <Link className="flex justify-center" to="/employer">
              <Button>
                <Users className="w-4 h-4 mr-2" /> Continue as Employer
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default LandingPage;
