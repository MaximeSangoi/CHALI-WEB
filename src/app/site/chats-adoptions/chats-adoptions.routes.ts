import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatsAdoptionsComponent }    from './chats-adoptions.component';

const chatAdoptionsRoute: Routes = [
  { path: 'chats-a-adopter',  component: ChatsAdoptionsComponent },
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