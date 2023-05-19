import { Component, ViewChild } from "@angular/core";
import { ClrWizard, ClrWizardPage } from "@clr/angular";
import { Chat } from "../chats.model";
import { ChatsService } from "../chats.service";

@Component({
  selector: "chats-liste",
  templateUrl: "./chats-liste.component.html",
  styleUrls: ["./chats-liste.component.css"],
})
export class ChatsListeComponent {
  constructor(private chatsService: ChatsService) { }

  @ViewChild("wizardCatCreation") wizardCatCreation: ClrWizard;

  chats: Chat[];
  isWizardOpen: boolean = false;
  today = new Date();
  todayFormatted = `${this.today.getDate()}-${this.today.getMonth() + 1}-${this.today.getFullYear()}`;
  newCat = {
    status: "",
    name: "",
    knownBirthdate: false,
    birthdate: this.todayFormatted,
    approximateAge: [],
    coat: [],
    isTatooed: false,
    tatoo: "",
    microchip: false,
    fiv: "",
    sterilized: false
  }

  ngOnInit() {
    this.getCats();
  }

  setStatusCat(status: string) {
    this.newCat.status = status.toUpperCase();
  }

  setStatusCat(status: string) {
    this.newCat.status = status.toUpperCase();
  }

  showCreateWizard() {
    this.isWizardOpen = true;
  }

  getCats() {
    this.chatsService.getAll().subscribe((chats) => (this.chats = chats));
  }
}
