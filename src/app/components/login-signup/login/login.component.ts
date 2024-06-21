import {
  Component,
  EventEmitter,
  Output,
} from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  loggedIn: boolean = false;

  loginForm: FormGroup = new FormGroup({
    emailUsername: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });
  triedToSubmit: boolean = false;

  @Output() toggleLoginSignup: EventEmitter<void> = new EventEmitter();

  constructor(private toastr: ToastrService, private router: Router) {}

  /**
   * Toggles between login and signup forms.
   */
  toggleSignup(): void {
    this.toggleLoginSignup.emit();
  }

  /**
   * Signs in the user using Google Sign-In.
   */
  signInWithGoogle(): void {
    this.toastr.error("Google Sign-In is not implemented", "Error");
  }

  /**
   * Signs in the user using Github authentication.
   */
  signInWithGithub(): void {
    this.toastr.error("Github Sign-In is not implemented", "Error");
  }

  /**
   * Signs in the user.
   */
  signIn(): void {
    this.triedToSubmit = true;
    if (this.loginForm.valid) {
      this.toastr.success("Form is valid", "Success");
    } else {
      this.toastr.error("Form is invalid", "Error");
    }
  }
}
