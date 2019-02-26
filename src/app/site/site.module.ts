import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ClarityModule } from "@clr/angular";

import { SiteComponent } from "./site.component";

const siteRouterConfig: Routes = [
  { 
    path: "", 
    component: SiteComponent,
    children: [
      { path: "", loadChildren: "./chats-adoptions/chats-adoptions.module#ChatsAdoptionsModule" }
    ]
  }
];

@NgModule({
  declarations: [SiteComponent],
  imports: [
    RouterModule.forChild(siteRouterConfig), 
    ClarityModule,
    CommonModule
  ],
  providers: []
})
export class SiteModule { }
