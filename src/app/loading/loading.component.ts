import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the LoadingComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  templateUrl: 'loading.component.html',
  styleUrls:['/loading.component.scss'],
})
export class LoadingComponent {

  constructor(public navCtrl: NavController, public navParams: NavParams){

  }
}

