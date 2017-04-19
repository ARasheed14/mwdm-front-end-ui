import { Component } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from "@ionic-native/paypal";
import { Platform, NavController } from 'ionic-angular';
import { DonateComponent } from './donate.component';

@Component({
  templateUrl: 'paypal.component.html',
  styleUrls: ['/donate.component.scss']
})

export class PayPalComponent {

  constructor(public navCtrl: NavController, public platform: Platform, private paypal: PayPal) {
    platform.ready().then(() => {
      paypal.init({
        "PayPalEnvironmentProduction": "xQK4ixDtwG9ZFgK9ysOEDM0B29pt3HHYjrZYfkdEQhsQDonWAo0Wj3EH_yoSC4j5FXbgbxlX",
        "PayPalEnvironmentSandbox": "AX3y3effubdhXEHe81wwFcIzUv7AkOBDcV1bVWVtrkFbRQ1Azbr5eYWrtQWTYIaarLNLAGoY60f7cvcu"
      }).then(() => {
        // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
        paypal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
          // Only needed if you get an "Internal Service Error" after PayPal login!
          //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
        })).then(() => {
          let payment = new PayPalPayment('3.33', 'USD', 'Description', 'sale');
          paypal.renderSinglePaymentUI(payment).then(() => {
          }, () => {
            // Error or render dialog closed without being successful
          });
        }, () => {
          // Error in configuration
        });
      }, () => {
        // Error in initialization, maybe PayPal isn't supported or something else
      });
    });
  }
}
