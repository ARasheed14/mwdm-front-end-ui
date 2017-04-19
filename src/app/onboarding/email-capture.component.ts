import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, NavParams, NavController} from 'ionic-angular';

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
  login: {email?: string} = {};
  confirmation: {confirmationCode?:string} = {}; 
  isEmailCaptureScreen = true;   
  submitted: boolean = false;

  constructor(public modalControler: ModalController, public navCtrl: NavController, private userService: UserService) {}
  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userService.login(this.login.email).subscribe(()=>{
        this.navCtrl.push(TabsPage);
      });
    }
  }
}
