import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: SocialUser | null = null;
  loggedIn: boolean = false;

  constructor(private socialAuthService: SocialAuthService, private toastr: ToastrService, private router: Router) {}

  ngOnInit() {
    this.socialAuthService.authState.pipe(take(1)).subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
      
      if (this.loggedIn) {
        this.toastr.success('You are logged in', 'Success');
      }
    });
  }

  signInWithGoogle(): void {
    google.accounts.id.prompt((notification) => {
      if (notification.isNotDisplayed()) {
        this.toastr.error('Google Sign-In prompt was not displayed', 'Error');
      }
    });
  }

  signOut(): void {
    this.socialAuthService.signOut().then(() => {
      this.user = null;
      this.loggedIn = false;
    });
  }
}
