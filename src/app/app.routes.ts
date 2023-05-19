
import { Routes } from "@angular/router";

import { LoginGuard } from "./login/login.guard";
import { NotFoundComponent } from "./shared/components/not-found.component";

export const rootRouterConfig: Routes = [
  { path: "site", loadChildren: () => import('./site/site.module').then(m => m.SiteModule), canActivate: [LoginGuard] },
  { path: "login", loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];