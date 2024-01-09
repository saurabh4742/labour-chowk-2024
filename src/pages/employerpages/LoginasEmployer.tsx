import { Phone, ToggleRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
function LoginasEmployer() {
  const handleLogin = () => {
    "yes";
  };
  return (
    <div className="justify-center flex h-[100vh] items-center">
      <Card className="w-[350px] bg-white shadow-md ring-2 ring-gray-900 ring-opacity-40 ">
        <CardHeader>
          <Link className="flex justify-center" to="/labor/login">
            <Button>
              <ToggleRight className="w-4 h-4 mr-2" />
              Switch to labor
            </Button>
          </Link>

          <CardTitle className="flex justify-center space-y-1.5">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid items-center w-full gap-5">
            <Input type="tel" placeholder="Mobile Number" />
            <Input type="password" placeholder="Password" />
            <Button onClick={handleLogin}>
              <Phone className="w-4 h-4 mr-2" />
              Login as employer
            </Button>
            <Link className="flex justify-center" to="/employer/signup">
              <Button variant="link">
                Don't have an account yet? Sign up now!
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginasEmployer;
