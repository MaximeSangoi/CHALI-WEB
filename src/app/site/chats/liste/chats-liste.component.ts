import { Component } from "@angular/core";
import { Chat } from "../../../shared/models/chat.model";

@Component({
  selector: "chats-liste",
  templateUrl: "./chats-liste.component.html",
  styleUrls: ["./chats-liste.component.css"],
})
export class ChatsListeComponent {
  chats: Chat[] = [
    new Chat(
      "1",
      "Killy",
      new Date("1/1/2010"),
      false,
      "noir",
      false,
      true,
      "",
      true
    ),
    new Chat(
      "2",
      "Winston",
      new Date("1/1/2015"),
      false,
      "tabby roux",
      true,
      true,
      "186",
      false
    ),
  ];
}
