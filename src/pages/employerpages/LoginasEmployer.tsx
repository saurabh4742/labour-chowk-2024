import { Phone,ToggleRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
function LoginasEmployer({setisLogin,setHaveanAccount,setisLabor,setisEmployer}) {
  const handleLogin=()=>{
    setisLogin(true)
  }
  const handleSignup=()=>{
    setHaveanAccount(false);
  }
  return (
    <div className="justify-center flex h-[100vh] items-center">
      <Card className="w-[350px] bg-white shadow-md ring-2 ring-gray-900 ring-opacity-40 ">
        <CardHeader>
        <Button onClick={()=>{
          setisLabor(true)
          setisEmployer(false)
        }}>
              <ToggleRight className="w-4 h-4 mr-2" />
              Switch to labor
            </Button>
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
            <Button onClick={handleSignup} variant="link">
              Don't have an account yet? Sign up now!
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginasEmployer