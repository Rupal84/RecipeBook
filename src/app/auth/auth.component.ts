import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

import {AuthResponseData} from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  isLoginMode = false;
  isLoading = false;
  error: string = null;
  authObs: Observable<AuthResponseData>;

  onSwitchMode () {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {
    if(!authForm.valid) {
      return;
    }
    const email = authForm.value.email;
    const password = authForm.value.password;
    this.isLoading = true;
    if(this.isLoginMode) {
     this.authObs = this.authService.login(email, password);
    } else {
    this.authObs = this.authService.signUp(email, password)
    }    
    this.authObs.subscribe(respData => {
      console.log(respData);
      this.isLoading = false;
      this.router.navigate(['/recipes']);
    }, errorMessage=> {
      console.log(errorMessage);
      this.error = errorMessage;
      this.isLoading = false;
    });
    authForm.reset();
  }

  ngOnInit(): void {
  }

}
