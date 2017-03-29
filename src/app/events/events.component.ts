import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventsService } from './events.service';
import { EventsDetailComponent } from './events-detail.component';
import { EventsMapComponent } from './events-map.component';
import { DateConvert } from '../pipes/date.pipe';

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
  }
  ngOnInit(){
    this.getEvents();
  }
  getEvents(){
    this.eventsService.getEvents().subscribe(response => {
      this.events = response.Items;
    });
  }
  pushPage(event){
    this.navCtrl.push(EventsDetailComponent, {events: event});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsComponent');
  }

}
