import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RangesViewComponent } from './ranges-view/ranges-view.component';
import { AuthComponent } from './auth/auth.component';
import { EquityViewComponent } from './equity-view/equity-view.component';
import { AuthGuard } from './services/auth-guard.service';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'ranges', canActivate: [AuthGuard], component: RangesViewComponent },
  { path: 'equity', canActivate: [AuthGuard], component: EquityViewComponent},
  { path: 'register', component: NewUserComponent},
  { path: '**', redirectTo: 'auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
