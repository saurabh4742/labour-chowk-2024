import { Phone,ToggleLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
function SignupasLabor({setHaveanAccount,setisLabor,setisEmployer}) {
  const handleSignup=()=>{
    setHaveanAccount(true);
  }
  return (
    <div className="justify-center flex h-[100vh] items-center">
      <Card className="w-[350px] bg-white shadow-md ring-2 ring-gray-900 ring-opacity-40">
        <CardHeader>
        <Button onClick={()=>{
          setisLabor(false)
          setisEmployer(true)
        }}>
              <ToggleLeft className="w-4 h-4 mr-2" />
              Switch to employer
            </Button>
          <CardTitle className="flex justify-center space-y-1.5">
            Signup
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid items-center w-full gap-5">
            <Input type="text" placeholder="Name" />
            <Input type="tel" placeholder="Mobile Number" />
            <Input type="number" placeholder="Area Pincode" />
            <Input type="text" placeholder="Address" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm Password" />
            <Button onClick={handleSignup}>
              <Phone className="w-4 h-4 mr-2" />
              Signup as labor
            </Button>
            <Button onClick={handleSignup} variant="link">
            Already have an account? Login now!
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SignupasLabor