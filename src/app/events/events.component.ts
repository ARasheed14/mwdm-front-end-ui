import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventsService } from './events.service';
import { EventsDetailComponent } from './events-detail.component';



// import { HomePage } from '../home/home';
// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'events.component.html',
  styleUrls:['/events.component.scss'],
})
export class EventsComponent {

  // this tells the tabs component which Pages
  // should be each tab's root Page
  // tab1Root: any = HomePage;
  // tab2Root: any = AboutPage;
  // tab3Root: any = ContactPage;
  events: any;
  constructor(private eventsService: EventsService, public navCtrl: NavController) {
    this.events = this.eventsService.getEvents();





    }

pushPage(event) {
      // Let's navigate from TabsPage to Page1
      this.navCtrl.push(EventsDetailComponent, { events: event});
  console.log(event);
   }

  }




