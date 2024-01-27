import Labor from "./Labor";

interface Sahayak {
    _id: string;
    name: string;
    password: string;
    pincode: string;
    phoneNumber: string;
    address: string;
    labors: Labor['_id'][];
    profileImage: string;
  }
  
  export default Sahayak;