import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventsService } from './events.service';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

@Component({
  templateUrl: 'events-detail.component.html'
})
export class EventsDetailComponent {
  public event;
  events: any;
  maps: any;
  destination: string;
  start: string;
  address: any;
  constructor(private launchNavigator: LaunchNavigator,
    private eventsService: EventsService,
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.events = this.eventsService.getEvents();
    this.event = navParams.get('events');
    this.start = "";
  }
  /**
   * @name navigate
   * @param {string} address - Sends user to event location in device map
   */
  navigate(address) {
    let options: LaunchNavigatorOptions = {
      start: this.start
    };
    this.launchNavigator.navigate(address, options)
      // .then(
      // success => alert('Launched Navigator'),
      // error => alert('Error Launching Navigator: ' + error)
      // );
  }
  /* pushPage(map){
    this.navCtrl.push(EventsMapComponent, {maps: map});
   console.log(map);
  } */

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

}
