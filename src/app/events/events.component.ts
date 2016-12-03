import { Component } from '@angular/core';
import { EventsService } from './events.service';
// import { HomePage } from '../home/home';
// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'events.component.html'
})
export class EventsComponent {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  // tab1Root: any = HomePage;
  // tab2Root: any = AboutPage;
  // tab3Root: any = ContactPage;
  events: any;
  constructor(private eventsService: EventsService) {
    this.events = this.eventsService.getEvents();

  }
}
