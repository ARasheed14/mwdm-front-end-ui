import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { IonicAudioModule } from 'ionic-audio';
import { IonicStorageModule } from '@ionic/storage';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { PayPal } from "@ionic-native/paypal";
import { Vibration } from '@ionic-native/vibration';

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

// Lectures
import { LecturesComponent } from './lectures/lectures.component';

// Donations
import { DonateComponent } from './donate/donate.component';
import { DonateDetailComponent } from './donate/donate-detail.component';
import { PayPalComponent } from './donate/paypal.component';

// import { DonationDetailComponent } from "./payment/payment-detail/payment-detail.component";
// import { DonationListComponent } from "./payment/payment-list/payment-list.component";

// Loading
import { LoadingComponent } from "./loading/loading.component";

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


const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'bd29fd2b'
  },
  'push': {
    'sender_id': '451568842532',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp,
    EventsComponent,
    EventsDetailComponent,
    LecturesComponent,
    DonateComponent,
    DonateDetailComponent,
    PayPalComponent,
    ProgramsComponent,
    EmailCaptureComponent,
    OnBoardingComponent,
    DateConvert,
    TabsPage,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    IonicStorageModule.forRoot(),
    IonicAudioModule.forRoot(),
    MomentModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventsComponent,
    EventsDetailComponent,
    LecturesComponent,
    DonateComponent,
    DonateDetailComponent,
    PayPalComponent,
    ProgramsComponent,
    EmailCaptureComponent,
    OnBoardingComponent,
    LoadingComponent,
    TabsPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler },
    EventsService,
    LecturesService,
    ProgramsService,
    OnBoardingService,
    SplashScreen,
    StatusBar,
    UserService,
    LaunchNavigator,
    PayPal,
    Vibration]
})
export class AppModule { }
