import { NgModule } from '@angular/core';
import { ChatsAdoptionsRoutingModule } from './chats-adoptions.routes';
import { ChatsAdoptionsListeComponent } from './liste/chats-adoptions-liste.component';
import { ChatsAdoptionsDetailComponent } from './detail/chats-adoptions-detail.component';

@NgModule({
  imports: [
    ChatsAdoptionsRoutingModule
  ],
  declarations: [
    ChatsAdoptionsListeComponent,
    ChatsAdoptionsDetailComponent
  ]
})
export class ChatsAdoptionsModule { }
