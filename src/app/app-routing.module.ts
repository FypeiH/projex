// Modules' imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components' imports
import { AppComponent } from './app.component';
import { LoginSignUpComponent } from './components/login-signup/login-signup.component';

const routes: Routes = [
  { path: '', component: LoginSignUpComponent },
  { path: 'login', component: LoginSignUpComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}