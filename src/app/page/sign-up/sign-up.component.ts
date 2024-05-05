import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  signupUser: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: ''
  };

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signupUser = JSON.parse(localData);
    }
  }


  onSignUp() {
    this.signupUser.push(this.signupObj);
    localStorage.setItem('signUpUser', JSON.stringify(this.signupUser))
    this.signupObj = {
      userName: '',
      email: '',
      password: ''
    };
  }
}
