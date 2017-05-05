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

  constructor(private formBuilder: FormBuilder, private navParams:NavParams) {
    this.donationOption = this.navParams.get('donationOption').name;
    this.donateForm = this.formBuilder.group({
      amount: ['', Validators.required],
      otherAmount: ['']
    });
  }

  logForm() {
    if(this.donateForm.valid){
      this.initiatePayment(this.donationOption,this.getSelectedAmount())
    }
  }

  /**
   * @name initiatePayment
   * @description Initiates payment w/Paypal
   */
  initiatePayment(donationOption:string,selectedAmount:number){
    console.log(donationOption,selectedAmount);
  }
   /**
   * @name getSelectedAmount
   * @description Returns appropriate amount based on default selection or other amount entered
   */
  private getSelectedAmount(){
    if(this.donateForm.value.amount === 'other'){
        return this.donateForm.value.otherAmount;
    }
    return this.donateForm.value.amount;
  }
}