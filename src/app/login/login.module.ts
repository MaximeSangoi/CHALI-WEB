import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClarityModule } from "@clr/angular";

import { LoginComponent } from "./login.component";

const loginRoutes: Routes = [
  { path: "", component: LoginComponent }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(loginRoutes),
    ReactiveFormsModule,
    CommonModule,
    ClarityModule
  ],
  providers: []
})
export class LoginModule { }
