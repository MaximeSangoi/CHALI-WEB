import { RouterModule, Routes } from "@angular/router";
import { ChatsComponent } from "./chats.component";
import { ChatsDetailComponent } from "./detail/chats-detail.component";
import { ChatsListeComponent } from "./liste/chats-liste.component";
import { ClarityModule } from "@clr/angular";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

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
export class ChatsModule { }
