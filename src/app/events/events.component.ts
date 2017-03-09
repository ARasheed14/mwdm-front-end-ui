import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventsService } from './events.service';
import { EventsDetailComponent } from './events-detail.component';
import { EventsMapComponent } from './events-map.component';

/*
  Generated class for the Events page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'events.component.html',
  styleUrls:['/events.component.scss'],
})
export class EventsComponent {
  events: any;
  maps: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private eventsService: EventsService) {
    this.events = this.eventsService.getEvents();
  }
  pushPage(event){
    this.navCtrl.push(EventsDetailComponent, {events: event});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsComponent');
  }

}
