import { NgModule } from '@angular/core';
import { ChatsAdoptionsRoutingModule } from './chats-adoptions.routes';
import { ChatsAdoptionsComponent } from './chats-adoptions.component';
import { ChatsAdoptionsListeComponent } from './liste/chats-adoptions-liste.component';
import { ChatsAdoptionsDetailComponent } from './detail/chats-adoptions-detail.component';

@NgModule({
  imports: [
    ChatsAdoptionsRoutingModule
  ],
  declarations: [
    ChatsAdoptionsComponent,
    ChatsAdoptionsListeComponent,
    ChatsAdoptionsDetailComponent
  ]
})
export class ChatsAdoptionsModule { }
