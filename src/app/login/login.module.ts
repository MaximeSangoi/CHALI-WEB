import { RouterModule, Routes } from "@angular/router";
import { ClarityModule } from "@clr/angular";
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./login.component";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';

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
