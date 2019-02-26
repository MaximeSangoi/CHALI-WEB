import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "chats-adoptions-detail",
  templateUrl: "./chats-adoptions-detail.component.html",
  styleUrls: ["./chats-adoptions-detail.component.css"]
})
export class ChatsAdoptionsDetailComponent {
  constructor(private route: ActivatedRoute) {

  }
}
