import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignUpComponent {
  signUpForm: FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    username: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });
  triedToSubmit: boolean = false;

  @Output() toggleLoginSignup: EventEmitter<void> = new EventEmitter();

  constructor(private toastr: ToastrService, private router: Router) {}

  /**
   * Toggles between login and signup forms.
   */
  toggleLogin(): void {
    this.toggleLoginSignup.emit();
  }

  /**
   * Signs up the user using Google Sign-Up.
   */
  signUpWithGoogle(): void {
    this.toastr.error("Google Sign-Up is not implemented", "Error");
  }

  /**
   * Signs up the user using Github authentication.
   */
  signUpWithGithub(): void {
    this.toastr.error("Github Sign-Up is not implemented", "Error");
  }

  signUp(): void {
    this.triedToSubmit = true;
    if (this.signUpForm.valid) {
      this.toastr.success("Form is valid", "Success");
    } else {
      this.toastr.error("Form is invalid", "Error");
    }
  }
}
