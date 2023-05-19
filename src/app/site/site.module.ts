import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ClarityModule } from "@clr/angular";

import { SiteComponent } from "./site.component";
import { AccueilComponent } from "./accueil/accueil.component";

const siteRouterConfig: Routes = [
  {
    path: "",
    component: SiteComponent,
    children: [
      { path: "home", component: AccueilComponent },
      { path: "chats", loadChildren: () => import('./chats/chats.module').then(m => m.ChatsModule) },
      { path: "", redirectTo: "home" },
    ],
  },
];

@NgModule({
  declarations: [SiteComponent, AccueilComponent],
  imports: [
    RouterModule.forChild(siteRouterConfig),
    ClarityModule,
    CommonModule,
  ],
  providers: [],
})
export class SiteModule {}
