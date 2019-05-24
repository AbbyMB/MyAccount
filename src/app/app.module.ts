import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileRoutingModule } from './profile/profile-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
