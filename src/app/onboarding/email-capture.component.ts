import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; ""
import { NavController, Slides, ViewController, AlertController } from 'ionic-angular';
import { Push, PushToken } from '@ionic/cloud-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Vibration } from '@ionic-native/vibration';
import { Observable } from "rxjs";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// components
import { TabsPage } from "../tabs/tabs";

// services
import { UserService } from "../core/user.service";

// Environment
import { EnvironmentService } from '../environments/environment.service';

@Component({
  selector: 'page-email-capture',
  templateUrl: 'email-capture.component.html'
})
export class EmailCaptureComponent {
  // public properties

  // forms
  emailForm: FormGroup;
  passcodeForm: FormGroup;

  confirmation: { confirmationCode?: string } = {};
  isEmailCaptureScreen = true;
  isEmailSubmitted: boolean = false;
  isPasscodeSubmitted: boolean = false;
  isSpinner: boolean = false;
  passcode: any;
  registrationStep: number = 0;


  // Api
  private apiUrl: string;

  @ViewChild(Slides) slides: Slides;


  constructor(
    private environmentService: EnvironmentService,
    private fb: FormBuilder,
    public viewController: ViewController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public push: Push,
    private userService: UserService,
    private http: Http,
    private vibration: Vibration
  ) {
    this.buildEmailForm();
    this.buildPasscodeForm();
    this.apiUrl = this.environmentService.getAPIUrl() + '/onboarding';

  }


  /**
   * @name buildEmailForm
   * @description build the email form and sets up validation
   */
  buildEmailForm() {
    this.emailForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]
      ]
    });

    // this.emailForm.valueChanges
    //   .subscribe(data => this.onValueChanged(data));
  }

  /**
   * @name buildPasscodeForm
   * @description build the passcode form and setup validation
   */
  buildPasscodeForm() {
    this.passcodeForm = this.fb.group({
      'passcode': ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(6)
      ]
      ]
    });
  }

  /**
   * @name dismiss
   * @description Dismiss the current modal page
   */
  dismiss() {
    this.viewController.dismiss();
  }

  /**
   * @name goToNextStep
   * @description LoginMoves to Next Slide
   */
  goToNextStep() {
    this.registrationStep++;
  }

  /**
   * @name goToPreviousSlide
   * @description Login Moves to Previous Slide
   */
  goToPreviousSlide() {
    this.registrationStep--;
  }
  /**
   * @name sendEmailToRetrievePasscode
   * @description Sends an email address to the API
   */
  sendEmailToRetrievePasscode(resend?: boolean) {
    this.isEmailSubmitted = true;
    if (this.emailForm.valid) {
      this.isSpinner = true;
      this.userService.requestConfirmationCode(this.emailForm.value.email).subscribe((passcode: string) => {
        this.passcode = passcode;
        this.isSpinner = false;
        if (!resend) this.goToNextStep();
      });
    }
  }

  /**
   * @name next
   * @description Process the next interaction button. If it is first step it will run sendEmailToRetrievePasscode or
   * confirmPasscode method
   */
  next() {
    if (this.registrationStep == 0) {
      this.sendEmailToRetrievePasscode();
      this.passcodeAlert();
      this.vibration.vibrate(1000);
      console.log('Email sent!');
      return;
    }
    this.confirmPasscode();
  }

  confirmPasscode() {
    this.isPasscodeSubmitted = true;
    if (this.passcodeForm.valid) {
      this.isSpinner = true;
      if (this.passcode.passcode == this.passcodeForm.value.passcode) {
        this.http.post(this.apiUrl,
          JSON.stringify({ EmailID: this.emailForm.value.email }))
          .map((res) => res.json())
          .subscribe(res => {
            this.userService.login(this.emailForm.value.email)
              .subscribe(res => {
                this.push.register()
                  .then((t: PushToken) => {
                    return this.push.saveToken(t);
                  })
                  .then((t: PushToken) => {
                    console.log('Token saved', t.token);
                    this.navCtrl.push(TabsPage);
                  })
                  .catch((err) => {
                    console.error(err);
                    console.error('push token not saved');
                  })
              })
          },
          error => {
            console.log(error)
          });
      } else {
        this.vibration.vibrate(1000);
        console.log('Vibrate 2');
       }
    } else {
      this.vibration.vibrate(1000);
      console.log('Vibrate 1');
    }
  }
  passcodeAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'A passcode has been sent to your email!',
      buttons: ['OK']
    });
    alert.present();
  }
}
