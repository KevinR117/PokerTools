import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    })
  }

  onSubmit() {
    if (this.authService.isAuth) {
      this.authService.signOut();
    } else
    {
      const email = this.signInForm.get('email').value;
      const password = this.signInForm.get('password').value;

      this.authService.signIn(email, password).then(
        () => {
          this.router.navigate(['/ranges']);
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    }
  }

  getAuth() {
    return this.authService.isAuth;
  }

}
