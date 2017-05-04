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
  getPrograms() {
    this.programsService.getPrograms().subscribe((programs) => {
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