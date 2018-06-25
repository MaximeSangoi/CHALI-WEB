import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatsAdoptionsComponent } from './chats-adoptions.component';
import { ChatsAdoptionsListeComponent } from './liste/chats-adoptions-liste.component';
import { ChatsAdoptionsDetailComponent } from './detail/chats-adoptions-detail.component';

const chatAdoptionsRoute: Routes = [
    { path: 'chats-a-adopter', component: ChatsAdoptionsComponent },
    { path: 'chats-a-adopter/liste', component: ChatsAdoptionsListeComponent },
    { path: 'chats-a-adopter/detail/:id', component: ChatsAdoptionsDetailComponent }
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