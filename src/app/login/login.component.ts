import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ClrLoadingState } from "@clr/angular";
import { tap } from "rxjs/operators";

import { LoginService } from "./login.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
})
export class LoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  loginLoading: ClrLoadingState = ClrLoadingState.DEFAULT;
  error: null;

  loginForm = this.formBuilder.group({
    username: ["", Validators.required],
    password: [""],
  });

  onSubmit() {
    this.loginLoading = ClrLoadingState.LOADING;
    this.error = null;
    this.loginService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        (response: any) => {
          this.loginLoading = ClrLoadingState.DEFAULT;
          localStorage.setItem("tokenID", response.access_token);
          this.router.navigate(["site"]);
        },
        (error: any) => {
          this.loginLoading = ClrLoadingState.DEFAULT;
          this.error = error.message;
        }
      );
  }
}
