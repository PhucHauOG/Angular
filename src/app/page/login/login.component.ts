import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, SignUpComponent, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  signupUser: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: ''
  };

  loginObj: any = {
    userName: '',
    password: ''
  };

  constructor() {

  }

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

  onLogin() {
    const IsUserExist = this.signupUser.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
    if (IsUserExist != undefined) {
      alert('User Login Successfully');
    } else {
      alert('Wrong Credential');
    }
  }
}
