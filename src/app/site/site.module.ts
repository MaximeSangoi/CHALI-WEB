import { RouterModule, Routes } from "@angular/router";
import { AccueilComponent } from "./accueil/accueil.component";
import { ClarityModule } from "@clr/angular";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SiteComponent } from "./site.component";

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
export class SiteModule { }
