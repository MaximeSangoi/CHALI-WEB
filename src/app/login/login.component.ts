import { ClrLoadingState } from "@clr/angular";
import { Component } from "@angular/core";
import { LoginService } from "./login.service";
import { Router } from "@angular/router";
import { UntypedFormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent {
  constructor(
    private formBuilder: UntypedFormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

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
