import { Routes } from "@angular/router";


export const rootRouterConfig: Routes = [
  { path: "", loadChildren: './site/chats-adoptions.module#ChatsAdoptionsModule' },
];