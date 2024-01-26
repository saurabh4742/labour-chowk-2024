import Employer from './Employer';

// Interface for Job model
interface Job extends Document {
  _id: string;
  title: string;
  qualification: string;
  officeAddress: string;
  areaPincode: string;
  dailySalary: number;
  employer: Employer['_id']; // Reference to Employer _id
  createdAt: Date;
}

export default Job;