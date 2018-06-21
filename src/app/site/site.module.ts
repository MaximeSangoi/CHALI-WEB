import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ClarityModule } from "@clr/angular";

import { SiteComponent } from "./site.component";


@NgModule({
  declarations: [
    SiteComponent
  ],
  imports: [RouterModule, ClarityModule],
  providers: []
})
export class SiteModule { }
