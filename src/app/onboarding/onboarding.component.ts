import { Component, ViewChild} from '@angular/core';
import { ModalController, NavParams, NavController, Slides } from 'ionic-angular';
import { EmailCaptureComponent } from "./email-capture.component";

@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.component.html'
})
export class OnBoardingComponent {

  constructor(public modalControler: ModalController, public navCtrl: NavController) {}
  /**
   * @name presentLoginModal
   * @description Presents the Email Capture Modal
   */
  presentLoginModal(){
    let emailCaptureModal = this.modalControler.create(EmailCaptureComponent);
    emailCaptureModal.present();
  }
}
