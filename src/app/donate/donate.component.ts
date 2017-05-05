import { Component } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';
import { PayPalComponent } from './paypal.component';
import { DonateDetailComponent } from "./donate-detail.component";
import { DonateOption } from "./donate";

@Component({
  templateUrl: 'donate.component.html',
  styleUrls:['/donate.component.scss'],
})
export class DonateComponent {
  donationOptions: DonateOption[];  
  constructor(public navCtrl: NavController, private navParams: NavParams){
    this.donationOptions = [
      {
        name:'Zakat',
        description: ''
      },
      {
        name: 'Sadaqah',
        description: ''
      },
      {
        name: 'Buildling Fund',
        description: ''
      },
      {
        name: 'IK Community Center',
        description: ''
      },
      {
        name: 'Playground Project',
        description: ''
      }
    ];
  }
  goToDonateDetail(option:string){
    this.navCtrl.push(DonateDetailComponent,{donationOption: option});
  }
}