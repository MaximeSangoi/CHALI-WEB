import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatsAdoptionsListeComponent }    from './liste/chats-adoptions-liste.component';
import { ChatsAdoptionsDetailComponent } from './detail/chats-adoptions-detail.component';

const chatAdoptionsRoute: Routes = [
  { path: 'chats-a-adopter',  component: ChatsAdoptionsListeComponent },
  { path: 'chats-a-adopter/:id',  component: ChatsAdoptionsDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(chatAdoptionsRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class ChatsAdoptionsRoutingModule { }