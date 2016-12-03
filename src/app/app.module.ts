import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { EventsComponent } from './events/events.component';
import { TabsPage } from './tabs/tabs';
import { EventsService } from './events/events.service';

@NgModule({
  declarations: [
    MyApp,
    EventsComponent,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventsComponent,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, EventsService]
})
export class AppModule {}
