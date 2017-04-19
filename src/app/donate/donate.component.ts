import { Component } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';
import { PayPalComponent } from './paypal.component';

@Component({
  templateUrl: 'donate.component.html',
  styleUrls:['/donate.component.scss'],
})
export class DonateComponent {
  constructor(public navCtrl: NavController, private navParams: NavParams){}
  pushPage(){
    this.navCtrl.push(PayPalComponent);
    console.log("PayPal Page pushed");
  }
}
