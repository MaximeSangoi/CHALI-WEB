import { Component } from "@angular/core";
import { Chat } from "../../../shared/models/chat.model";

@Component({
  selector: "chats-adoptions-liste",
  templateUrl: "./chats-adoptions-liste.component.html",
  styleUrls: ["./chats-adoptions-liste.component.css"]
})
export class ChatsAdoptionsListeComponent {

  chatsAdoptions:Chat[] = [
    new Chat("Killy", new Date("1/1/2010"), false, "noir", false, true, "", true),
    new Chat("Winston", new Date("1/1/2015"), false, "tabby roux", true, true, "186", false)
  ]
}
