import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Platform, NavController, NavParams, AlertController } from 'ionic-angular';
import { PayPal, PayPalPayment, PayPalConfiguration } from "@ionic-native/paypal";

// Environment
import { EnvironmentService } from '../environments/environment.service';
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
  private payPalENV:string;
  private payPalENVKey: string;

  constructor(
    private environmentService: EnvironmentService,
    public alertCtrl: AlertController,
    private formBuilder: FormBuilder,
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
      this.payPalENV = this.environmentService.getPayPalENV();
    });
  }

  successAlert() {
    let alert = this.alertCtrl.create({
      title: 'PayPal',
      subTitle: 'Donation Successful!',
      buttons: ['OK']
    });
    alert.present();
  }

  unsuccessAlert(){
    let alert = this.alertCtrl.create({
      title: 'PayPal',
      subTitle: 'Donation unsuccessful!',
      buttons: ['OK']
    });
    alert.present();
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
    this.initializePaypal()
      .then(() => {
        let payment = new PayPalPayment(selectedAmount, 'USD', donationOption, 'sale');
        return this.paypal.renderSinglePaymentUI(payment)
          .then((res) => {
            this.successAlert()
            console.log(res);
          })
          .catch((err) => {
            this.unsuccessAlert()
            console.log(err);
          });
      });
  }

  initializePaypal() {
    return this.paypal.init({
      "PayPalEnvironmentProduction": "AcoTtCn3HSaEFo3Gs2PaDNLNPJTWx2DGnZNAWV4v3TBZ-OlGpnCHkmP7_1XlrS6sxcO4NjX3mjiubDBd",
      "PayPalEnvironmentSandbox": "AWG30Ge8SLOAHvY0-YVWk4q_9Rb8s7UU4SM2vYSW2z9aqvwdqwgPEU-BwUuDCRa2SGdkobVvyLOnKhRW"
    }).then(() => {
      this.paypal.prepareToRender(this.payPalENV, new PayPalConfiguration({
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
