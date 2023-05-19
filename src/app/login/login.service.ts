import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {
    if (localStorage.getItem("tokenID")) {
      this.isLoggedIn = true;
    }
  }

  isLoggedIn = false;
  redirectUrl: string;

  login(username: string, password: string) {
    return this.http
      .post("http://localhost:3000/auth/login", {
        username,
        password,
      })
      .pipe(
        tap(() => {
          this.isLoggedIn = true;
        })
      );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
