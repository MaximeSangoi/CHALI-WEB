import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClarityModule } from "@clr/angular";
import { CommonModule } from "@angular/common";

import { ChatsListeComponent } from "./liste/chats-liste.component";
import { ChatsDetailComponent } from "./detail/chats-detail.component";
import { ChatsComponent } from "./chats.component";
import { FormsModule } from "@angular/forms";

const chatRoute: Routes = [
  {
    path: "",
    component: ChatsComponent,
    children: [
      { path: "detail/:toto", component: ChatsDetailComponent },
      { path: "", component: ChatsListeComponent },
    ],
  },
];

@NgModule({
  declarations: [ChatsComponent, ChatsListeComponent, ChatsDetailComponent],
  imports: [
    RouterModule.forChild(chatRoute),
    ClarityModule,
    CommonModule,
    FormsModule,
  ],
})
export class ChatsModule {}
