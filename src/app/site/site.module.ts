import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ClarityModule } from "@clr/angular";

import { SiteComponent } from "./site.component";
import { ChatsAdoptionsModule } from "./chats-adoptions/chats-adoptions.module";


@NgModule({
  declarations: [
    SiteComponent
  ],
  imports: [RouterModule, ClarityModule, ChatsAdoptionsModule],
  providers: []
})
export class SiteModule { }
