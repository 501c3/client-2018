import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ParticipantsComponent } from './participants/participants.component';
import { EntriesComponent } from './entries/entries.component';
import { XtrasComponent } from './xtras/xtras.component';
import { SummaryComponent } from './summary/summary.component';
import { PaymentComponent } from './payment/payment.component';
import { RecoverComponent } from './recover/recover.component';
import { MessageComponent } from './message/message.component';
import { SupportComponent } from './support/support.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ParticipantComponent } from './participants/participant/participant.component';
import {routeConfigMock} from './router-config-mock';
import {StoreService} from './common/store.service';
import {NG_SELECT_DEFAULT_CONFIG, NgSelectModule} from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    ParticipantsComponent,
    EntriesComponent,
    XtrasComponent,
    SummaryComponent,
    PaymentComponent,
    RecoverComponent,
    MessageComponent,
    SupportComponent,
    ParticipantComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfigMock, {enableTracing: false}),
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [StoreService,
              {provide: NG_SELECT_DEFAULT_CONFIG,
               useValue: {notFoundText: 'Custom not found'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
