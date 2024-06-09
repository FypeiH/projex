// Modules' imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components' imports
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}