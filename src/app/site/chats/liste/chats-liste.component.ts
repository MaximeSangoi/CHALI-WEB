import { ClrWizard, ClrWizardPage } from "@clr/angular";
import { Component, ViewChild } from "@angular/core";
import { Chat } from "../chats.model";
import { ChatsService } from "../chats.service";
import { OnInit } from "@angular/core";

@Component({
  selector: "app-chats-liste",
  templateUrl: "./chats-liste.component.html",
  styleUrls: ["./chats-liste.component.css"],
})
export class ChatsListeComponent implements OnInit {
  constructor(private chatsService: ChatsService) { }

  @ViewChild("wizardCatCreation") wizardCatCreation: ClrWizard;

  chats: Chat[];
  isWizardOpen: boolean = false;
  isKnown: string = "";

  ngOnInit() {
    this.getCats();
  }

  setKnownCat(isKnown: string) {
    this.isKnown = isKnown;
  }

  showCreateWizard() {
    this.isWizardOpen = true;
  }

  getCats() {
    this.chatsService.getAll().subscribe((chats) => (this.chats = chats));
  }
}
