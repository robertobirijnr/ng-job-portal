import { Component } from '@angular/core';
import { jobposts } from '../../services/DummyJobPosts';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 jobposts = jobposts
}
