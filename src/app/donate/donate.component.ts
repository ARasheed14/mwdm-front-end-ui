import { Component } from '@angular/core';
import { DonateService } from './donate.service';
import { PayPal, PayPalPayment, PayPalConfiguration } from "ionic-native";
import { Platform } from 'ionic-angular';

@Component({
  templateUrl: 'donate.component.html'
})
export class DonateComponent {
  btnBuyNow(){

  };
}
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
      // Successfully paid

      // Example sandbox response
      //
      // {
      //   "client": {
      //     "environment": "sandbox",
      //     "product_name": "PayPal iOS SDK",
      //     "paypal_sdk_version": "2.16.0",
      //     "platform": "iOS"
      //   },
      //   "response_type": "payment",
      //   "response": {
      //     "id": "PAY-1AB23456CD789012EF34GHIJ",
      //     "state": "approved",
      //     "create_time": "2016-10-03T13:33:33Z",
      //     "intent": "sale"
      //   }
      // }
    }, () => {
      // Error or render dialog closed without being successful
    });
  }, () => {
    // Error in configuration
  });
}, () => {
  // Error in initialization, maybe PayPal isn't supported or something else
});

