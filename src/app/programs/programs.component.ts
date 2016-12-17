import { Component } from '@angular/core';
import { ProgramsService } from './programs.service';
import { NavController, NavParams } from 'ionic-angular';

import { ProgramsDetailComponent } from './programs-detail.component';


@Component({
  templateUrl: 'programs.component.html',
  styleUrls:['/programs.component.scss'],

})
export class ProgramsComponent {
  programs: any;
  constructor(private programsService: ProgramsService, public navCtrl: NavController){
    this.programs = this.programsService.getPrograms();
  }
  pushPage(program) {
      // Let's navigate from TabsPage to Page1
      this.navCtrl.push(ProgramsDetailComponent, { programs: program});
  console.log(event);
   }

}
