import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
function CreateaVacancy() {
  return (
    <div className="justify-center flex h-[100vh] items-center ">
      <Card className="w-[350px] ">
        <CardHeader >
          <CardTitle className="flex justify-center space-y-1.5">
            Need an employe
          </CardTitle>
        </CardHeader>
        <CardContent >
          <div className="grid items-center w-full gap-5">
            <Input  type="text" placeholder="Need" />
            <Input type="text" placeholder="Qualification" />
            <Input type="text" placeholder="Office Address" />
            <Input type="number" placeholder="Area Pincode" />
            <Input type="number" placeholder="Daily Salary in ₹" />            
            <Button>
              <Send className="w-4 h-4 mr-2" />
              Create a vacancy
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CreateaVacancy