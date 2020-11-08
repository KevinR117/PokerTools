import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RangesViewComponent } from './ranges-view/ranges-view.component';
import { EquityViewComponent } from './equity-view/equity-view.component';
import { HandComponent } from './hand/hand.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { TableService } from './services/table.service';
import { UserListComponent } from './user-list/user-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    RangesViewComponent,
    EquityViewComponent,
    HandComponent,
    UserListComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    TableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
