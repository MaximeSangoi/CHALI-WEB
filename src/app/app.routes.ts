
import { Routes } from "@angular/router";

import { LoginGuard } from "./login/login.guard";
import { NotFoundComponent } from "./shared/components/not-found.component";

export const rootRouterConfig: Routes = [
  { path: "site", loadChildren: "./site/site.module#SiteModule", canActivate: [LoginGuard] },
  { path: "login", loadChildren: "./login/login.module#LoginModule" },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];