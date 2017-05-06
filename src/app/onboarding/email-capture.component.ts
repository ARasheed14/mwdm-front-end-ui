import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, Slides, ViewController } from 'ionic-angular';
import { Push,PushToken } from '@ionic/cloud-angular';


// components
import { TabsPage } from "../tabs/tabs";

// services
import { UserService } from "../core/user.service";

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
  passcode: string;
  registrationStep: number = 0;

  @ViewChild(Slides) slides: Slides;


  constructor(
    private fb: FormBuilder,
    public viewController: ViewController,
    public navCtrl: NavController,
    public push: Push,
    private userService: UserService,
  ) {
    this.buildEmailForm();
    this.buildPasscodeForm();
  }

  ionViewDidLoad() {
    console.log('hi');
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
        Validators.minLength(6),
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
      return;
    }

    this.confirmPasscode();
  }

  confirmPasscode() {
    this.isPasscodeSubmitted = true;
    if (this.passcodeForm.valid) {
      if (this.passcode = this.passcodeForm.value.passcode) {
        this.userService.login(this.emailForm.value.email).subscribe(() => {
          this.push.register()
            .then((t: PushToken) => {
              return this.push.saveToken(t);
            })
            .then((t: PushToken) => {
              console.log('Token saved',t.token);
              this.navCtrl.push(TabsPage);
            })
            .catch((err)=>{
              console.error(err);
              console.error('push token not saved');
            })
        });
      }
    }
  }
}
