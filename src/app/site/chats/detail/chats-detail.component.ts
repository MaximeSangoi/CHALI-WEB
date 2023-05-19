import { ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";

@Component({
  selector: "app-chats-detail",
  templateUrl: "./chats-detail.component.html",
  styleUrls: ["./chats-detail.component.css"],
})
export class ChatsDetailComponent {
  constructor(private route: ActivatedRoute) { }
}
