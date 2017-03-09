import { Component } from '@angular/core';
import { StatusBar, Splashscreen } from 'ionic-native';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { EventsComponent } from './events.component';
import { EventsDetailComponent } from './events-detail.component';
import {
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapsLatLng,
 CameraPosition,
 GoogleMapsMarkerOptions,
 GoogleMapsMarker,
} from 'ionic-native';

@Component({
  templateUrl: 'events-map.Component.html',
  styleUrls:['/events.component.scss'],
})
export class EventsMapComponent {

  map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.loadMap();
    });
  }

loadMap(){
 /* let options = {timeout: 10000, enableHighAccuracy: true};
    Geolocation.getCurrentPosition(options).then((position) => {
      let latLng = new GoogleMapsLatLng(position.coords.latitude, position.coords.longitude);
    }); */
    let location = new GoogleMapsLatLng(29.6677677,-95.31210680000004);
    this.map = new GoogleMap('map', {
      'backgroundColor': 'white',
      'timeout': 10000,
      'enableHighAccuracy': true,
          'controls': {
            'compass': true,
            'myLocationButton': true,
            'indoorPicker': true,
            'zoom': true,
          },
          'gestures': {
            'scroll': true,
            'tilt': true,
            'rotate': true,
            'zoom': true
          },
    });
    let camPosition: CameraPosition = {
      target: location,
      zoom: 12,
      tilt:30,
      bearing: 50,
    };
    this.map.moveCamera(camPosition);

    let markerOptions: GoogleMapsMarkerOptions = {
      position: location,
      draggable: true,
    };
    this.map.addMarker(markerOptions)
    .then((marker: GoogleMapsMarker) => {
      marker.showInfoWindow();
    });
    // GeoLocation

    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
      console.log('Map is ready!');
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

}
