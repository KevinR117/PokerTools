import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RangesViewComponent } from './ranges-view/ranges-view.component';
import { EquityViewComponent } from './equity-view/equity-view.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'auth/signin', component: SignInComponent },
  { path: 'auth/signup', component: SignUpComponent },
  { path: 'ranges', canActivate: [AuthGuard], component: RangesViewComponent },
  { path: 'equity', canActivate: [AuthGuard], component: EquityViewComponent},
  { path: '**', redirectTo: 'auth/signin' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
