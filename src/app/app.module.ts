import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RangesViewComponent } from './ranges-view/ranges-view.component';
import { AuthComponent } from './auth/auth.component';
import { EquityViewComponent } from './equity-view/equity-view.component';

@NgModule({
  declarations: [
    AppComponent,
    RangesViewComponent,
    AuthComponent,
    EquityViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
