import { useState } from 'react';
import { Phone, ToggleLeft } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, Navigate } from 'react-router-dom';
import { useMyContext } from '../MyContext';
import axios from 'axios';
import Loading from '../Loading';
import toast from "react-hot-toast"
function LoginasLabor() {
  const { userLabor, setUserLabor } = useMyContext();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New loading state

  const handleLogin = async () => {
    try {
      setIsLoading(true); // Set loading to true when starting the request

      const response = await axios.post('https://labor-chowk-api.vercel.app/api/auth/labor/login', {
      phoneNumber,
      password,
    }, {
      withCredentials: true, // Include credentials in the request
    });
      let labor = response.data.labor;
      setIsLoading(false); // Set loading to false after receiving the response
      if (response.status === 200) {
         labor = response.data.labor;
         toast.success(response.data.message)
        setUserLabor(labor);
      } else {
        toast.error(response.data.error)
      }
    } catch (error) {
      toast.error("Something Went Wrong")
      setIsLoading(false); // Set loading to false if an error occurs
    }
  };

  return (
    <div className="justify-center flex h-[100vh] items-center">
      {userLabor ? (
        <Navigate to="/labor" />
      ) : isLoading ? (
        <Loading/>
      ) : (
        <Card className="w-[350px] bg-white shadow-md ring-2 ring-gray-900 ring-opacity-40">
          <CardHeader>
            <Link className="flex justify-center" to="/employer/login">
              <Button>
                <ToggleLeft className="w-4 h-4 mr-2" />
                Switch to employer
              </Button>
            </Link>
            <CardTitle className="flex justify-center space-y-1.5">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid items-center w-full gap-5">
              <Input
                type="tel"
                placeholder="Mobile Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={handleLogin}>
                <Phone className="w-4 h-4 mr-2" />
                Login as labor
              </Button>
              <Link className="flex justify-center" to="/labor/signup">
                <Button variant="link">Don't have an account yet? Sign up now!</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default LoginasLabor;
