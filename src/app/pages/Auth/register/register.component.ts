import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './register.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  firstname =''
  lastname = ''
  email = ''
  password = ''
  confirm_password = ''

  Register(){
    const payload:User = {
      firstname:this.firstname,
      lastname:this.lastname,
      email: this.email,
      password:this.password,
      confirm_password: this.confirm_password
    }

    console.log(payload)
  }
}
