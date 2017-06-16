import { Component, ViewChild} from '@angular/core';
import { ModalController, NavParams, NavController, Slides } from 'ionic-angular';
import { UserService } from "../core/user.service";


@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.component.html',
  providers: [ UserService ]
})
export class OnBoardingComponent {

  constructor(public modalControler: ModalController, public navCtrl: NavController,private userService: UserService) {}
  /**
   * @name presentLoginModal
   * @description Presents the Email Capture Modal
   */
  presentApp(){
    this.userService.login();
  }
}
