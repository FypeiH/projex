import { Component, ElementRef, ViewChild } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { LoginComponent } from "./login/login.component";

@Component({
  selector: "app-authentication",
  templateUrl: "./authentication.component.html",
  styleUrls: ["./authentication.component.css"],
})
export class AuthenticationComponent {
  @ViewChild("login") login!: ElementRef;
  @ViewChild("signup") signup!: ElementRef;
  @ViewChild("cover") cover!: ElementRef;
  @ViewChild("login") loginComponent!: LoginComponent;

  isSignUpDisplayed = false;

  constructor(private toastr: ToastrService) {}

  /**
   * Toggles between login and signup display based on the value of `fromLogin`.
   * If `fromLogin` is true, the signup display is shown. Otherwise, the login display is shown.
   * Displays an error message if any of the ViewChild elements are not initialized.
   * 
   * @param fromLogin - A boolean value indicating whether the toggle is triggered from the login display.
   */
  toggleLoginSignup(fromLogin: boolean): void {
    if (this.cover && this.signup && this.login) {
      if (fromLogin) {
        this.isSignUpDisplayed = true;
      } else {
        this.isSignUpDisplayed = false;
      }
      this.loginComponent.triedToSubmit = false;
    } else {
      this.toastr.error(
        "One or more ViewChild elements are not initialized.",
        "Error"
      );
    }
  }
}
