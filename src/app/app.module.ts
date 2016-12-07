import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { EventsComponent } from './events/events.component';
import { TabsPage } from './tabs/tabs';
import { EventsService } from './events/events.service';
import { EventsDetailComponent } from './events/events-detail.component';
import { LecturesComponent } from './lectures/lectures.component';
import { LecturesService } from './lectures/lectures.service';
import { ProgramsComponent } from './programs/programs.component';
import { ProgramsService } from './programs/programs.service';
import { DonateComponent } from './donate/donate.component';
import { DonateService } from './donate/donate.service';
import {  } from '@ionic';



@NgModule({
  declarations: [
    MyApp,
    EventsComponent,
    EventsDetailComponent,
    LecturesComponent,
    DonateComponent,
    ProgramsComponent,
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
    LecturesComponent,
    DonateComponent,
    ProgramsComponent,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, EventsService, LecturesService, ProgramsService, DonateService]
})
export class AppModule {}
