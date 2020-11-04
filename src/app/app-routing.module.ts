import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RangesViewComponent } from './ranges-view/ranges-view.component';
import { AuthComponent} from './auth/auth.component';
import { EquityViewComponent} from './equity-view/equity-view.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'ranges', component: RangesViewComponent },
  { path: 'equity', component: EquityViewComponent},
  { path: '**', redirectTo: 'auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
