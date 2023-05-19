import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AuthInterceptor } from "./shared/interceptors/auth.interceptor";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NotFoundComponent } from "./shared/components/not-found.component";
import { RouterModule } from "@angular/router";
import { rootRouterConfig } from "./app.routes";

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(rootRouterConfig),
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [
    [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
