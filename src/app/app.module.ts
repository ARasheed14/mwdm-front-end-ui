import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, ApplicationRef } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
import { MapPage } from './events/events-map.component';
import { ProgramsDetailComponent } from './programs/programs-detail.component';
import { AgmCoreModule } from 'angular2-google-maps/core';



@NgModule({
  declarations: [
    MyApp,
    EventsComponent,
    EventsDetailComponent,
    LecturesComponent,
    DonateComponent,
    ProgramsComponent,
    ProgramsDetailComponent,
    MapPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCsL_JSo-hEzd_Qbx5OTDaI_SlQ1T2-p48'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventsComponent,
    EventsDetailComponent,
    LecturesComponent,
    DonateComponent,
    ProgramsComponent,
    ProgramsDetailComponent,
    MapPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, EventsService, LecturesService, ProgramsService, DonateService]
})
export class AppModule {}
