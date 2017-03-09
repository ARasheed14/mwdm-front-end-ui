import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventsComponent } from './events.component';
import { EventsMapComponent } from './events-map.component';
import { EventsService } from './events.service';

@Component({
  templateUrl: 'events-detail.component.html',
  styleUrls:['/events.component.scss'],
})
export class EventsDetailComponent {
  public event;
  events: any;
  maps: any;
  constructor(private eventsService: EventsService, public navCtrl: NavController, public navParams: NavParams) {
    this.events = this.eventsService.getEvents();
    this.event = navParams.get('events');
  }

  pushPage(map){
    this.navCtrl.push(EventsMapComponent, {maps: map});
    console.log(map);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

}
