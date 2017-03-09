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
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from './tabs/tabs';


@NgModule({
  declarations: [
    MyApp,
    EventsComponent,
    EventsDetailComponent,
    EventsMapComponent,
    LecturesComponent,
    DonateComponent,
    PayPalComponent,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
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
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, EventsService]
})
export class AppModule {}
