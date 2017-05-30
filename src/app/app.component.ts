import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Push, PushToken } from '@ionic/cloud-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LecturesService } from './lectures/lectures.service';
import { TabsPage } from './tabs/tabs';

import { OnBoardingComponent } from "./onboarding/onboarding.component";
import { UserService } from "./core/user.service";


@Component({
  templateUrl: 'app.html',
  providers: [LecturesService]
})
export class MyApp {
  rootPage: any = OnBoardingComponent;
  constructor(
    private userService: UserService,
    platform: Platform,
    push: Push,
    splashScreen: SplashScreen,
    statusBar: StatusBar,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      platform.registerBackButtonAction(()=> {

      },);

      userService.hasLoggedIn().then(data => {
        if (data) this.rootPage = TabsPage;
      })

      push.rx.notification()
        .subscribe((msg) => {
          alert(msg.title + ': ' + msg.text);
        });
    });
  }
}
