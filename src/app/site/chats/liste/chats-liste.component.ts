import { Component, ViewChild } from "@angular/core";
import { ClrWizard } from "@clr/angular";
import { Chat } from "../chats.model";
import { ChatsService } from "../chats.service";

@Component({
  selector: "chats-liste",
  templateUrl: "./chats-liste.component.html",
  styleUrls: ["./chats-liste.component.css"],
})
export class ChatsListeComponent {
  constructor(private chatsService: ChatsService) {}

  @ViewChild("wizardlg") wizardLarge: ClrWizard;

  chats: Chat[];
  lgOpen: boolean = false;

  ngOnInit() {
    this.getCats();
  }

  showCreateWizard() {
    this.lgOpen = true;
  }

  getCats() {
    this.chatsService.getAll().subscribe((chats) => (this.chats = chats));
  }
}
