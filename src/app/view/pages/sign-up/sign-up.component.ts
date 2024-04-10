import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AuthService } from '../../../controller/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, RouterLink, NgIf],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {}
  isLoading = false;
  isPasswordShown = false;

  signUpForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    contactno: ['', Validators.required],
    role: ['', Validators.required],
    password: ['', Validators.required]
  });

  togglePasswordVisisbility() {
    this.isPasswordShown = !this.isPasswordShown;
  }

  signUp() {
    this.isLoading = true;
    if (this.signUpForm.valid) {
      const { name, email, password, contactno, role } = this.signUpForm.value;
      if (name && email && password) {
          const signUpData = {
              UserId: 5,
              Name: name,
              Email: email,
              Password: password,
              ContactNo: contactno,
              Role: role
          };
          this.authService.register(signUpData).subscribe({
             next: (res) => {
                  console.log(res);
              },
              error: (err) => {
                  console.log(err);
              }
            }
          )
      }
  }
  
  }
}
