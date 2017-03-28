import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { EventsComponent } from './events/events.component';
import { EventsDetailComponent } from './events/events-detail.component';
import { EventsService } from './events/events.service';
import { EventsMapComponent } from './events/events-map.component';
import { LecturesComponent } from './lectures/lectures.component';
import { DonateComponent } from './donate/donate.component';
import { PayPalComponent } from './donate/paypal.component';
import { ProgramsComponent } from './programs/programs.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from './tabs/tabs';
import { HttpModule } from '@angular/http';
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
    AboutPage,
    ContactPage,
    HomePage,
    DateConvert,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    MomentModule
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
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, EventsService, LecturesService, ProgramsService]
})
export class AppModule {}
