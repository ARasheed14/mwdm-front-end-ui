import { Component, ViewChild } from '@angular/core';
import { ModalController, NavParams, NavController, Slides } from 'ionic-angular';
import { Push, PushToken } from '@ionic/cloud-angular';

// components
import { TabsPage } from "../tabs/tabs";
import { UserService } from "../core/user.service";


@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.component.html',
  providers: [UserService]
})
export class OnBoardingComponent {

  constructor(
    public modalControler: ModalController,
    public navCtrl: NavController,
    public push: Push,
    private userService: UserService) { }
  /**
   * @name presentLoginModal
   * @description Presents the Email Capture Modal
   */
  presentApp() {
    this.push.register()
                  .then((t: PushToken) => {
                    return this.push.saveToken(t);
                  })
                  .then((t: PushToken) => {
                    this.userService.login();
                    console.log('Token saved', t.token);
                    this.navCtrl.push(TabsPage);
                  })
                  .catch((err) => {
                    console.error(err);
                    console.error('push token not saved');
                  });
  }
}
