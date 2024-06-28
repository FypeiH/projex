import {
  Component,
  EventEmitter,
  Output,
} from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../../services/auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    emailUsername: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    keepMeSignedIn: new FormControl(false),
  });
  isPasswordVisible: boolean = false;
  isInputFocused: boolean = false;
  isInputHovered: boolean = false;
  triedToSubmit: boolean = false;
  

  @Output() toggleLoginSignup: EventEmitter<void> = new EventEmitter();

  constructor(private router: Router, private toastr: ToastrService, private authService: AuthService) {}

  /**
   * Toggles between login and signup forms.
   */
  toggleSignup(): void {
    this.toggleLoginSignup.emit();
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
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
      this.authService.login(this.loginForm.value.emailUsername, this.loginForm.value.password, this.loginForm.value.keepMeSignedIn).subscribe((auth) => {
        this.toastr.success("Logged in successfully", "Success");
        this.router.navigate(["/"]);
      });
    }
  }
}
