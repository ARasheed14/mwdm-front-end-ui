import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/topromise';
import { ProgramsService } from './programs.service';
import { DateConvert } from '../pipes/date.pipe';


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
  constructor(http: Http, private programsService: ProgramsService) { }
  ngOnInit() {
    this.getPrograms();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.programs = {
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wensday: [],
    Thursday: [],
    Friday: [],
    Saturday: []
  };
  this.getPrograms();
    console.log(this.programs);
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  getPrograms() {
    this.programsService.getPrograms().subscribe((programs) => {
      console.log(programs);
      programs.Items.forEach((program)=>{
        let programKey = Days[parseInt(program.dayOfWeek)-1];
        this.programs[programKey].push(program);
      });
      console.log(this.programs);
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
