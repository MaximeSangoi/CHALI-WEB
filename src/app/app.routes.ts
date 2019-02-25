
import { Routes } from "@angular/router";

import { NotFoundComponent } from "./shared/components/not-found.component";

export const rootRouterConfig: Routes = [
  { path: "home", loadChildren: "./site/site.module#SiteModule" },
  { path: "login", loadChildren: "./login/login.module#LoginModule" },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];