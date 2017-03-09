import { Component } from '@angular/core';
import { StatusBar, Splashscreen } from 'ionic-native';
import { PayPal, PayPalPayment, PayPalConfiguration } from "ionic-native";
import { Platform, NavController } from 'ionic-angular';
import { DonateComponent } from './donate.component';

@Component({
  templateUrl: 'paypal.component.html'
})

export class PayPalComponent {

constructor(public navCtrl: NavController, public platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
PayPal.init({
  "PayPalEnvironmentProduction": "xQK4ixDtwG9ZFgK9ysOEDM0B29pt3HHYjrZYfkdEQhsQDonWAo0Wj3EH_yoSC4j5FXbgbxlX",
  "PayPalEnvironmentSandbox": "AX3y3effubdhXEHe81wwFcIzUv7AkOBDcV1bVWVtrkFbRQ1Azbr5eYWrtQWTYIaarLNLAGoY60f7cvcu"
}).then(() => {
  // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
  PayPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
    // Only needed if you get an "Internal Service Error" after PayPal login!
    //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
  })).then(() => {
    let payment = new PayPalPayment('3.33', 'USD', 'Description', 'sale');
    PayPal.renderSinglePaymentUI(payment).then(() => {
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
