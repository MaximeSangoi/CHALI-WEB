import { Injectable } from "@angular/core";
import { Chat } from "./chats.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ChatsService {
  constructor(private http: HttpClient) {}

  private apiURL: "http://localhost:3000/cats";

  create(chat: Chat) {
    return this.http.post<Chat>(this.apiURL, chat);
  }

  getAll() {
    return this.http.get<Chat[]>("http://localhost:3000/cats");
  }

  getById(idChat) {
    return this.http.get<Chat>(this.apiURL + "/" + idChat);
  }

  edit(idChat, chat) {
    return this.http.post<Chat>(this.apiURL + "/edit/" + idChat, chat);
  }

  remove(idChat) {
    return this.http.get(this.apiURL + "/remove/" + idChat);
  }
}
