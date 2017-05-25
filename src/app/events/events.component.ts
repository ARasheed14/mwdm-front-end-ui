import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ViewController } from 'ionic-angular';
import { EventsService } from './events.service';
import { EventsDetailComponent } from './events-detail.component';
import { EventsMapComponent } from './events-map.component';
import { LoadingComponent } from '../loading/loading.component';

import { DateConvert } from '../pipes/date.pipe';

/*
  Generated class for the Events page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-events',
  templateUrl: 'events.component.html'
})
export class EventsComponent {
  events: any;
  maps: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private eventsService: EventsService, private loadingCtrl: LoadingController, private modalCtrl : ModalController) {
  }
  ngOnInit(){
     let loading = this.modalCtrl.create(LoadingComponent);
    // Show Loading Component
    loading.present();
    this.getEvents();
  setTimeout(() => {
      console.log('Loading complete');
      loading.dismiss();
    }, 2000);
  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.getEvents();
    console.log(this.events);
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
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
