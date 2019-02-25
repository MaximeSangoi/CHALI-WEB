import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login.component";

const loginRoutes: Routes = [
  { path: "", component: LoginComponent }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [RouterModule.forChild(loginRoutes)],
  providers: []
})
export class LoginModule { }
