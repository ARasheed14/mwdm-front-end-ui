import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventsComponent } from './events.component.html';
import { EventsService } from './events.service';



@Component({
  templateUrl: 'events-detail.component.html',
  styleUrls:['/events.component.scss'],
})
export class EventsDetailComponent {
  events: any;
  constructor(private eventsService: EventsService, public navCtrl: NavController) {
    this.events = this.eventsService.getEvents();



   }

  }


