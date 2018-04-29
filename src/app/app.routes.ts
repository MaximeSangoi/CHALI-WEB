
import { Routes } from "@angular/router";

import { SiteComponent } from "./site/site.component";
import { LoginComponent } from "./login/login.component";

export const rootRouterConfig: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: SiteComponent },
  { path: "login", component: LoginComponent },
];