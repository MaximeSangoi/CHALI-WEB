import { Component } from "@angular/core";
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClrLoadingState } from '@clr/angular';

import { LoginService } from "./login.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html"
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }

  loginLoading: ClrLoadingState = ClrLoadingState.DEFAULT;

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['']
  });

  onSubmit() {
    this.loginLoading = ClrLoadingState.LOADING;
    this.loginService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe({
      next: this.successfullLogin.bind(this),
      error(msg) { console.log('Error Getting Location: ', msg); }
    });
  }

  private successfullLogin() {
    this.loginLoading = ClrLoadingState.DEFAULT;
    this.router.navigate(['/site']);
  }
}
