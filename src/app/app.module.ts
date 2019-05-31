import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileRoutingModule } from './profile/profile-routing.module';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { SubscriptionsRoutingModule } from './subscriptions/subscriptions-routing.module';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentsRoutingModule } from './payments/payments-routing.module';
import { EmailsComponent } from './emails/emails.component';
import { EmailsRoutingModule } from './emails/emails-routing.module';
import { SavesComponent } from './saves/saves.component';
import { SavesRoutingModule } from './saves/saves-routing.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    SubscriptionsComponent,
    PaymentsComponent,
    EmailsComponent,
    SavesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileRoutingModule,
    SubscriptionsRoutingModule,
    PaymentsRoutingModule,
    EmailsRoutingModule,
    SavesRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
