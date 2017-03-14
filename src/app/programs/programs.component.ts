import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/topromise';
import { ProgramsService } from './programs.service';
import { DateConvert } from '../pipes/date.pipe';


@Component({
  templateUrl: 'programs.component.html',
  styleUrls:['/programs.component.scss'],
})

export class ProgramsComponent {
  programs: any;
  constructor(http: Http, private programsService: ProgramsService) {

  }
  ngOnInit(){
    this.getPrograms();
  }
  getPrograms(){
    this.programsService.getPrograms().subscribe(response => {
      this.programs = response.Items;
      console.log(this.programs);
      console.log(response);
      console.log(response.Items);

    });
  }
}
