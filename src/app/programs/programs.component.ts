import { Component } from '@angular/core';
import { LoadingController, ModalController, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/topromise';
import { ProgramsService } from './programs.service';
import { DateConvert } from '../pipes/date.pipe';
import { LoadingComponent } from '../loading/loading.component';




@Component({
  templateUrl: 'programs.component.html',
  styleUrls: ['/programs.component.scss'],
})

export class ProgramsComponent {
  programs = {
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wensday: [],
    Thursday: [],
    Friday: [],
    Saturday: []
  };
  loading;
  constructor(http: Http, private programsService: ProgramsService, private loadingCtrl: LoadingController, private modalCtrl: ModalController) { }
  ngOnInit() {
    let loading = this.modalCtrl.create(LoadingComponent);
    // Show Loading Component
    loading.present();

    this.getPrograms(()=>{
      loading.dismiss();
      });
    }

  getPrograms(callback?) {
    this.programsService.getPrograms().subscribe((programs) => {
      console.log(programs);
      programs.Items.forEach((program)=>{
        let programKey = Days[parseInt(program.dayOfWeek)-1];
        this.programs[programKey].push(program);
      });
      callback();
      console.log(this.programs);
    });
  }
  doRefresh(refresher) {
    this.programs = {
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wensday: [],
    Thursday: [],
    Friday: [],
    Saturday: []
  };
    this.getPrograms(() =>{
     refresher.complete();
    });
  }
}

enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wensday,
  Thursday,
  Friday,
  Saturday
}
