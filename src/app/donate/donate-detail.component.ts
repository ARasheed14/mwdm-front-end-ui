import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Platform, NavController, NavParams } from 'ionic-angular';
import { PayPal, PayPalPayment, PayPalConfiguration } from "@ionic-native/paypal";
import { PayPalComponent } from './paypal.component';
import { DonateOption } from "./donate";

@Component({
  selector: 'page-donate-detail',
  templateUrl: 'donate-detail.component.html',
  styleUrls: ['/donate-detail.component.scss'],
})
export class DonateDetailComponent {
  private donateForm: FormGroup;
  private selectedAmount: number;
  private donationOption: string;

  constructor(private formBuilder: FormBuilder,
    private navParams: NavParams,
    public platform: Platform,
    private paypal: PayPal
  ) {
    platform.ready().then(() => {
      // this.initializePaypal();
      this.donationOption = this.navParams.get('donationOption').name;
      this.donateForm = this.formBuilder.group({
        amount: ['', Validators.required],
        otherAmount: ['']
      });
    });
  }

  logForm() {
    if (this.donateForm.valid) {
      this.initiatePayment(this.donationOption, this.getSelectedAmount())
    }
  }

  /**
   * @name initiatePayment
   * @description Initiates payment w/Paypal
   */
  initiatePayment(donationOption: string, selectedAmount: string) {
    console.log(donationOption, selectedAmount);
    this.initializePaypal()
      .then(() => {
        let payment = new PayPalPayment(selectedAmount, 'USD', donationOption, 'sale');
        return this.paypal.renderSinglePaymentUI(payment)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      });
  }

  initializePaypal() {
    return this.paypal.init({
      "PayPalEnvironmentProduction": "xQK4ixDtwG9ZFgK9ysOEDM0B29pt3HHYjrZYfkdEQhsQDonWAo0Wj3EH_yoSC4j5FXbgbxlX",
      "PayPalEnvironmentSandbox": "AX3y3effubdhXEHe81wwFcIzUv7AkOBDcV1bVWVtrkFbRQ1Azbr5eYWrtQWTYIaarLNLAGoY60f7cvcu"
    }).then(() => {
      this.paypal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      }));
    })
  }
  /**
  * @name getSelectedAmount
  * @description Returns appropriate amount based on default selection or other amount entered
  */
  private getSelectedAmount() {
    if (this.donateForm.value.amount === 'other') {
      return this.donateForm.value.otherAmount;
    }
    return this.donateForm.value.amount;
  }
}