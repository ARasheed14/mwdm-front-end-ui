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
        description: '',
        url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=5UZ9B89FVYQKS'
      },
      {
        name: 'Sadaqah',
        description: '',
        url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=L7MM2KDK9ZV8U'
      },
      {
        name: 'Buildling Fund',
        description: '',
        url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=U6SWDKG76MPWE'
      },
      {
        name: 'IK Community Center',
        description: '',
        url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=W6GVQMZMTQL84'
      },
      {
        name: 'Playground Project',
        description: '',
        url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XXS8QNBMBW9L8'
      }
    ];
  }
  goToDonateDetail(option:DonateOption){
    window.open(option.url);
  }
}