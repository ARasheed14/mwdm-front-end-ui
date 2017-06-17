import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { Push, PushToken } from '@ionic/cloud-angular';



import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// services
import { UserService } from "../core/user.service";


@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.component.html',
  providers: [ UserService ]
})
export class OnBoardingComponent {

  constructor(public modalControler: ModalController, public navCtrl: NavController,private userService: UserService, public push: Push) {}
  /**
   * @name presentLoginModal
   * @description Presents the Email Capture Modal
   */
  presentApp(){
    this.userService.login();
    this.push.register()
    .then((t: PushToken)=> {
      return this.push.saveToken(t);
    })
    .then((t: PushToken) => {
      console.log('Token Saved', t.token);
      this.userService.login();
    })
    .catch((err)=> {
      console.error(err);
      console.error('push token not saved');
      this.userService.login();
    })
  }
}
