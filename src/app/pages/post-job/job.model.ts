export interface Job {
  title: string;
  description: string;
  salary: number;
  job_location: string;
  isRemote: boolean;
  job_type: string;
  qualifications: string[];
  company_name: string;
  deadline: Date;
  userId: string;
}
