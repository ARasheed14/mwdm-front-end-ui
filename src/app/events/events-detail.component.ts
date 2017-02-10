import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventsService } from './events.service';
import { MapPage } from './events-map.component';



@Component({
  templateUrl: 'events-detail.component.html',
  styleUrls:['/events.component.scss'],
})
export class EventsDetailComponent {
  public event;
  events: any;
  maps: any;
  constructor(private eventsService: EventsService, public navCtrl: NavController, private navParams: NavParams) {
    this.events = this.eventsService.getEvents();
    this.event = navParams.get('events');
   }
    pushPage(map) {
      this.navCtrl.push(MapPage, { maps: map});
  console.log(map);
   }
  }


