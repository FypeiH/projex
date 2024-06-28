// Modules' imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components' imports
import { AuthenticationComponent } from './components/authentication/authentication.component';

const routes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path: 'login', component: AuthenticationComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}