import Employer from './Employer'; // Import the Employer interface path

// Interface for Job model
interface Job extends Document {
  _id: string; // Assuming MongoDB automatically generates the _id field
  title: string;
  qualification: string;
  officeAddress: string;
  areaPincode: string;
  dailySalary: number;
  employer: Employer['_id']; // Reference to Employer _id
  // Add other fields if any
}

export default Job;