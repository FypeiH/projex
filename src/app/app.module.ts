// Modules' imports
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";

//Components' imports
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";

//Providers' imports

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      progressBar: true,
      preventDuplicates: true,
      resetTimeoutOnDuplicate: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }