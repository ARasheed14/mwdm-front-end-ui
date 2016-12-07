import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventsComponent } from './events.component.html';
import { EventsService } from './events.service';



@Component({
  templateUrl: 'events-detail.component.html',
  styleUrls:['/events.component.scss'],
})
export class EventsDetailComponent {
  public event;
  events: any;
  constructor(private eventsService: EventsService, public navCtrl: NavController, private navParams: NavParams) {
    this.events = this.eventsService.getEvents();
    this.event = navParams.get('events');


   }

  }


