import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Job } from './job.model';

@Component({
  selector: 'app-post-job',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-job.component.html',
  styleUrl: './post-job.component.css'
})
export class PostJobComponent {
  title =''
  description =''
  salary= 0
  job_location = ''
  isRemote = true
  job_type =''
  qualifications = []
  company_name = ''
  deadline = new Date()
   userId= ''

  createJob(){
    const payload:Job = {
      title: this.title,
      description: this.description,
      salary: this.salary,
      job_location : this.job_location,
      isRemote :this.isRemote,
      job_type : this.job_type,
      qualifications : this.qualifications,
      company_name : this.company_name,
      deadline : this.deadline,
      userId: this. userId
        }

        console.log(payload)
  }
}
