import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';




@Component ({
  templateUrl: 'events-map.component.html',
  styleUrls:['/events.component.scss'],
})
export class MapPage {
  title: string = 'Event Location';
  lat: number = 29.7604;
  lng: number = -95.3698;
  constructor(public navCtrl: NavController){
  }
}
