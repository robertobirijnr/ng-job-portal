import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { jobposts } from '../../../services/DummyJobPosts';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})

export class JobDetailComponent implements OnInit {

 jobDetails:any;

 constructor(private route: ActivatedRoute){}

 ngOnInit(): void {
const jobId = Number(this.route.snapshot.paramMap.get('id'));

 this.getJobDetails(jobId)
 }

 getJobDetails(id:number):void{
  this.jobDetails = jobposts.find(job=>job.id == id)
 }
}
