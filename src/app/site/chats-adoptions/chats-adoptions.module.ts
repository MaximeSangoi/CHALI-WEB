import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClarityModule } from "@clr/angular";
import { CommonModule } from '@angular/common';

import { ChatsAdoptionsListeComponent } from './liste/chats-adoptions-liste.component';
import { ChatsAdoptionsDetailComponent } from './detail/chats-adoptions-detail.component';
import { ChatsAdoptionsComponent } from './chats-adoptions.component';

const chatAdoptionsRoute: Routes = [
  { 
    path: "cats-to-adopt", 
    component: ChatsAdoptionsComponent,
    children: [
      { path: "", redirectTo: "list" },
      { path: "list", component: ChatsAdoptionsListeComponent },
      { path: "detail/:id", component: ChatsAdoptionsDetailComponent },
    ]
  }
];

@NgModule({
  declarations: [
    ChatsAdoptionsComponent,
    ChatsAdoptionsListeComponent,
    ChatsAdoptionsDetailComponent
  ],
  imports: [
    RouterModule.forChild(chatAdoptionsRoute),
    ClarityModule,
    CommonModule
  ]
})
export class ChatsAdoptionsModule { }
