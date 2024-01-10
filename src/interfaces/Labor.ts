// TypeScript definition for Labor model
interface Labor {
    _id: string; // Assuming MongoDB automatically generates the _id field
    name: string;
    password: string;
    phoneNumber: string;
    pincode: string;
    address: string;
    skills: string[];
    experience: string;
    availability: boolean; // Assuming availability is an array of booleans
    // Add other fields if any
  }
  
  export default Labor;