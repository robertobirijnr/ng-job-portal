import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostJobComponent } from './pages/post-job/post-job.component';
import { JobDetailComponent } from './pages/post-job/job-detail/job-detail.component';
import { LoginComponent } from './pages/Auth/login/login.component';
import { RegisterComponent } from './pages/Auth/register/register.component';

export const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'post-job',
    component:PostJobComponent
  },
  {
    path:'job/:id',
    component:JobDetailComponent
  },
   {
    path:'login',
    component:LoginComponent
  },
   {
    path:'register',
    component:RegisterComponent
  }
];
