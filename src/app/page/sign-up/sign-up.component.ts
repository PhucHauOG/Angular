import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule ,FormsModule, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CommonModule, NgIf } from '@angular/common';
import { AuthService } from 'src/app/service/auth-service/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, LoginComponent, RouterModule, ReactiveFormsModule, CommonModule, NgIf],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  signUpError: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signUpForm = this.fb.group({
      userName: new FormControl("", [Validators.required, Validators.minLength(5)]),
      Email: new FormControl("", [Validators.required, Validators.minLength(5)]),
      Password: new FormControl("", [Validators.required, Validators.minLength(8)])
    });
  }

  ngOnInit(): void { 
    
  }

  signUp() {
    if (this.signUpForm.valid){
      const {username, email, password} = this.signUpForm.value;
      this.authService.signup(username, email, password).subscribe({
        next: () => {
          this.router.navigate(['/login']);
          this.signUpError = false;
        },
        error: () => {
          this.signUpError = true;
        }
      });
    }
  }
}
