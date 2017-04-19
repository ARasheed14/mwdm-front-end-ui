import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicAudioModule } from 'ionic-audio';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';

// Onboarding
import { EmailCaptureComponent } from "./onboarding/email-capture.component";
import { OnBoardingComponent } from './onboarding/onboarding.component';

// Services
import { OnBoardingService } from "./onboarding/onboarding.service";
import { UserService } from "./core/user.service";

// Events
import { EventsComponent } from './events/events.component';
import { EventsDetailComponent } from './events/events-detail.component';
import { EventsService } from './events/events.service';
import { EventsMapComponent } from './events/events-map.component';

// Lectures
import { LecturesComponent } from './lectures/lectures.component';

// Donations
import { DonateComponent } from './donate/donate.component';
import { PayPalComponent } from './donate/paypal.component';

// import { DonationDetailComponent } from "./payment/payment-detail/payment-detail.component";
// import { DonationListComponent } from "./payment/payment-list/payment-list.component";


// Programs
import { ProgramsComponent } from './programs/programs.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from './tabs/tabs';

import { LecturesService } from './lectures/lectures.service';
import { ProgramsService } from './programs/programs.service';
import { DateConvert } from './pipes/date.pipe';
import { MomentModule } from 'angular2-moment';


@NgModule({
  declarations: [
    MyApp,
    EventsComponent,
    EventsDetailComponent,
    EventsMapComponent,
    LecturesComponent,
    DonateComponent,
    PayPalComponent,
    ProgramsComponent,
    EmailCaptureComponent,
    OnBoardingComponent,
    DateConvert,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    IonicAudioModule.forRoot(),
    MomentModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventsComponent,
    EventsDetailComponent,
    EventsMapComponent,
    LecturesComponent,
    DonateComponent,
    PayPalComponent,
    ProgramsComponent,
    EmailCaptureComponent,
    OnBoardingComponent,
    TabsPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler },
    EventsService,
    LecturesService,
    ProgramsService,
    OnBoardingService,
    SplashScreen,
    StatusBar,
    UserService]
})
export class AppModule { }
