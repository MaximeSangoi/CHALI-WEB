import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "chats-detail",
  templateUrl: "./chats-detail.component.html",
  styleUrls: ["./chats-detail.component.css"],
})
export class ChatsDetailComponent {
  constructor(private route: ActivatedRoute) {}
}
