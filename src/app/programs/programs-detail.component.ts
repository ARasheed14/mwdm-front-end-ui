import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProgramsComponent } from './programs.component';
import { ProgramsService } from './programs.service';



@Component({
  templateUrl: 'programs-detail.component.html',
  styleUrls:['/programs.component.scss'],
})
export class ProgramsDetailComponent {
  public program;
  programs: any;
  constructor(private programsService: ProgramsService, public navCtrl: NavController, private navParams: NavParams) {
    this.programs = this.programsService.getPrograms();
    this.programs = navParams.get('programs');
   }
  }
